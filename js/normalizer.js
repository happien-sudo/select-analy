/**
 * 교과목명 정규화 및 학생 데이터 검증 유틸리티
 */

const Normalizer = {
  /**
   * 문자열 정규화 키 생성 (공백 제거, 소문자화, 로마자 변환)
   */
  getNormalizedKey(rawName) {
    if (!rawName) return '';
    return String(rawName)
      .trim()
      .replace(/\s+/g, '')
      .toLowerCase()
      .replace(/ⅰ|Ⅰ/g, '1')
      .replace(/ⅱ|Ⅱ/g, '2')
      .replace(/ⅲ|Ⅲ/g, '3');
  },

  /**
   * 과목명 대조 및 표준 메타데이터 반환
   * 띄어쓰기가 다르거나 오탈자가 있어도 2022 개정 교육과정 표준명으로 복원
   */
  resolveSubject(rawName) {
    if (!rawName) {
      return {
        rawName: '',
        officialName: '미지정 과목',
        group: '기타',
        category: '미지정',
        credits: 4,
        isCustom: true
      };
    }

    const trimmed = String(rawName).trim();
    const key = this.getNormalizedKey(trimmed);

    // 1. 교육과정 마스터 맵에서 검색
    if (typeof CURRICULUM_MAP !== 'undefined' && CURRICULUM_MAP.has(key)) {
      const match = CURRICULUM_MAP.get(key);
      return {
        rawName: trimmed,
        officialName: match.name, // 띄어쓰기가 올바르게 포함된 표준 교과목명
        group: match.group,
        category: match.category,
        credits: match.credits,
        isCustom: false
      };
    }

    // 2. 공백만 제거한 키로 재검색
    const simpleKey = trimmed.replace(/\s+/g, '').toLowerCase();
    if (typeof CURRICULUM_MAP !== 'undefined' && CURRICULUM_MAP.has(simpleKey)) {
      const match = CURRICULUM_MAP.get(simpleKey);
      return {
        rawName: trimmed,
        officialName: match.name,
        group: match.group,
        category: match.category,
        credits: match.credits,
        isCustom: false
      };
    }

    // 3. 고시 외 과목 또는 학교 자율 개설 과목
    // 교과군 자동 추정 (예: '수학' 포함 시 수학, '영어' 포함 시 영어 등)
    let guessedGroup = '고시 외/자율';
    if (/국어|문학|작문|독서/i.test(trimmed)) guessedGroup = '국어';
    else if (/수학|통계|대수|기하|미적/i.test(trimmed)) guessedGroup = '수학';
    else if (/영어|회화|독해|영미/i.test(trimmed)) guessedGroup = '영어';
    else if (/사회|지리|역사|정치|경제|윤리|문화/i.test(trimmed)) guessedGroup = '사회';
    else if (/물리|화학|생명|지구|과학|실험/i.test(trimmed)) guessedGroup = '과학';
    else if (/체육|스포츠|건강/i.test(trimmed)) guessedGroup = '체육';
    else if (/음악|미술|연극|공연/i.test(trimmed)) guessedGroup = '예술';
    else if (/정보|소프트|인공지능|데이터|코딩|컴퓨터/i.test(trimmed)) guessedGroup = '기술·가정/정보';
    else if (/독일|프랑스|스페인|중국|일본|러시아|아랍|베트남|한문/i.test(trimmed)) guessedGroup = '제2외국어/한문';

    return {
      rawName: trimmed,
      officialName: trimmed, // 사용자 입력 과목명 그대로 유지
      group: guessedGroup,
      category: '고시 외 / 학교자율',
      credits: 4,
      isCustom: true
    };
  },

  /**
   * 해당 셀 값이 '과목 선택'으로 인정되는지 판별
   */
  isSubjectSelected(val) {
    if (val === null || val === undefined) return false;
    if (typeof val === 'number') return val > 0;
    if (typeof val === 'boolean') return val;

    const str = String(val).trim().toUpperCase();
    return ['1', 'O', 'V', 'Y', 'TRUE', '선택', '신청', '1.0', '참여'].includes(str);
  },

  /**
   * 학년, 반, 번호 포맷팅 (학생 이름 노출 금지)
   */
  formatStudentId(grade, classNum, studentNum) {
    const g = String(grade || '').trim();
    const c = String(classNum || '').trim();
    const n = String(studentNum || '').trim();
    return `${g}학년 ${c}반 ${n}번`;
  },

  /**
   * 학급 수 산출 공식 (25명 기준, 소수점 첫째자리 반올림)
   * @param {number} applicantCount 신청 학생 수
   * @param {number} standardPerClass 학급당 기준 인원수 (기본 25명)
   * @returns {{ decimal: number, rounded: number }}
   */
  calculateClasses(applicantCount, standardPerClass = 25) {
    if (!applicantCount || applicantCount <= 0) {
      return { decimal: 0, rounded: 0 };
    }
    const rawRatio = applicantCount / standardPerClass;
    const decimal = Math.round(rawRatio * 10) / 10; // 소수 첫째자리까지 표시
    const rounded = Math.round(rawRatio); // 소수 첫째자리에서 반올림
    return { decimal, rounded };
  }
};

if (typeof window !== 'undefined') {
  window.Normalizer = Normalizer;
}
