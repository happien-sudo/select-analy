/**
 * 엑셀 데이터 분석 및 학급 수 산출 엔진
 */

const Analyzer = {
  /**
   * 업로드된 워크북 분석 실행
   * @param {Object} workbook SheetJS 워크북 객체
   * @param {number} standardPerClass 학급당 기준 인원수 (기본 25명)
   * @returns {Object} 분석 결과 종합 데이터
   */
  analyzeWorkbook(workbook, standardPerClass = 25) {
    const sheetResults = [];

    workbook.SheetNames.forEach(sheetName => {
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) return;

      const rawAoa = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
      if (!rawAoa || rawAoa.length < 2) return;

      const parsedSheet = this.parseSheetData(sheetName, rawAoa, standardPerClass);
      if (parsedSheet && parsedSheet.subjectStats.length > 0) {
        sheetResults.push(parsedSheet);
      }
    });

    // 종합 통계 집계
    const summary = this.generateOverallSummary(sheetResults, standardPerClass);

    return {
      sheets: sheetResults,
      summary,
      standardPerClass
    };
  },

  /**
   * 단일 시트 2차원 배열 데이터 파싱
   */
  parseSheetData(sheetName, aoa, standardPerClass) {
    // 1. 헤더 행(학년, 반, 번호가 포함된 행) 탐색
    let headerRowIdx = -1;
    let gradeCol = -1;
    let classCol = -1;
    let numCol = -1;
    let nameCol = -1; // 개인정보 마스킹용

    for (let r = 0; r < Math.min(aoa.length, 10); r++) {
      const row = aoa[r];
      if (!Array.isArray(row)) continue;

      let hasGrade = false;
      let hasClass = false;
      let hasNum = false;

      row.forEach((cell, c) => {
        const cellStr = String(cell).trim().replace(/\s+/g, '');
        if (cellStr.includes('학년')) {
          gradeCol = c;
          hasGrade = true;
        } else if (cellStr === '반') {
          classCol = c;
          hasClass = true;
        } else if (cellStr.includes('번호') || cellStr === '번') {
          numCol = c;
          hasNum = true;
        } else if (cellStr.includes('이름') || cellStr.includes('성명')) {
          nameCol = c;
        }
      });

      if (hasGrade && hasClass && hasNum) {
        headerRowIdx = r;
        break;
      }
    }

    // 기본 헤더 행을 못 찾을 경우 0행을 헤더로 가정 (0: 학년, 1: 반, 2: 번호)
    if (headerRowIdx === -1) {
      headerRowIdx = 0;
      gradeCol = 0;
      classCol = 1;
      numCol = 2;
    }

    const headerRow = aoa[headerRowIdx];
    const excludedCols = new Set([gradeCol, classCol, numCol, nameCol].filter(c => c >= 0));

    // 2. 과목 컬럼 정보 구성 (띄어쓰기 정규화 및 메타데이터 매핑)
    const subjectColumns = [];
    headerRow.forEach((colHeader, c) => {
      if (excludedCols.has(c)) return;

      const headerText = String(colHeader).trim();
      if (!headerText) return;

      const resolved = Normalizer.resolveSubject(headerText);
      subjectColumns.push({
        colIdx: c,
        rawName: headerText,
        officialName: resolved.officialName,
        group: resolved.group,
        category: resolved.category,
        credits: resolved.credits,
        isCustom: resolved.isCustom,
        selectedCount: 0,
        studentList: [] // 학생 식별 정보 (학년, 반, 번호만 포함 - 이름 절대 없음)
      });
    });

    if (subjectColumns.length === 0) return null;

    // 3. 학생 응답 행 분석
    const students = [];
    const studentRows = aoa.slice(headerRowIdx + 1);

    studentRows.forEach(row => {
      if (!Array.isArray(row) || row.length === 0) return;

      const gradeVal = row[gradeCol];
      const classVal = row[classCol];
      const numVal = row[numCol];

      // 학년, 반, 번호 중 최소 하나라도 입력되어 있는지 체크
      if (!gradeVal && !classVal && !numVal) return;

      const studentIdStr = Normalizer.formatStudentId(gradeVal, classVal, numVal);
      const studentSelections = [];

      subjectColumns.forEach(subj => {
        const cellValue = row[subj.colIdx];
        if (Normalizer.isSubjectSelected(cellValue)) {
          subj.selectedCount++;
          subj.studentList.push({
            grade: gradeVal,
            classNum: classVal,
            studentNum: numVal,
            label: studentIdStr
          });
          studentSelections.push(subj.officialName);
        }
      });

      students.push({
        grade: gradeVal,
        classNum: classVal,
        studentNum: numVal,
        label: studentIdStr,
        selectedSubjects: studentSelections,
        totalSelected: studentSelections.length
      });
    });

    // 4. 과목별 통계 및 학급 수 산출
    const totalStudents = students.length;
    const subjectStats = subjectColumns.map(subj => {
      const { decimal, rounded } = Normalizer.calculateClasses(subj.selectedCount, standardPerClass);
      const percentage = totalStudents > 0
        ? Math.round((subj.selectedCount / totalStudents) * 1000) / 10
        : 0;

      return {
        rawName: subj.rawName,
        officialName: subj.officialName,
        group: subj.group,
        category: subj.category,
        credits: subj.credits,
        isCustom: subj.isCustom,
        count: subj.selectedCount,
        percentage,
        decimalClasses: decimal,
        roundedClasses: rounded,
        studentList: subj.studentList
      };
    });

    // 기본 정렬: 신청 학생 수 내림차순
    subjectStats.sort((a, b) => b.count - a.count);

    return {
      sheetName,
      totalStudents,
      subjectStats,
      students
    };
  },

  /**
   * 전체 시트 통합 통계 생성
   */
  generateOverallSummary(sheetResults, standardPerClass) {
    let grandTotalStudents = 0;
    let grandTotalClasses = 0;
    const subjectMap = new Map();
    const groupStats = {};

    sheetResults.forEach(sh => {
      grandTotalStudents += sh.totalStudents;

      sh.subjectStats.forEach(sub => {
        grandTotalClasses += sub.roundedClasses;

        // 과목별 전체 합계
        const key = sub.officialName;
        if (!subjectMap.has(key)) {
          subjectMap.set(key, {
            officialName: sub.officialName,
            group: sub.group,
            category: sub.category,
            totalCount: 0,
            sheetOccurrences: []
          });
        }
        const sEntry = subjectMap.get(key);
        sEntry.totalCount += sub.count;
        sEntry.sheetOccurrences.push({
          sheetName: sh.sheetName,
          count: sub.count,
          roundedClasses: sub.roundedClasses
        });

        // 교과군별 통계
        if (!groupStats[sub.group]) {
          groupStats[sub.group] = {
            group: sub.group,
            totalCount: 0,
            subjectCount: 0,
            totalClasses: 0
          };
        }
        groupStats[sub.group].totalCount += sub.count;
        groupStats[sub.group].subjectCount += 1;
        groupStats[sub.group].totalClasses += sub.roundedClasses;
      });
    });

    const allSubjectList = Array.from(subjectMap.values());
    allSubjectList.sort((a, b) => b.totalCount - a.totalCount);

    return {
      totalSheets: sheetResults.length,
      grandTotalStudents,
      grandTotalClasses,
      allSubjects: allSubjectList,
      groupStats: Object.values(groupStats)
    };
  }
};

if (typeof window !== 'undefined') {
  window.Analyzer = Analyzer;
}
