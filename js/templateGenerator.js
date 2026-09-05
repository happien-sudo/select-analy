/**
 * 공통 양식 및 샘플 엑셀 파일 생성기 (SheetJS 활용)
 */

const TemplateGenerator = {
  // 학기별 기본 교과목 구성 (사용자 제공 'select number' 기준)
  defaultSubjects: {
    'grade2_term1': [
      '대수', '문학', '스포츠 생활1', '영어Ⅰ', '확률과 통계',
      '사회와 문화', '세계사', '현대사회와 윤리', '세계시민과 지리',
      '물리학', '화학', '생명과학', '지구과학',
      '중국어', '일본어', '정보', '한문'
    ],
    'grade2_term2': [
      '독서와 작문', '미적분Ⅰ', '스포츠 생활2', '영어Ⅱ', '언어생활 탐구',
      '기하', '영미 문학 읽기', '법과 사회', '윤리와 사상', '동아시아 역사 기행',
      '한국지리 탐구', '사회문제 탐구', '역학과 에너지', '화학 반응의 세계',
      '세포와 물질대사', '지구시스템과학', '과학과제 연구',
      '중국 문화', '일본어 회화', '인공지능 기초', '언어생활과 한자'
    ],
    'grade3_term1': [
      '화법과 언어', '영어 독해와 작문', '음악 감상과 비평', '스포츠 과학',
      '경제 수학', '미적분Ⅱ', '문학과 영상', '인공지능 수학', '심화 영어',
      '국제 관계의 이해', '인문학과 윤리', '도시의 미래 탐구',
      '기후변화와 지속가능한 세계', '전자기와 양자', '물질과 에너지',
      '생물의 유전', '행성우주과학', '인간과 심리', '심화 일본어',
      '데이터 과학', '생활과 한문'
    ],
    'grade3_term2': [
      '독서 토론과 글쓰기', '심화 영어 독해와 작문', '융합사고수학', '미술 감상과 비평',
      '스포츠 문화', '주제 탐구 독서', '수학과 문화', '미디어 영어', '여행지리',
      '윤리문제 탐구', '금융과 경제생활', '역사로 탐구하는 현대 세계',
      '과학의 역사와 문화', '기후변화와 환경생태', '융합과학 탐구',
      '중국 언어와 역사의 이해 1', '일본 문화', '소프트웨어와 생활', '한문 고전 읽기'
    ]
  },

  /**
   * 시트 이름 배열 생성 (기준 연도 반영)
   */
  getSheetNames(baseYear = 2026) {
    return [
      `${baseYear}입학생 2학년 1학기`,
      `${baseYear}입학생 2학년 2학기`,
      `${baseYear - 1}입학생 3학년 1학기`,
      `${baseYear - 1}입학생 3학년 2학기`
    ];
  },

  /**
   * 공통 빈 양식 엑셀 파일 생성 및 다운로드
   */
  downloadBlankTemplate(baseYear = 2026) {
    if (typeof XLSX === 'undefined') {
      alert('SheetJS 라이브러리가 로드되지 않았습니다.');
      return;
    }

    const wb = XLSX.utils.book_new();
    const sheetNames = this.getSheetNames(baseYear);
    const subjectKeys = ['grade2_term1', 'grade2_term2', 'grade3_term1', 'grade3_term2'];

    sheetNames.forEach((sheetName, idx) => {
      const subjects = this.defaultSubjects[subjectKeys[idx]];
      const headers = ['학년', '반', '번호', ...subjects];

      // 예시 입력 안내 행 (1학년/2학년 1반 1~3번 빈 틀)
      const grade = idx < 2 ? 1 : 2;
      const rows = [headers];

      for (let ban = 1; ban <= 2; ban++) {
        for (let num = 1; num <= 3; num++) {
          const row = [grade, ban, num];
          for (let s = 0; s < subjects.length; s++) {
            row.push(''); // 선택 시 1 입력
          }
          rows.push(row);
        }
      }

      const ws = XLSX.utils.aoa_to_sheet(rows);

      // 열 너비 자동 조정
      ws['!cols'] = [
        { wch: 8 }, // 학년
        { wch: 8 }, // 반
        { wch: 8 }, // 번호
        ...subjects.map(s => ({ wch: Math.max(s.length * 2.2, 12) }))
      ];

      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    const fileName = `고교_선택과목_입력양식_${baseYear}기준.xlsx`;
    XLSX.writeFile(wb, fileName);
  },

  /**
   * 실제 예시 데이터(select number 기반)가 채워진 샘플 파일 다운로드
   */
  downloadSampleTemplate(baseYear = 2026) {
    if (typeof XLSX === 'undefined') {
      alert('SheetJS 라이브러리가 로드되지 않았습니다.');
      return;
    }

    const wb = XLSX.utils.book_new();
    const sheetNames = this.getSheetNames(baseYear);
    const subjectKeys = ['grade2_term1', 'grade2_term2', 'grade3_term1', 'grade3_term2'];

    // 시트별 시뮬레이션 데이터 생성
    sheetNames.forEach((sheetName, idx) => {
      const subjects = this.defaultSubjects[subjectKeys[idx]];
      const headers = ['학년', '반', '번호', ...subjects];
      const rows = [headers];

      const currentGrade = idx < 2 ? 1 : 2; // 2026기준 현재 1학년 또는 현재 2학년
      const studentCountPerClass = 24; // 반당 24명
      const classCount = 8; // 8개 반

      // 각 학생별 가상 선택 데이터 생성 (실제 학교 선택 패턴 유사하게)
      for (let ban = 1; ban <= classCount; ban++) {
        for (let num = 1; num <= studentCountPerClass; num++) {
          const row = [currentGrade, ban, num];

          // 과목군에 맞게 3~5개 과목을 선택(1)하도록 확률적 생성
          const studentSeed = (ban * 31 + num * 17 + idx * 43) % 100;
          const isScienceTrack = studentSeed % 2 === 0;

          subjects.forEach((subj) => {
            let isSelected = 0;
            const norm = subj.replace(/\s+/g, '');

            if (idx === 0) { // 2학년 1학기
              if (['대수', '문학', '스포츠생활1', '영어Ⅰ'].includes(norm)) {
                isSelected = 1; // 기본 필수급
              } else if (isScienceTrack && ['물리학', '화학', '생명과학', '지구과학', '정보'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else if (!isScienceTrack && ['사회와문화', '세계사', '현대사회와윤리', '세계시민과지리', '일본어'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else {
                isSelected = (studentSeed * 7 + norm.length) % 5 === 0 ? 1 : 0;
              }
            } else if (idx === 1) { // 2학년 2학기
              if (['독서와작문', '스포츠생활2', '영어Ⅱ'].includes(norm)) {
                isSelected = 1;
              } else if (isScienceTrack && ['미적분Ⅰ', '기하', '역학과에너지', '화학반응의세계', '세포와물질대사'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else if (!isScienceTrack && ['법과사회', '윤리와사상', '한국지리탐구', '사회문제탐구'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else {
                isSelected = (studentSeed * 11 + norm.length) % 6 === 0 ? 1 : 0;
              }
            } else if (idx === 2) { // 3학년 1학기
              if (['화법과언어', '영어독해와작문', '음악감상과비평', '스포츠과학'].includes(norm)) {
                isSelected = 1;
              } else if (isScienceTrack && ['미적분Ⅱ', '전자기와양자', '물질과에너지', '생물의유전', '데이터과학'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else if (!isScienceTrack && ['경제수학', '국제관계의이해', '인문학과윤리', '인간과심리'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else {
                isSelected = (studentSeed * 13 + norm.length) % 6 === 0 ? 1 : 0;
              }
            } else { // 3학년 2학기
              if (['독서토론과글쓰기', '심화영어독해와작문', '미술감상과비평', '스포츠문화'].includes(norm)) {
                isSelected = 1;
              } else if (isScienceTrack && ['융합과학탐구', '과학의역사와문화', '소프트웨어와생활'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else if (!isScienceTrack && ['여행지리', '윤리문제탐구', '금융과경제생활', '역사로탐구하는현대세계'].includes(norm)) {
                isSelected = (studentSeed + norm.length) % 3 !== 0 ? 1 : 0;
              } else {
                isSelected = (studentSeed * 17 + norm.length) % 7 === 0 ? 1 : 0;
              }
            }
            row.push(isSelected);
          });

          rows.push(row);
        }
      }

      const ws = XLSX.utils.aoa_to_sheet(rows);
      ws['!cols'] = [
        { wch: 8 },
        { wch: 8 },
        { wch: 8 },
        ...subjects.map(s => ({ wch: Math.max(s.length * 2.2, 12) }))
      ];
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    const fileName = `고교_선택과목_샘플데이터_${baseYear}기준.xlsx`;
    XLSX.writeFile(wb, fileName);
  },

  /**
   * 분석 결과를 엑셀 파일로 내보내기
   */
  exportAnalysisResults(analysisResults, baseYear = 2026, standardPerClass = 25) {
    if (typeof XLSX === 'undefined') {
      alert('SheetJS 라이브러리가 로드되지 않았습니다.');
      return;
    }

    const wb = XLSX.utils.book_new();

    // 1. 종합 요약 시트
    const summaryRows = [
      ['2022 개정 교육과정 고교 선택과목 수요 분석 및 학급 수 산출 결과 보고서'],
      [`기준 연도: ${baseYear}년 | 학급 편성 기준: 학급당 ${standardPerClass}명 (소수 첫째자리 반올림)`],
      [`작성일시: ${new Date().toLocaleString('ko-KR')}`],
      [],
      ['학기 구분', '총 학생 수', '선택 과목 수', '총 산출 학급 수', '과목당 평균 신청자 수']
    ];

    analysisResults.sheets.forEach(sh => {
      const totalClasses = sh.subjectStats.reduce((sum, item) => sum + item.roundedClasses, 0);
      const avgApplicants = sh.subjectStats.length > 0
        ? Math.round((sh.subjectStats.reduce((sum, item) => sum + item.count, 0) / sh.subjectStats.length) * 10) / 10
        : 0;

      summaryRows.push([
        sh.sheetName,
        `${sh.totalStudents}명`,
        `${sh.subjectStats.length}과목`,
        `${totalClasses}학급`,
        `${avgApplicants}명`
      ]);
    });

    const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
    wsSummary['!cols'] = [{ wch: 28 }, { wch: 14 }, { wch: 14 }, { wch: 16 }, { wch: 22 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, '종합요약');

    // 2. 각 시트별 세부 분석 시트
    analysisResults.sheets.forEach(sh => {
      const sheetDetailRows = [
        [`[${sh.sheetName}] 과목별 수요 분석 및 개설 필요 학급 수`],
        [`총 응답 학생 수: ${sh.totalStudents}명 | 학급당 기준: ${standardPerClass}명`],
        [],
        ['연번', '교과군', '과목구분', '표준 과목명', '입력 과목명', '신청 학생 수', '신청 비율(%)', `산출 학급수(소수점)`, `필요 학급수(반올림)`, '운영 권장 상태']
      ];

      sh.subjectStats.forEach((sub, idx) => {
        const ratio = sh.totalStudents > 0
          ? `${((sub.count / sh.totalStudents) * 100).toFixed(1)}%`
          : '0.0%';

        let status = '적정 개설';
        if (sub.roundedClasses === 0) status = '소인수/폐강고려(12명 이하)';
        else if (sub.roundedClasses >= 4) status = '대규모(4학급 이상)';

        sheetDetailRows.push([
          idx + 1,
          sub.group,
          sub.category,
          sub.officialName,
          sub.rawName,
          sub.count,
          ratio,
          sub.decimalClasses,
          sub.roundedClasses,
          status
        ]);
      });

      const wsDetail = XLSX.utils.aoa_to_sheet(sheetDetailRows);
      wsDetail['!cols'] = [
        { wch: 6 },
        { wch: 14 },
        { wch: 12 },
        { wch: 22 },
        { wch: 22 },
        { wch: 14 },
        { wch: 14 },
        { wch: 18 },
        { wch: 18 },
        { wch: 26 }
      ];

      // 안전한 시트 이름(31자 제한)
      const safeSheetName = sh.sheetName.substring(0, 30);
      XLSX.utils.book_append_sheet(wb, wsDetail, safeSheetName);
    });

    const fileName = `선택과목_수요분석_결과_${baseYear}년.xlsx`;
    XLSX.writeFile(wb, fileName);
  }
};

if (typeof window !== 'undefined') {
  window.TemplateGenerator = TemplateGenerator;
}
