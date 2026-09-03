/**
 * 정명고등학교 2027학년도 과목 선택 결과 분석 대시보드
 * School Official Curriculum Definition & Universal 0/1 Matrix Parser
 */

// -------------------------------------------------------------
// Official School Curriculum Definition (2026 & 2025 입학생)
// -------------------------------------------------------------
const CURRICULUM_DEFINITION = {
  '2026_2_1': {
    name: '2026 입학생 (2학년 1학기)',
    designated: [
      { name: '대수', category: '기초', units: 3 },
      { name: '문학', category: '기초', units: 3 },
      { name: '스포츠 생활1', category: '예체능', units: 2 },
      { name: '영어Ⅰ', category: '기초', units: 3 },
      { name: '확률과 통계', category: '기초', units: 3 }
    ],
    groups: [
      {
        id: 'sel_4',
        name: '선택 4과목',
        badge: '택4',
        requiredCount: 4,
        subjects: [
          { name: '사회와 문화', category: '사회', units: 3 },
          { name: '현대사회와 윤리', category: '사회', units: 3 },
          { name: '세계사', category: '사회', units: 3 },
          { name: '세계시민과 지리', category: '사회', units: 3 },
          { name: '물리학', category: '과학', units: 3 },
          { name: '화학', category: '과학', units: 3 },
          { name: '생명과학', category: '과학', units: 3 },
          { name: '지구과학', category: '과학', units: 3 }
        ]
      },
      {
        id: 'sel_1',
        name: '선택 1과목',
        badge: '택1',
        requiredCount: 1,
        subjects: [
          { name: '중국어', category: '생활교양', units: 3 },
          { name: '일본어', category: '생활교양', units: 3 },
          { name: '정보', category: '생활교양', units: 3 },
          { name: '한문', category: '생활교양', units: 3 }
        ]
      }
    ]
  },
  '2026_2_2': {
    name: '2026 입학생 (2학년 2학기)',
    designated: [
      { name: '독서와 작문', category: '기초', units: 3 },
      { name: '미적분Ⅰ', category: '기초', units: 3 },
      { name: '영어Ⅱ', category: '기초', units: 3 },
      { name: '스포츠 생활2', category: '예체능', units: 2 }
    ],
    groups: [
      {
        id: 'sel_5',
        name: '선택 5과목',
        badge: '택5',
        requiredCount: 5,
        subjects: [
          { name: '언어생활 탐구', category: '기초', units: 3 },
          { name: '기하', category: '기초', units: 3 },
          { name: '영미 문학 읽기', category: '기초', units: 3 },
          { name: '법과 사회', category: '사회', units: 3 },
          { name: '윤리와 사상', category: '사회', units: 3 },
          { name: '동아시아 역사 기행', category: '사회', units: 3 },
          { name: '한국지리 탐구', category: '사회', units: 3 },
          { name: '사회문제 탐구', category: '사회', units: 3 },
          { name: '역학과 에너지', category: '과학', units: 3 },
          { name: '화학반응의 세계', category: '과학', units: 3 },
          { name: '세포와 물질대사', category: '과학', units: 3 },
          { name: '지구시스템과학', category: '과학', units: 3 },
          { name: '과학과제연구', category: '과학', units: 3 }
        ]
      },
      {
        id: 'sel_1',
        name: '선택 1과목',
        badge: '택1',
        requiredCount: 1,
        subjects: [
          { name: '중국 문화', category: '생활교양', units: 3 },
          { name: '일본어 회화', category: '생활교양', units: 3 },
          { name: '인공지능 기초', category: '생활교양', units: 3 },
          { name: '언어생활과 한자', category: '생활교양', units: 3 }
        ]
      }
    ]
  },
  '2025_3_1': {
    name: '2025 입학생 (3학년 1학기)',
    designated: [
      { name: '화법과 언어', category: '기초', units: 3 },
      { name: '영어 독해와 작문', category: '기초', units: 3 },
      { name: '스포츠 과학', category: '예체능', units: 1 },
      { name: '음악감상과 비평', category: '예체능', units: 3 }
    ],
    groups: [
      {
        id: 'sel_math_1',
        name: '선택 1과목(수학)',
        badge: '택1',
        requiredCount: 1,
        subjects: [
          { name: '미적분Ⅱ', category: '기초', units: 3 },
          { name: '경제수학', category: '기초', units: 3 }
        ]
      },
      {
        id: 'sel_4',
        name: '선택 4과목',
        badge: '택4',
        requiredCount: 4,
        subjects: [
          { name: '문학과 영상', category: '기초', units: 3 },
          { name: '인공지능 수학', category: '기초', units: 3 },
          { name: '심화영어', category: '기초', units: 3 },
          { name: '국제 관계의 이해', category: '사회', units: 3 },
          { name: '인문학과 윤리', category: '사회', units: 3 },
          { name: '도시의 미래 탐구', category: '사회', units: 3 },
          { name: '기후변화와 지속가능한 세계', category: '사회', units: 3 },
          { name: '전자기와 양자', category: '과학', units: 3 },
          { name: '물질과 에너지', category: '과학', units: 3 },
          { name: '생물의 유전', category: '과학', units: 3 },
          { name: '행성우주과학', category: '과학', units: 3 }
        ]
      },
      {
        id: 'sel_arts_1',
        name: '선택 1과목(교양)',
        badge: '택1',
        requiredCount: 1,
        subjects: [
          { name: '인간과 심리', category: '생활교양', units: 3 },
          { name: '심화 일본어', category: '생활교양', units: 3 },
          { name: '데이터 과학', category: '생활교양', units: 3 },
          { name: '생활과 한문', category: '생활교양', units: 3 }
        ]
      }
    ]
  },
  '2025_3_2': {
    name: '2025 입학생 (3학년 2학기)',
    designated: [
      { name: '독서 토론과 글쓰기', category: '기초', units: 3 },
      { name: '심화 영어 독해와 작문', category: '기초', units: 3 },
      { name: '스포츠 문화', category: '예체능', units: 1 },
      { name: '미술감상과 비평', category: '예체능', units: 3 },
      { name: '융합사고 수학', category: '기초', units: 3 }
    ],
    groups: [
      {
        id: 'sel_4',
        name: '선택 4과목',
        badge: '택4',
        requiredCount: 4,
        subjects: [
          { name: '주제 탐구 독서', category: '기초', units: 3 },
          { name: '수학과 문화', category: '기초', units: 3 },
          { name: '미디어 영어', category: '기초', units: 3 },
          { name: '여행지리', category: '사회', units: 3 },
          { name: '윤리문제 탐구', category: '사회', units: 3 },
          { name: '금융과 경제생활', category: '사회', units: 3 },
          { name: '역사로 탐구하는 현대 세계', category: '사회', units: 3 },
          { name: '과학의 역사와 문화', category: '과학', units: 3 },
          { name: '기후변화와 환경생태', category: '과학', units: 3 },
          { name: '융합과학 탐구', category: '과학', units: 3 }
        ]
      },
      {
        id: 'sel_1',
        name: '선택 1과목',
        badge: '택1',
        requiredCount: 1,
        subjects: [
          { name: '중국 언어와 역사의 이해1', category: '생활교양', units: 3 },
          { name: '일본 문화', category: '생활교양', units: 3 },
          { name: '소프트웨어와 생활', category: '생활교양', units: 3 },
          { name: '한문고전읽기', category: '생활교양', units: 3 }
        ]
      }
    ]
  }
};

// Global Application State
const state = {
  activeTab: '2026_2_1',
  categoryFilter: 'all',
  typeFilter: 'all',
  searchQuery: '',
  simClassSize: 25,
  expertCohort: '2026_2_1',
  studentCohort: '2026_2_1',
  studentBan: '1',
  masterCohortFilter: 'all',
  masterCategoryFilter: 'all',
  masterSearchQuery: '',
  data: {
    '2026_2_1': { name: '2026 입학생 (2학년 1학기)', students: [], subjects: [] },
    '2026_2_2': { name: '2026 입학생 (2학년 2학기)', students: [], subjects: [] },
    '2025_3_1': { name: '2025 입학생 (3학년 1학기)', students: [], subjects: [] },
    '2025_3_2': { name: '2025 입학생 (3학년 2학기)', students: [], subjects: [] }
  },
  charts: {
    bar: null,
    donut: null
  }
};

// Pastel Color Palette for Charts
const PASTEL_COLORS = [
  'rgba(129, 140, 248, 0.85)', // Lavender Blue
  'rgba(56, 189, 248, 0.85)',  // Sky Blue
  'rgba(52, 211, 153, 0.85)',  // Emerald Mint
  'rgba(251, 113, 133, 0.85)', // Pastel Coral
  'rgba(251, 191, 36, 0.85)',  // Soft Amber
  'rgba(192, 132, 252, 0.85)', // Soft Purple
  'rgba(45, 212, 191, 0.85)',  // Teal
  'rgba(244, 114, 182, 0.85)', // Pink
  'rgba(167, 139, 250, 0.85)', // Indigo
  'rgba(148, 163, 184, 0.85)'  // Slate
];

// -------------------------------------------------------------
// Normalization & Curriculum Lookup
// -------------------------------------------------------------
function normalizeSubjectKey(name) {
  return String(name || '')
    .replace(/\s+/g, '')
    .replace(/Ⅰ/g, 'I').replace(/Ⅱ/g, 'II')
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .trim();
}

function cleanSubjectName(name) {
  if (!name) return '';
  let str = String(name).trim();
  str = str.replace(/\(\s*\d+\s*(단위|학점)?\s*\)/g, '');
  str = str.replace(/\(\s*(지정|선택|공통)\s*\)/g, '');
  str = str.replace(/\[\s*(지정|선택|공통|택\d+)\s*\]/g, '');
  str = str.replace(/\s+/g, ' ').trim();

  // Standardize common variations
  if (str === '물리학I' || str === '물리학Ⅰ' || str === '물리1' || str === '물리') return '물리학';
  if (str === '화학I' || str === '화학Ⅰ' || str === '화학1') return '화학';
  if (str === '생명과학I' || str === '생명과학Ⅰ' || str === '생명1' || str === '생명') return '생명과학';
  if (str === '지구과학I' || str === '지구과학Ⅰ' || str === '지구1' || str === '지구') return '지구과학';
  if (str === '영어I' || str === '영어1') return '영어Ⅰ';
  if (str === '영어II' || str === '영어2') return '영어Ⅱ';
  if (str === '미적분I' || str === '미적분1') return '미적분Ⅰ';
  if (str === '미적분II' || str === '미적분2') return '미적분Ⅱ';
  if (str === '스포츠생활1' || str === '스포츠 생활 1') return '스포츠 생활1';
  if (str === '스포츠생활2' || str === '스포츠 생활 2') return '스포츠 생활2';
  return str;
}

// Helper: Extract Subject Name & Group Designation (학교지정, 택4, 택5, 택1...)
function extractSubjectAndGroup(rawText, inheritedGroup = '') {
  let text = String(rawText || '').trim();
  let group = inheritedGroup;

  // Pattern: "[택5] 물리학", "택5(물리학)", "택5_물리학", "학교지정: 문학"
  const bracketMatch = text.match(/^\[(.*?)\]\s*(.*)$/) || 
                       text.match(/^(택\d+|선택\s*\d+과목|학교지정|지정|선택)\s*[\(_\-:\/]\s*(.*?)\)?$/);
  if (bracketMatch) {
    group = bracketMatch[1].trim();
    text = bracketMatch[2].replace(/\)$/, '').trim();
  }

  // Handle newline in cell: e.g. "택5\n물리학"
  if (text.includes('\n')) {
    const parts = text.split('\n').map(p => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      if (parts[0].includes('택') || parts[0].includes('지정') || parts[0].includes('선택')) {
        group = parts[0];
        text = parts[1];
      }
    }
  }

  let finalSub = cleanSubjectName(text);
  return {
    rawName: rawText,
    cleanName: finalSub,
    group: group || '학생선택'
  };
}

// Helper: Check if string looks like a school subject name
function isLikelySubjectName(name) {
  if (!name || name.length < 2 || name.length > 25) return false;
  if (!isNaN(name)) return false;
  const norm = String(name).replace(/\s+/g, '');
  if (['학년', '반', '번호', '이름', '성명', '학번', '순번', '연번', '비고', '합계', '총계', '구분', '출석번호'].includes(norm)) {
    return false;
  }
  const keywords = [
    '문학', '독서', '작문', '화법', '언어', '수학', '대수', '미적분', '기하', '통계',
    '영어', '물리', '화학', '생명', '지구', '과학', '사회', '역사', '지리', '윤리',
    '경제', '정치', '법', '스포츠', '체육', '음악', '미술', '중국', '일본', '한문',
    '정보', '소프트웨어', '데이터', '인공지능', '심리', '철학', '보건', '세계', '생물',
    '양자', '전자기', '에너지', '우주', '환경', '기후', '탐구', '융합'
  ];
  return keywords.some(k => norm.includes(k));
}

// Lookup curriculum info for a subject in a specific cohort
function getCurriculumSubject(cohortKey, subjectName) {
  const def = CURRICULUM_DEFINITION[cohortKey];
  if (!def) return null;

  const targetNorm = normalizeSubjectKey(subjectName);

  // 1. Check designated subjects
  for (const d of def.designated) {
    if (normalizeSubjectKey(d.name) === targetNorm) {
      return {
        name: d.name,
        category: d.category,
        units: d.units,
        type: '지정',
        group: '학교지정',
        badge: '학교지정'
      };
    }
  }

  // 2. Check selection groups
  for (const g of def.groups) {
    for (const s of g.subjects) {
      if (normalizeSubjectKey(s.name) === targetNorm) {
        return {
          name: s.name,
          category: s.category,
          units: s.units,
          type: '선택',
          groupId: g.id,
          group: g.name,
          badge: g.badge
        };
      }
    }
  }

  return null;
}

// Fallback metadata for subjects outside curriculum definition
function getSubjectMeta(subName, cohortKey = '') {
  if (cohortKey) {
    const cur = getCurriculumSubject(cohortKey, subName);
    if (cur) return cur;
  }

  const clean = cleanSubjectName(subName);
  // Auto-categorize fallback
  if (clean.includes('국어') || clean.includes('문학') || clean.includes('독서') || clean.includes('작문') || clean.includes('화법') || clean.includes('언어') || clean.includes('수학') || clean.includes('대수') || clean.includes('미적') || clean.includes('기하') || clean.includes('영어')) {
    return { category: '기초', type: '선택', units: 3, group: '학생선택', badge: '선택' };
  }
  if (clean.includes('물리') || clean.includes('화학') || clean.includes('생명') || clean.includes('지구') || clean.includes('과학') || clean.includes('양자') || clean.includes('에너지')) {
    return { category: '과학', type: '선택', units: 3, group: '선택 4과목', badge: '택4' };
  }
  if (clean.includes('사회') || clean.includes('지리') || clean.includes('역사') || clean.includes('윤리') || clean.includes('법') || clean.includes('경제') || clean.includes('세계') || clean.includes('국제')) {
    return { category: '사회', type: '선택', units: 3, group: '선택 4과목', badge: '택4' };
  }
  if (clean.includes('스포츠') || clean.includes('체육') || clean.includes('음악') || clean.includes('미술')) {
    return { category: '예체능', type: '선택', units: clean.includes('스포츠') ? 2 : 3, group: '학교지정', badge: '지정' };
  }
  return { category: '생활교양', type: '선택', units: 3, group: '선택 1과목', badge: '택1' };
}

// Priority for subject ordering in tables:
// 1. 학교지정
// 2. 선택 수가 많은 과목군 (택5 -> 택4 -> 택3...)
// 3. 선택 1과목 (택1)
// 4. 기타
function getSubjectGroupPriority(sub) {
  const g = String(sub.group || sub.badge || '').replace(/\s+/g, '');
  if (sub.type === '지정' || g.includes('학교지정') || g.includes('지정')) return 1;
  if (g.includes('선택5') || g.includes('택5')) return 2;
  if (g.includes('선택4') || g.includes('택4')) return 3;
  if (g.includes('선택3') || g.includes('택3')) return 4;
  if (g.includes('선택2') || g.includes('택2')) return 5;
  if (g.includes('선택1') || g.includes('택1')) return 6;
  return 7;
}

// -------------------------------------------------------------
// Sample Realistic Data Generator (Default State)
// Accurately models Jeongmyeong High School Curriculum
// -------------------------------------------------------------
function generateRealisticSampleData() {
  // 1. 2026학년도 1학년 (2027 2학년 1학기 & 2학기) ~ 180 students across 7 classes
  const students2026_1 = [];
  const students2026_2 = [];

  const science4_2026 = ['물리학', '화학', '생명과학', '지구과학'];
  const social4_2026 = ['사회와 문화', '현대사회와 윤리', '세계사', '세계시민과 지리'];
  const select1_2026_1 = ['중국어', '일본어', '정보', '한문'];

  for (let i = 1; i <= 180; i++) {
    const ban = Math.floor((i - 1) / 26) + 1;
    const num = ((i - 1) % 26) + 1;
    const studentId = `${ban}반 ${num}번`;

    let choices1 = [];
    let choices2 = [];

    // Exactly 28 students choose ALL 4 Sciences (물화생지) in 2학년 1학기!
    if (i <= 28) {
      choices1 = [...science4_2026];
      // 5th choice from 택1
      choices1.push(i % 2 === 0 ? '정보' : (i % 3 === 0 ? '일본어' : '한문'));

      // 2학기: 과학 집중 4~5개 + 택1
      choices2 = ['역학과 에너지', '화학반응의 세계', '세포와 물질대사', '지구시스템과학', '과학과제연구', i % 2 === 0 ? '인공지능 기초' : '일본어 회화'];
    } else if (i <= 75) {
      // Natural Science (2~3 sciences + social) + 1 from 택1
      choices1 = ['물리학', '화학', '생명과학', '현대사회와 윤리', select1_2026_1[i % 4]];
      choices2 = ['기하', '역학과 에너지', '화학반응의 세계', '세포와 물질대사', '한국지리 탐구', '인공지능 기초'];
    } else if (i <= 125) {
      // Bio/Medical / Convergence Track
      choices1 = ['생명과학', '화학', '지구과학', '사회와 문화', select1_2026_1[(i + 1) % 4]];
      choices2 = ['화학반응의 세계', '세포와 물질대사', '사회문제 탐구', '윤리와 사상', '과학과제연구', '중국 문화'];
    } else if (i <= 170) {
      // Humanities / Social Science Track (4 socials + 1 from 택1)
      choices1 = ['사회와 문화', '현대사회와 윤리', '세계사', '세계시민과 지리', select1_2026_1[(i + 2) % 4]];
      choices2 = ['언어생활 탐구', '법과 사회', '윤리와 사상', '동아시아 역사 기행', '한국지리 탐구', '일본어 회화'];
    } else {
      // Mixed / Errors introduced for audit verification
      if (i === 179) {
        choices1 = ['사회와 문화', '현대사회와 윤리', '물리학', '정보']; // Only 3 from 택4 + 1 from 택1 (택4 1과목 미달!)
      } else if (i === 180) {
        choices1 = ['사회와 문화', '세계사', '생명과학', '지구과학']; // Only 4 from 택4 (택1 미선택 오류!)
      } else {
        choices1 = ['사회와 문화', '세계시민과 지리', '생명과학', '지구과학', '중국어'];
      }
      choices2 = ['기하', '영미 문학 읽기', '법과 사회', '사회문제 탐구', '지구시스템과학', '언어생활과 한자'];
    }

    students2026_1.push({
      id: studentId,
      grade: '2',
      ban: String(ban),
      num: String(num),
      choices: choices1,
      designated: ['대수', '문학', '스포츠 생활1', '영어Ⅰ', '확률과 통계']
    });

    students2026_2.push({
      id: studentId,
      grade: '2',
      ban: String(ban),
      num: String(num),
      choices: choices2,
      designated: ['독서와 작문', '미적분Ⅰ', '영어Ⅱ', '스포츠 생활2']
    });
  }

  // 2. 2025학년도 1학년 (2027 3학년 1학기 & 2학기) ~ 175 students
  const students2025_1 = [];
  const students2025_2 = [];

  for (let i = 1; i <= 175; i++) {
    const ban = Math.floor((i - 1) / 25) + 1;
    const num = ((i - 1) % 25) + 1;
    const studentId = `${ban}반 ${num}번`;

    let choices1 = [];
    let choices2 = [];

    if (i <= 75) {
      // STEM Track (미적분II + 4 sciences/math + 1 general)
      choices1 = ['미적분Ⅱ', '전자기와 양자', '물질과 에너지', '생물의 유전', '인공지능 수학', i % 2 === 0 ? '데이터 과학' : '심화 일본어'];
      choices2 = ['과학의 역사와 문화', '기후변화와 환경생태', '융합과학 탐구', '수학과 문화', i % 2 === 0 ? '소프트웨어와 생활' : '일본 문화'];
    } else if (i <= 135) {
      // Humanities / Social Track (경제수학 + 4 socials/humanities + 1 general)
      choices1 = ['경제수학', '국제 관계의 이해', '인문학과 윤리', '도시의 미래 탐구', '기후변화와 지속가능한 세계', '인간과 심리'];
      choices2 = ['여행지리', '윤리문제 탐구', '금융과 경제생활', '역사로 탐구하는 현대 세계', '중국 언어와 역사의 이해1'];
    } else {
      choices1 = ['미적분Ⅱ', '문학과 영상', '심화영어', '행성우주과학', '도시의 미래 탐구', '생활과 한문'];
      choices2 = ['주제 탐구 독서', '미디어 영어', '여행지리', '융합과학 탐구', '한문고전읽기'];
    }

    students2025_1.push({
      id: studentId,
      grade: '3',
      ban: String(ban),
      num: String(num),
      choices: choices1,
      designated: ['화법과 언어', '영어 독해와 작문', '스포츠 과학', '음악감상과 비평']
    });

    students2025_2.push({
      id: studentId,
      grade: '3',
      ban: String(ban),
      num: String(num),
      choices: choices2,
      designated: ['독서 토론과 글쓰기', '심화 영어 독해와 작문', '스포츠 문화', '미술감상과 비평', '융합사고 수학']
    });
  }

  // Load into state
  loadDatasetIntoState('2026_2_1', students2026_1);
  loadDatasetIntoState('2026_2_2', students2026_2);
  loadDatasetIntoState('2025_3_1', students2025_1);
  loadDatasetIntoState('2025_3_2', students2025_2);

  updateStatus(true, '정명고 공식 교육과정 데이터 로드 완료 (355명)', 355, false);
}

// -------------------------------------------------------------
// Load Dataset & Compute Subject Aggregations
// Pre-loads ALL subjects defined in CURRICULUM_DEFINITION
// -------------------------------------------------------------
function loadDatasetIntoState(cohortKey, studentList) {
  const subjectMap = {};
  const totalStudents = studentList.length;
  const def = CURRICULUM_DEFINITION[cohortKey];

  // 1. Initialize with ALL official subjects defined in curriculum
  if (def) {
    // A. Designated subjects
    def.designated.forEach(d => {
      subjectMap[d.name] = {
        name: d.name,
        category: d.category,
        type: '지정',
        group: '학교지정',
        badge: '학교지정',
        units: d.units,
        count: totalStudents, // Designated is taken by all students
        students: [...studentList]
      };
    });

    // B. Selection group subjects
    def.groups.forEach(g => {
      g.subjects.forEach(s => {
        subjectMap[s.name] = {
          name: s.name,
          category: s.category,
          type: '선택',
          groupId: g.id,
          group: g.name,
          badge: g.badge,
          units: s.units,
          count: 0,
          students: []
        };
      });
    });
  }

  // 2. Tally student choices from actual data
  studentList.forEach(student => {
    // Process student's chosen subjects
    (student.choices || []).forEach(sub => {
      const clean = cleanSubjectName(sub);
      if (!clean) return;

      // Find canonical name from curriculum
      const cur = getCurriculumSubject(cohortKey, clean);
      const canonicalName = cur ? cur.name : clean;

      if (!subjectMap[canonicalName]) {
        const meta = getSubjectMeta(canonicalName, cohortKey);
        subjectMap[canonicalName] = {
          name: canonicalName,
          category: meta.category,
          type: meta.type || '선택',
          group: meta.group || '학생선택',
          badge: meta.badge || '선택',
          units: meta.units || 3,
          count: 0,
          students: []
        };
      }
      subjectMap[canonicalName].count++;
      subjectMap[canonicalName].students.push(student);
    });

    // Designated from student record if any
    (student.designated || []).forEach(sub => {
      const clean = cleanSubjectName(sub);
      if (!clean) return;
      const cur = getCurriculumSubject(cohortKey, clean);
      const canonicalName = cur ? cur.name : clean;

      if (subjectMap[canonicalName] && subjectMap[canonicalName].type === '지정') {
        // Already populated
      } else if (!subjectMap[canonicalName]) {
        const meta = getSubjectMeta(canonicalName, cohortKey);
        subjectMap[canonicalName] = {
          name: canonicalName,
          category: meta.category,
          type: '지정',
          group: '학교지정',
          badge: '학교지정',
          units: meta.units || 3,
          count: 0,
          students: []
        };
        subjectMap[canonicalName].count++;
        subjectMap[canonicalName].students.push(student);
      }
    });
  });

  // Convert map to sorted array:
  // Order: 1. 학교지정 -> 2. 선택 수가 많은 과목군 (택5, 택4) -> 3. 선택 1과목 (택1) -> 4. 기타
  // Within same group: by count desc, then by name
  const subjectsArray = Object.values(subjectMap).sort((a, b) => {
    const pA = getSubjectGroupPriority(a);
    const pB = getSubjectGroupPriority(b);
    if (pA !== pB) return pA - pB;
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name, 'ko');
  });
  subjectsArray.forEach((sub, idx) => {
    sub.rank = idx + 1;
    sub.rate = totalStudents > 0 ? ((sub.count / totalStudents) * 100).toFixed(1) : '0.0';
  });

  state.data[cohortKey].students = studentList;
  state.data[cohortKey].subjects = subjectsArray;
}

// -------------------------------------------------------------
// Science Focus Detection by Cohort
// 1. 2026_2_1: 물리학, 화학, 생명과학, 지구과학 (4과목 올선택)
// 2. 2026_2_2: 세포와 물질대사, 역학과 에너지, 지구시스템과학, 화학반응의 세계 (3과목 이상 선택)
// 3. 2025_3_1: 물질과 에너지, 전자기와 양자, 생물의 유전, 행성우주과학 (3과목 이상 선택)
// -------------------------------------------------------------
function getScienceFocusInfo(cohortKey) {
  const targetCohort = state.data[cohortKey];
  const allStudents = targetCohort?.students || [];

  if (cohortKey === '2026_2_1') {
    const targetNames = ['물리학', '화학', '생명과학', '지구과학'];
    const matched = allStudents.filter(student => {
      const studentChoices = (student.choices || []).map(normalizeSubjectKey);
      const hasPhysics = studentChoices.some(c => c.includes('물리'));
      const hasChem = studentChoices.some(c => c.includes('화학') && !c.includes('화학반응'));
      const hasBio = studentChoices.some(c => c.includes('생명'));
      const hasEarth = studentChoices.some(c => c.includes('지구') && !c.includes('지구시스템'));
      return hasPhysics && hasChem && hasBio && hasEarth;
    });

    return {
      active: true,
      cohortKey: '2026_2_1',
      title: '물·화·생·지 4과목 올선택 현황',
      badge: '자연·공학 집중 (4과목)',
      desc: '2학년 1학기 선택 4과목 중 <strong>물리학·화학·생명과학·지구과학</strong> 4과목을 모두 수강 신청한 학생 현황입니다.',
      btnText: '4과목 올선택자 명단 확인',
      modalTitle: '2026 입학생 2학년 1학기 - 물·화·생·지 4과목 올선택 학생 명단',
      subjects: targetNames,
      students: matched
    };
  } else if (cohortKey === '2026_2_2') {
    const targetNames = ['세포와 물질대사', '역학과 에너지', '지구시스템과학', '화학반응의 세계'];
    const targetKeys = targetNames.map(normalizeSubjectKey);
    const matched = allStudents.filter(student => {
      const studentChoices = (student.choices || []).map(normalizeSubjectKey);
      let matchCount = 0;
      targetKeys.forEach(k => {
        if (studentChoices.some(c => c.includes(k) || k.includes(c))) matchCount++;
      });
      return matchCount >= 3;
    });

    return {
      active: true,
      cohortKey: '2026_2_2',
      title: '심화과학 3과목 이상 선택 현황',
      badge: '자연·이공계 집중 (3과목↑)',
      desc: '2학년 2학기 <strong>세포와 물질대사, 역학과 에너지, 지구시스템과학, 화학반응의 세계</strong> 중 3과목 이상을 선택한 학생 현황입니다.',
      btnText: '심화과학 3과목 이상 선택자 명단 확인',
      modalTitle: '2026 입학생 2학년 2학기 - 심화과학 3과목 이상 선택 학생 명단',
      subjects: targetNames,
      students: matched
    };
  } else if (cohortKey === '2025_3_1') {
    const targetNames = ['물질과 에너지', '전자기와 양자', '생물의 유전', '행성우주과학'];
    const targetKeys = targetNames.map(normalizeSubjectKey);
    const matched = allStudents.filter(student => {
      const studentChoices = (student.choices || []).map(normalizeSubjectKey);
      let matchCount = 0;
      targetKeys.forEach(k => {
        if (studentChoices.some(c => c.includes(k) || k.includes(c))) matchCount++;
      });
      return matchCount >= 3;
    });

    return {
      active: true,
      cohortKey: '2025_3_1',
      title: '전문과학 3과목 이상 선택 현황',
      badge: '자연·이공계 집중 (3과목↑)',
      desc: '3학년 1학기 <strong>물질과 에너지, 전자기와 양자, 생물의 유전, 행성우주과학</strong> 중 3과목 이상을 선택한 학생 현황입니다.',
      btnText: '전문과학 3과목 이상 선택자 명단 확인',
      modalTitle: '2025 입학생 3학년 1학기 - 전문과학 3과목 이상 선택 학생 명단',
      subjects: targetNames,
      students: matched
    };
  }

  return {
    active: false,
    cohortKey: cohortKey,
    students: []
  };
}

function get4ScienceStudents(cohortKey = '2026_2_1') {
  return getScienceFocusInfo(cohortKey).students || [];
}

// -------------------------------------------------------------
// Subject Co-selection Analysis (For Timetable Blocks)
// -------------------------------------------------------------
function computeCoSelectionPairs(cohortKey) {
  const students = state.data[cohortKey]?.students || [];
  const pairCounts = {};
  const totalStudents = students.length;

  students.forEach(student => {
    const choices = (student.choices || []).map(cleanSubjectName).filter(Boolean);
    const uniqueChoices = Array.from(new Set(choices));

    for (let i = 0; i < uniqueChoices.length; i++) {
      for (let j = i + 1; j < uniqueChoices.length; j++) {
        const a = uniqueChoices[i];
        const b = uniqueChoices[j];
        const key = a < b ? `${a} + ${b}` : `${b} + ${a}`;
        if (!pairCounts[key]) {
          pairCounts[key] = {
            subA: a < b ? a : b,
            subB: a < b ? b : a,
            count: 0
          };
        }
        pairCounts[key].count++;
      }
    }
  });

  const pairs = Object.values(pairCounts).sort((a, b) => b.count - a.count);
  pairs.forEach(p => {
    p.rate = totalStudents > 0 ? ((p.count / totalStudents) * 100).toFixed(1) : '0.0';
  });
  return pairs;
}

// -------------------------------------------------------------
// UI Render Functions
// -------------------------------------------------------------
function renderDashboard() {
  const currentKey = state.activeTab;

  document.getElementById('tab-view-cohort').style.display =
    (currentKey === 'expert_tools' || currentKey === 'student_search' || currentKey === 'master_summary') ? 'none' : 'block';
  document.getElementById('tab-view-expert').style.display =
    (currentKey === 'expert_tools') ? 'block' : 'none';
  document.getElementById('tab-view-students').style.display =
    (currentKey === 'student_search') ? 'block' : 'none';
  const masterView = document.getElementById('tab-view-master');
  if (masterView) {
    masterView.style.display = (currentKey === 'master_summary') ? 'block' : 'none';
  }

  if (currentKey === 'expert_tools') {
    renderExpertTools();
  } else if (currentKey === 'student_search') {
    renderStudentSearchAndAudit();
  } else if (currentKey === 'master_summary') {
    renderMasterSummaryView();
  } else {
    renderCohortView(currentKey);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Cohort View (2026_2_1, 2026_2_2, 2025_3_1, 2025_3_2)
function renderCohortView(cohortKey) {
  const cohort = state.data[cohortKey];
  const students = cohort.students || [];
  const subjects = cohort.subjects || [];
  const totalCount = students.length;

  // 1. Science Focus Card (Positioned gracefully between charts on 2026 2-1, 2026 2-2, 2025 3-1)
  const sci4Banner = document.getElementById('sci4-banner');
  const chartsGrid = document.querySelector('.charts-grid');
  const sciFocus = getScienceFocusInfo(cohortKey);

  if (sciFocus.active) {
    if (sci4Banner) sci4Banner.style.display = 'flex';
    if (chartsGrid) chartsGrid.classList.remove('hide-sci4');

    const titleEl = document.getElementById('sci-focus-title-text');
    if (titleEl) titleEl.textContent = sciFocus.title;
    const badgeEl = document.getElementById('sci-focus-badge');
    if (badgeEl) badgeEl.textContent = sciFocus.badge;
    const descEl = document.getElementById('sci-focus-desc');
    if (descEl) descEl.innerHTML = sciFocus.desc;
    const btnTextEl = document.getElementById('sci-focus-btn-text');
    if (btnTextEl) btnTextEl.textContent = sciFocus.btnText;

    const count = sciFocus.students.length;
    document.getElementById('sci4-count').textContent = `${count}명`;
    const sciRate = totalCount > 0 ? ((count / totalCount) * 100).toFixed(1) : '0.0';
    document.getElementById('sci4-percent').textContent = `전체 학생의 ${sciRate}% (${count}명)`;
  } else {
    if (sci4Banner) sci4Banner.style.display = 'none';
    if (chartsGrid) chartsGrid.classList.add('hide-sci4');
  }

  // 2. KPI Summary Cards
  document.getElementById('kpi-total-students').textContent = `${totalCount}명`;
  document.getElementById('kpi-total-subjects').textContent = `${subjects.length}개`;

  // Average choices calculation
  const totalChoiceCount = students.reduce((acc, s) => acc + (s.choices ? s.choices.length : 0), 0);
  const avgChoices = totalCount > 0 ? (totalChoiceCount / totalCount).toFixed(1) : '0.0';
  document.getElementById('kpi-avg-choices').textContent = `${avgChoices}개`;

  // Low enrollment subjects count (< 15)
  const lowEnrollCount = subjects.filter(s => s.type === '선택' && s.count < 15).length;
  document.getElementById('kpi-low-enrollment').textContent = `${lowEnrollCount}개`;

  // 3. Render Charts
  renderBarChart(subjects);
  renderDonutChart(subjects);

  // 4. Render Subject Table
  renderSubjectTable(subjects, totalCount);
}

// Render Horizontal Bar Chart
function renderBarChart(subjects) {
  const ctx = document.getElementById('subjectBarChart').getContext('2d');
  
  // Show choice subjects primarily in bar chart
  const choiceSubjects = subjects.filter(s => s.type === '선택').slice(0, 12);
  const displaySubjects = choiceSubjects.length > 0 ? choiceSubjects : subjects.slice(0, 12);

  const labels = displaySubjects.map(s => s.name);
  const counts = displaySubjects.map(s => s.count);

  if (state.charts.bar) {
    state.charts.bar.destroy();
  }

  state.charts.bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '선택 학생 수 (명)',
        data: counts,
        backgroundColor: PASTEL_COLORS,
        borderRadius: 8,
        barThickness: 16
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          titleFont: { family: 'Pretendard', size: 13, weight: 'bold' },
          bodyFont: { family: 'Pretendard', size: 12 },
          padding: 10,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          grid: { color: '#F1F5F9' },
          ticks: { font: { family: 'Pretendard', size: 11 }, color: '#64748B' }
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: 'Pretendard', size: 12, weight: '600' }, color: '#1E293B' }
        }
      }
    }
  });
}

// Render Donut Chart for Subject Categories
function renderDonutChart(subjects) {
  const ctx = document.getElementById('categoryDonutChart').getContext('2d');

  const catMap = { '기초': 0, '사회': 0, '과학': 0, '생활교양': 0, '예체능': 0 };
  subjects.forEach(s => {
    const cat = s.category || '기초';
    catMap[cat] = (catMap[cat] || 0) + s.count;
  });

  const labels = ['기초 (국·수·영)', '탐구 (사회)', '탐구 (과학)', '생활·교양', '체육·예술'];
  const data = [catMap['기초'], catMap['사회'], catMap['과학'], catMap['생활교양'], catMap['예체능']];

  if (state.charts.donut) {
    state.charts.donut.destroy();
  }

  state.charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#A78BFA', // Purple (Basic)
          '#38BDF8', // Sky Blue (Social)
          '#34D399', // Mint (Science)
          '#FBBF24', // Amber (General)
          '#FB7185'  // Coral (Arts/PE)
        ],
        borderWidth: 3,
        borderColor: '#FFFFFF',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { family: 'Pretendard', size: 11, weight: '500' }, padding: 12 }
        }
      },
      cutout: '68%'
    }
  });
}

// Render Subject Breakdown Table with Group Badges & Exact Credits (학점)
function renderSubjectTable(subjects, totalCount) {
  const tbody = document.getElementById('subject-table-body');
  tbody.innerHTML = '';

  let filtered = subjects.filter(sub => {
    if (state.categoryFilter !== 'all' && sub.category !== state.categoryFilter) {
      return false;
    }
    if (state.typeFilter !== 'all') {
      if (state.typeFilter === '지정' && sub.type !== '지정') return false;
      if (state.typeFilter === '선택' && sub.type === '지정') return false;
    }
    if (state.searchQuery && !sub.name.toLowerCase().includes(state.searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  document.getElementById('table-row-count').textContent = `총 ${filtered.length}개 과목`;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:32px; color:#94A3B8;">조건에 맞는 과목이 없습니다.</td></tr>`;
    return;
  }

  filtered.forEach((sub, idx) => {
    const tr = document.createElement('tr');
    
    let catBadgeClass = 'badge-gray';
    if (sub.category === '기초') catBadgeClass = 'badge-purple';
    if (sub.category === '사회') catBadgeClass = 'badge-blue';
    if (sub.category === '과학') catBadgeClass = 'badge-green';
    if (sub.category === '생활교양') catBadgeClass = 'badge-amber';
    if (sub.category === '예체능') catBadgeClass = 'badge-pink';

    // Detailed Group Badge: 학교지정, 택4, 택5, 택1
    const isDesignated = (sub.type === '지정' || sub.group === '학교지정' || sub.badge === '학교지정');
    let groupBadgeClass = 'badge-purple';
    if (isDesignated) groupBadgeClass = 'badge-gray';
    else if (sub.badge === '택4') groupBadgeClass = 'badge-amber';
    else if (sub.badge === '택5') groupBadgeClass = 'badge-purple';
    else if (sub.badge === '택1') groupBadgeClass = 'badge-blue';

    // 25명 기준 반올림 (학교 지정과목은 분반 산출 제외 '-')
    const sections = isDesignated ? '-' : Math.round(sub.count / 25);

    let statusBadge = `<span class="badge badge-green">개설 안정</span>`;
    if (isDesignated) {
      statusBadge = `<span class="badge badge-gray">학교지정</span>`;
    } else {
      if (sub.count === 0) {
        statusBadge = `<span class="badge badge-gray">미선택</span>`;
      } else if (sub.count < 10) {
        statusBadge = `<span class="badge badge-pink">폐강 위기</span>`;
      } else if (sub.count < 15) {
        statusBadge = `<span class="badge badge-amber">소인수 주의</span>`;
      }
    }

    const isSci4 = ['물리학', '화학', '생명과학', '지구과학'].includes(sub.name) && state.activeTab === '2026_2_1';

    tr.innerHTML = `
      <td style="text-align:center; font-weight:700; color:#64748B;">${sub.rank || (idx + 1)}</td>
      <td><span class="badge ${catBadgeClass}">${sub.category}</span></td>
      <td>
        <strong style="color:#1E293B; cursor:pointer; text-decoration:underline; text-underline-offset:3px;" class="subject-clickable-name" data-sub="${sub.name}">
          ${sub.name}
        </strong>
        ${isSci4 ? '<span class="badge badge-pink" style="margin-left:6px; font-size:0.7rem;">물·화·생·지</span>' : ''}
      </td>
      <td><span class="badge ${groupBadgeClass}">${sub.group || sub.badge || (isDesignated ? '학교지정' : '학생선택')}</span></td>
      <td style="text-align:center; font-weight:700; color:#4F46E5; white-space:nowrap;">${sub.units || 3}학점</td>
      <td style="text-align:right; font-weight:800; color:#0F172A; font-size:1rem; white-space:nowrap;">${sub.count}명</td>
      <td style="text-align:center; font-weight:700; color:#4F46E5; white-space:nowrap;">
        ${isDesignated ? '<span style="color:#94A3B8; font-weight:normal;">-</span>' : `${sections}개 분반`}
      </td>
      <td>
        <div class="progress-bar-wrap">
          <div class="progress-track">
            <div class="progress-fill" style="width: ${Math.min(100, sub.rate)}%;"></div>
          </div>
          <span style="font-size:0.82rem; font-weight:600; color:#64748B; width:45px; text-align:right;">${sub.rate}%</span>
        </div>
      </td>
      <td style="text-align:center; white-space:nowrap;">${statusBadge}</td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll('.subject-clickable-name').forEach(el => {
    el.addEventListener('click', () => {
      const subName = el.getAttribute('data-sub');
      openSubjectStudentsModal(subName);
    });
  });
}

// -------------------------------------------------------------
// Expert Tools View Render (Simulator with Exact Credits)
// -------------------------------------------------------------
function renderExpertTools() {
  const currentKey = state.expertCohort || '2026_2_1';
  const cohort = state.data[currentKey] || {};
  const subjects = cohort.subjects || [];
  const classSize = state.simClassSize;

  // Update active pill button
  document.querySelectorAll('#expert-cohort-pills button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cohort') === currentKey);
  });

  // 1. Simulator table & summary
  const simTbody = document.getElementById('sim-table-body');
  simTbody.innerHTML = '';

  let totalSections = 0;
  let totalHours = 0;

  subjects.forEach(sub => {
    const isDesignated = (sub.type === '지정' || sub.group === '학교지정' || sub.badge === '학교지정');
    const units = sub.units || 3;
    let sectionsDisplay = '-';
    let avgPerClass = '-';
    let hoursDisplay = '-';
    let diag = '<span class="badge badge-gray">기존 학급 운영</span>';

    if (!isDesignated) {
      // 기준 정원 나눈 후 소수 첫째 자리 반올림
      const sections = Math.round(sub.count / classSize);
      totalSections += sections;
      const hours = sections * units;
      totalHours += hours;
      sectionsDisplay = `${sections}개 반`;
      avgPerClass = sections > 0 ? `${(sub.count / sections).toFixed(1)}명/반` : '0명/반';
      hoursDisplay = `${hours}시간`;

      diag = '<span class="badge badge-green">정상 운영</span>';
      if (sub.count === 0) diag = '<span class="badge badge-gray">미개설</span>';
      else if (sub.count < 10) diag = '<span class="badge badge-pink">폐강 심의 요망</span>';
      else if (sub.count < 15) diag = '<span class="badge badge-amber">소인수 개설</span>';
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="badge badge-gray">${sub.category}</span></td>
      <td><strong>${sub.name}</strong></td>
      <td><span class="badge badge-purple">${sub.badge || sub.group || (isDesignated ? '학교지정' : '선택')}</span></td>
      <td style="text-align:right; font-weight:700;">${sub.count}명</td>
      <td style="text-align:center; font-weight:800; color:#4F46E5;">${isDesignated ? '<span style="color:#94A3B8; font-weight:normal;">-</span>' : sectionsDisplay}</td>
      <td style="text-align:center;">${isDesignated ? '<span style="color:#94A3B8;">-</span>' : avgPerClass}</td>
      <td style="text-align:center; font-weight:700; color:#6366F1;">${units}학점</td>
      <td style="text-align:center; font-weight:700; color:#059669;">${isDesignated ? '<span style="color:#94A3B8;">-</span>' : hoursDisplay}</td>
      <td>${diag}</td>
    `;
    simTbody.appendChild(tr);
  });

  document.getElementById('sim-total-sections').textContent = `${totalSections}개 반`;
  document.getElementById('sim-total-hours').textContent = `${totalHours}시간`;

  // 2. Co-selection Matrix Table
  const coPairs = computeCoSelectionPairs(currentKey);
  const coTbody = document.getElementById('co-selection-table-body');
  coTbody.innerHTML = '';

  coPairs.slice(0, 15).forEach((pair, idx) => {
    const tr = document.createElement('tr');
    let recommendation = '일반 배치 가능';
    let recBadge = 'badge-gray';

    if (pair.count >= 40) {
      recommendation = '⚠️ 최우선 분리 배치 (동시 개설 시 대규모 충돌)';
      recBadge = 'badge-pink';
    } else if (pair.count >= 20) {
      recommendation = '서로 다른 선택군(블록) 배치 권장';
      recBadge = 'badge-amber';
    }

    tr.innerHTML = `
      <td style="text-align:center; font-weight:700; color:#64748B;">${idx + 1}</td>
      <td><strong style="color:#1E293B;">${pair.subA}</strong></td>
      <td><strong style="color:#1E293B;">${pair.subB}</strong></td>
      <td style="text-align:right; font-weight:800; color:#E11D48;">${pair.count}명</td>
      <td>
        <div class="progress-bar-wrap">
          <div class="progress-track">
            <div class="progress-fill" style="width:${Math.min(100, pair.rate)}%; background:#FB7185;"></div>
          </div>
          <span style="font-size:0.82rem; font-weight:600; color:#64748B; width:45px; text-align:right;">${pair.rate}%</span>
        </div>
      </td>
      <td><span class="badge ${recBadge}">${recommendation}</span></td>
    `;
    coTbody.appendChild(tr);
  });

  // 3. Low enrollment / Joint curriculum table
  const lowTbody = document.getElementById('low-enrollment-table-body');
  lowTbody.innerHTML = '';

  const lowEnrollSubs = subjects.filter(s => s.type === '선택' && s.count < 15);
  if (lowEnrollSubs.length === 0) {
    lowTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px; color:#10B981; font-weight:600;">15명 미만의 소인수/폐강 위기 과목이 없습니다.</td></tr>`;
  } else {
    lowEnrollSubs.forEach(sub => {
      const tr = document.createElement('tr');
      const isSevere = sub.count < 10;
      const diagBadge = isSevere
        ? `<span class="badge badge-pink">폐강 위험 (${sub.count}명)</span>`
        : `<span class="badge badge-amber">소인수 과목 (${sub.count}명)</span>`;
      const actionAdvice = isSevere
        ? '인근 학교 연계 온·오프라인 공동교육과정 개설 권고 또는 학생 재선택 안내'
        : '순회교사 활용 또는 소인수 분반 유지 (최소 인원 보장)';

      tr.innerHTML = `
        <td><strong>${sub.name}</strong></td>
        <td><span class="badge badge-gray">${sub.category}</span></td>
        <td style="text-align:right; font-weight:800; color:#E11D48;">${sub.count}명</td>
        <td>${diagBadge}</td>
        <td style="font-size:0.86rem; color:#475569;">${actionAdvice}</td>
      `;
      lowTbody.appendChild(tr);
    });
  }
}

// -------------------------------------------------------------
// Audit Student Choices against Official Curriculum Definition
// -------------------------------------------------------------
function auditStudentChoices(student, cohortKey) {
  const targetKey = (cohortKey && cohortKey.startsWith('202')) ? cohortKey : (student.grade === '3' ? '2025_3_1' : '2026_2_1');
  const def = CURRICULUM_DEFINITION[targetKey];
  const studentChoices = (student.choices || []).map(normalizeSubjectKey);
  const reasons = [];

  if (def && def.groups) {
    def.groups.forEach(g => {
      const groupNorms = g.subjects.map(s => normalizeSubjectKey(s.name));
      const chosenInGroup = studentChoices.filter(c => groupNorms.some(gn => c.includes(gn) || gn.includes(c)));
      if (chosenInGroup.length !== g.requiredCount) {
        if (chosenInGroup.length < g.requiredCount) {
          reasons.push(`${g.name}: ${chosenInGroup.length}/${g.requiredCount} (${g.requiredCount - chosenInGroup.length}개 미달)`);
        } else {
          reasons.push(`${g.name}: ${chosenInGroup.length}/${g.requiredCount} (${chosenInGroup.length - g.requiredCount}개 초과)`);
        }
      }
    });
  }

  return {
    isValid: reasons.length === 0,
    reasons: reasons
  };
}

// Update Ban Dropdown for Student Tab
function updateStudentBanDropdown() {
  const targetCohortKey = state.studentCohort || '2026_2_1';
  const cohort = state.data[targetCohortKey];
  const students = cohort?.students || [];
  const banSelect = document.getElementById('student-filter-ban');
  if (!banSelect) return;

  // Extract unique bans
  const uniqueBans = Array.from(new Set(students.map(s => String(s.ban || '').trim()).filter(Boolean)))
    .sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.localeCompare(b);
    });

  const currentVal = state.studentBan || '1';
  banSelect.innerHTML = '';

  if (uniqueBans.length === 0) {
    banSelect.innerHTML = '<option value="1">1반</option><option value="all">전체 반</option>';
    return;
  }

  uniqueBans.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = `${b}반`;
    if (b === currentVal) opt.selected = true;
    banSelect.appendChild(opt);
  });

  const optAll = document.createElement('option');
  optAll.value = 'all';
  optAll.textContent = '전체 반 보기';
  if (currentVal === 'all') optAll.selected = true;
  banSelect.appendChild(optAll);

  // Default to '1' if available, otherwise first ban
  if (currentVal !== 'all' && !uniqueBans.includes(currentVal)) {
    state.studentBan = uniqueBans.includes('1') ? '1' : uniqueBans[0];
    banSelect.value = state.studentBan;
  }
}

// -------------------------------------------------------------
// Student Search & Audit View Render (Using Official Curriculum Rules)
// -------------------------------------------------------------
function renderStudentSearchAndAudit() {
  const currentKey = state.studentCohort || '2026_2_1';
  const cohort = state.data[currentKey] || {};
  const students = cohort.students || [];

  // Sync cohort dropdown
  const cohortSelect = document.getElementById('student-filter-cohort');
  if (cohortSelect && cohortSelect.value !== currentKey) {
    cohortSelect.value = currentKey;
  }

  // Populate ban dropdown
  updateStudentBanDropdown();

  const auditErrors = [];

  students.forEach(st => {
    const studentChoices = (st.choices || []).map(normalizeSubjectKey);
    const auditRes = auditStudentChoices(st, currentKey);

    if (!auditRes.isValid) {
      auditErrors.push({
        grade: st.grade || '2',
        ban: st.ban,
        num: st.num,
        cohortName: cohort.name || currentKey,
        count: studentChoices.length,
        choices: (st.choices || []).join(', '),
        reason: auditRes.reasons.join(' | ')
      });
    }
  });

  document.getElementById('audit-error-badge').textContent = `이상 학생 ${auditErrors.length}명`;
  const auditTbody = document.getElementById('audit-table-body');
  auditTbody.innerHTML = '';

  if (auditErrors.length === 0) {
    auditTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:#10B981; font-weight:600;">모든 학생이 교육과정 선택 규정에 맞춰 정상 선택하였습니다.</td></tr>`;
  } else {
    auditErrors.forEach(err => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="text-align:center;">${err.grade}</td>
        <td style="text-align:center; font-weight:700;">${err.ban}반</td>
        <td style="text-align:center; font-weight:700;">${err.num}번</td>
        <td>${err.cohortName}</td>
        <td style="text-align:center; font-weight:800; color:#E11D48;">${err.count}과목</td>
        <td style="font-size:0.85rem; color:#475569;">${err.choices || '없음'}</td>
        <td><span class="badge badge-pink">${err.reason}</span></td>
      `;
      auditTbody.appendChild(tr);
    });
  }

  // All Students Table
  renderAllStudentsTable();
}

function renderAllStudentsTable() {
  const currentKey = state.studentCohort || '2026_2_1';
  const cohort = state.data[currentKey] || {};
  const students = cohort.students || [];
  const selectedBan = state.studentBan || '1';
  const searchInput = document.getElementById('student-search-input')?.value?.trim().toLowerCase() || '';
  const tbody = document.getElementById('all-students-table-body');
  tbody.innerHTML = '';

  const filtered = students.filter(st => {
    // 1. Filter by Ban (Class)
    if (selectedBan !== 'all') {
      if (String(st.ban || '').trim() !== String(selectedBan).trim()) return false;
    }
    // 2. Filter by search input
    if (!searchInput) return true;
    if (st.name && st.name.toLowerCase().includes(searchInput)) return true;
    const term = searchInput.replace(/[^0-9]/g, '');
    if (term) {
      return String(st.ban).includes(term) || String(st.num).includes(term);
    }
    return String(st.ban).includes(searchInput) || String(st.num).includes(searchInput);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:#94A3B8;">선택하신 학급(${selectedBan === 'all' ? '전체' : selectedBan + '반'})에 해당하는 학생이 없습니다.</td></tr>`;
    return;
  }

  filtered.forEach(st => {
    const studentChoices = (st.choices || []).map(normalizeSubjectKey);

    // Science Focus detection according to cohort
    let isSciFocus = false;
    let sciBadgeText = '';
    if (currentKey === '2026_2_1') {
      isSciFocus = studentChoices.some(c => c.includes('물리')) &&
                   studentChoices.some(c => c.includes('화학') && !c.includes('화학반응')) &&
                   studentChoices.some(c => c.includes('생명')) &&
                   studentChoices.some(c => c.includes('지구') && !c.includes('지구시스템'));
      sciBadgeText = '물·화·생·지';
    } else if (currentKey === '2026_2_2') {
      const sciList = ['세포와물질대사', '역학과에너지', '지구시스템과학', '화학반응의세계'];
      let cnt = 0;
      sciList.forEach(k => { if (studentChoices.some(c => c.includes(k) || k.includes(c))) cnt++; });
      isSciFocus = cnt >= 3;
      sciBadgeText = `심화과학 ${cnt}과목`;
    } else if (currentKey === '2025_3_1') {
      const sciList = ['물질과에너지', '전자기와양자', '생물의유전', '행성우주과학'];
      let cnt = 0;
      sciList.forEach(k => { if (studentChoices.some(c => c.includes(k) || k.includes(c))) cnt++; });
      isSciFocus = cnt >= 3;
      sciBadgeText = `전문과학 ${cnt}과목`;
    }

    const nameTag = st.name ? ` <span style="font-size:0.8rem; color:#64748B; font-weight:normal;">(${st.name})</span>` : '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:center; font-weight:600; color:#64748B;">${st.grade || (currentKey.startsWith('2026') ? '2' : '3')}</td>
      <td style="text-align:center; font-weight:700; color:#1E293B;">${st.ban}반</td>
      <td style="text-align:center; font-weight:700; color:#1E293B;">${st.num}번${nameTag}</td>
      <td>${cohort.name || currentKey}</td>
      <td>
        <div style="display:flex; flex-wrap:wrap; gap:4px;">
          ${(st.choices || []).map(c => `<span class="badge badge-gray">${c}</span>`).join('')}
        </div>
      </td>
      <td style="text-align:center; font-weight:700;">${(st.choices || []).length}개</td>
      <td style="text-align:center;">
        ${isSciFocus ? `<span class="badge badge-pink">${sciBadgeText}</span>` : '<span style="color:#94A3B8;">-</span>'}
      </td>
      <td style="text-align:center;">
        <button class="btn btn-outline btn-sm student-detail-btn" data-ban="${st.ban}" data-num="${st.num}" style="padding:3px 8px; font-size:0.75rem;">
          상세
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll('.student-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ban = String(btn.getAttribute('data-ban') || '').trim();
      const num = String(btn.getAttribute('data-num') || '').trim();
      const student = students.find(s => String(s.ban).trim() === ban && String(s.num).trim() === num);
      if (student) {
        openStudentDetailModal(student, currentKey);
      } else {
        console.warn('Student not found for ban:', ban, 'num:', num);
      }
    });
  });
}

// -------------------------------------------------------------
// Modals Handling (Unified Modern Pastel Aesthetics)
// -------------------------------------------------------------

// Open Student Detailed Selection Modal
function openStudentDetailModal(student, cohortKey) {
  try {
    const modal = document.getElementById('modal-student-detail');
    if (!modal) return;

    const targetCohortKey = (cohortKey && cohortKey.startsWith('202'))
      ? cohortKey
      : (student.grade === '3' ? '2025_3_1' : '2026_2_1');

    const cohortName = state.data[targetCohortKey]?.name || targetCohortKey;
    const subtitleEl = document.getElementById('modal-student-cohort-subtitle');
    if (subtitleEl) subtitleEl.textContent = cohortName;

    const infoText = `${student.grade || '2'}학년 ${student.ban}반 ${student.num}번`;
    const infoTextEl = document.getElementById('modal-student-info-text');
    if (infoTextEl) infoTextEl.textContent = infoText;

    const nameTag = document.getElementById('modal-student-nametag');
    if (nameTag) {
      if (student.name) {
        nameTag.style.display = 'inline-block';
        nameTag.textContent = student.name;
      } else {
        nameTag.style.display = 'none';
      }
    }

    // School Designated List
    const designatedList = document.getElementById('modal-student-designated-list');
    const desCount = document.getElementById('modal-student-designated-count');
    if (designatedList) {
      designatedList.innerHTML = '';
      const designated = student.designated || [];
      if (desCount) desCount.textContent = designated.length;
      if (designated.length > 0) {
        designated.forEach(sub => {
          const cur = getCurriculumSubject(targetCohortKey, sub);
          const units = cur ? cur.units : (sub.includes('스포츠') ? (sub.includes('1') || sub.includes('2') ? 2 : 1) : 3);
          const span = document.createElement('span');
          span.className = 'badge badge-gray';
          span.style.cssText = 'font-size:0.83rem; padding:6px 12px;';
          span.textContent = `${sub} (${units}학점)`;
          designatedList.appendChild(span);
        });
      } else {
        designatedList.innerHTML = '<span style="color:#94A3B8; font-size:0.85rem;">학교 지정 과목 정보 없음</span>';
      }
    }

    // Student Choice List
    const choicesList = document.getElementById('modal-student-choices-list');
    const choicesCount = document.getElementById('modal-student-choices-count');
    if (choicesList) {
      choicesList.innerHTML = '';
      const choices = student.choices || [];
      if (choicesCount) choicesCount.textContent = choices.length;
      if (choices.length > 0) {
        choices.forEach(sub => {
          const cur = getCurriculumSubject(targetCohortKey, sub);
          const units = cur ? cur.units : 3;
          const badgeType = cur ? (cur.badge || '선택') : '선택';
          const span = document.createElement('span');
          span.className = 'badge badge-purple';
          span.style.cssText = 'font-size:0.83rem; padding:6px 12px;';
          span.innerHTML = `<strong>${sub}</strong> <small style="opacity:0.85;">[${badgeType}, ${units}학점]</small>`;
          choicesList.appendChild(span);
        });
      } else {
        choicesList.innerHTML = '<span style="color:#EF4444; font-size:0.85rem;">선택된 과목이 없습니다.</span>';
      }
    }

    // Audit Validation Check
    const auditRes = auditStudentChoices(student, targetCohortKey);
    const auditBadge = document.getElementById('modal-student-audit-badge');
    const auditBox = document.getElementById('modal-student-audit-box');
    const auditDesc = document.getElementById('modal-student-audit-desc');
    const auditIcon = document.getElementById('modal-student-audit-icon');

    if (auditBadge && auditBox && auditDesc) {
      if (auditRes.isValid) {
        auditBadge.className = 'badge badge-green';
        auditBadge.textContent = '선택 규정 충족';
        auditBox.style.background = '#F0FDF4';
        auditBox.style.borderColor = '#BBF7D0';
        auditDesc.style.color = '#15803D';
        auditDesc.textContent = '교육과정 편성 기준에 맞게 모든 선택군 규정을 완벽하게 충족하였습니다.';
        if (auditIcon) auditIcon.setAttribute('data-lucide', 'shield-check');
      } else {
        auditBadge.className = 'badge badge-pink';
        auditBadge.textContent = '선택 규정 불일치';
        auditBox.style.background = '#FFF1F2';
        auditBox.style.borderColor = '#FECDD3';
        auditDesc.style.color = '#BE123C';
        auditDesc.textContent = auditRes.reasons.join(' / ');
        if (auditIcon) auditIcon.setAttribute('data-lucide', 'alert-triangle');
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    modal.classList.add('active');
  } catch (err) {
    console.error('Error opening student detail modal:', err);
  }
}

// Unified Pastel Alert / Notice Modal
function showAlertModal(title, message, type = 'info') {
  const modal = document.getElementById('modal-alert');
  if (!modal) {
    alert(message);
    return;
  }

  document.getElementById('modal-alert-title').textContent = title;
  document.getElementById('modal-alert-message').textContent = message;

  const iconWrap = document.getElementById('modal-alert-icon-wrap');
  const icon = document.getElementById('modal-alert-icon');

  if (type === 'success') {
    iconWrap.style.background = '#ECFDF5';
    iconWrap.style.color = '#059669';
    icon.setAttribute('data-lucide', 'check-circle-2');
  } else if (type === 'error') {
    iconWrap.style.background = '#FFF1F2';
    iconWrap.style.color = '#E11D48';
    icon.setAttribute('data-lucide', 'alert-triangle');
  } else {
    iconWrap.style.background = '#EEF2FF';
    iconWrap.style.color = '#4F46E5';
    icon.setAttribute('data-lucide', 'info');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  modal.classList.add('active');
}
function openSubjectStudentsModal(subjectName, cohortKey = '') {
  const targetKey = cohortKey || (state.activeTab.startsWith('202') ? state.activeTab : '2026_2_1');
  const cohort = state.data[targetKey];
  if (!cohort) return;
  const sub = (cohort.subjects || []).find(s => s.name === subjectName);
  if (!sub) return;

  document.getElementById('modal-sub-name').textContent = `${sub.name} 수강 신청 학생 명단`;
  document.getElementById('modal-sub-subtitle').textContent = `${cohort.name} | [${sub.group || '학생선택'}] | ${sub.units || 3}학점 | 선택 인원: ${sub.count}명 (${sub.rate}%)`;

  const tbody = document.getElementById('modal-sub-table-body');
  tbody.innerHTML = '';

  (sub.students || []).forEach((st, idx) => {
    const otherChoices = (st.choices || []).filter(c => cleanSubjectName(c) !== cleanSubjectName(sub.name));
    const nameTag = st.name ? ` <span style="font-size:0.8rem; color:#64748B; font-weight:normal;">(${st.name})</span>` : '';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:center; color:#64748B;">${idx + 1}</td>
      <td style="text-align:center; font-weight:600;">${st.grade || '2'}</td>
      <td style="text-align:center; font-weight:700; color:#334155;">${st.ban}반</td>
      <td style="text-align:center; font-weight:700; color:#334155;">${st.num}번${nameTag}</td>
      <td style="font-size:0.86rem; color:#64748B;">${otherChoices.join(', ') || '(없음)'}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('modal-subject-students').classList.add('active');
}

function open4ScienceModal() {
  const currentKey = state.activeTab.startsWith('202') ? state.activeTab : '2026_2_1';
  const sciFocus = getScienceFocusInfo(currentKey);
  if (!sciFocus.active) return;

  const tbody = document.getElementById('modal-sci4-table-body');
  tbody.innerHTML = '';

  document.getElementById('modal-sci4-title').textContent =
    `${sciFocus.modalTitle} (총 ${sciFocus.students.length}명)`;

  const normTargets = sciFocus.subjects.map(normalizeSubjectKey);

  sciFocus.students.forEach((st, idx) => {
    const chosenScience = (st.choices || []).filter(c => {
      const norm = normalizeSubjectKey(c);
      return normTargets.some(t => norm.includes(t) || t.includes(norm));
    });
    const extraChoices = (st.choices || []).filter(c => {
      const norm = normalizeSubjectKey(c);
      return !normTargets.some(t => norm.includes(t) || t.includes(norm));
    });

    const nameTag = st.name ? ` <span style="font-size:0.8rem; color:#64748B; font-weight:normal;">(${st.name})</span>` : '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:center; color:#64748B; font-weight:600;">${idx + 1}</td>
      <td style="text-align:center; font-weight:600;">${st.grade || (currentKey.startsWith('2026') ? '2' : '3')}</td>
      <td style="text-align:center; font-weight:700; color:#334155;">${st.ban}반</td>
      <td style="text-align:center; font-weight:700; color:#334155;">${st.num}번${nameTag}</td>
      <td>
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:3px;">
          ${chosenScience.map(c => `<span class="badge badge-pink" style="font-size:0.8rem;">${c}</span>`).join(' ')}
        </div>
        ${extraChoices.length > 0
          ? `<div style="font-size:0.8rem; color:#64748B; margin-top:3px;">기타 선택: ${extraChoices.map(c => `<span class="badge badge-gray" style="font-size:0.75rem;">${c}</span>`).join(' ')}</div>`
          : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (window.lucide) window.lucide.createIcons();
  document.getElementById('modal-sci4').classList.add('active');
}

function setupModalClosers() {
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

// -------------------------------------------------------------
// Excel Export Functionality
// -------------------------------------------------------------
function exportCurrentTableToExcel() {
  const currentKey = state.activeTab;
  const cohort = state.data[currentKey];
  if (!cohort || !cohort.subjects) {
    showAlertModal('데이터 없음', '내보낼 과목 선택 데이터가 없습니다.', 'error');
    return;
  }

  const exportData = [
    ['순위', '교과 영역', '과목명', '이수 구분(선택군)', '학점', '선택 학생수', '예상 분반 수 (25명 기준)', '선택률(%)', '주당 필요 시수']
  ];

  cohort.subjects.forEach((s, idx) => {
    const isDesignated = (s.type === '지정' || s.group === '학교지정' || s.badge === '학교지정');
    const sections = isDesignated ? '-' : Math.round(s.count / 25);
    const hours = isDesignated ? '-' : (sections * (s.units || 3));
    exportData.push([
      idx + 1,
      s.category,
      s.name,
      s.group || s.type,
      s.units || 3,
      s.count,
      sections,
      s.rate + '%',
      hours
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '과목선택결과');
  XLSX.writeFile(wb, `정명고_과목선택결과_${currentKey}.xlsx`);
}

function export4ScienceListToExcel() {
  const currentKey = state.activeTab.startsWith('202') ? state.activeTab : '2026_2_1';
  const sciFocus = getScienceFocusInfo(currentKey);
  if (!sciFocus.active) return;

  const exportData = [
    ['연번', '학년', '반', '번호', '이름', '선택한 과학과목', '기타 선택 과목']
  ];

  const normTargets = sciFocus.subjects.map(normalizeSubjectKey);

  sciFocus.students.forEach((st, idx) => {
    const chosenScience = (st.choices || []).filter(c => {
      const norm = normalizeSubjectKey(c);
      return normTargets.some(t => norm.includes(t) || t.includes(norm));
    });
    const extraChoices = (st.choices || []).filter(c => {
      const norm = normalizeSubjectKey(c);
      return !normTargets.some(t => norm.includes(t) || t.includes(norm));
    });

    exportData.push([
      idx + 1,
      st.grade || (currentKey.startsWith('2026') ? '2' : '3'),
      st.ban,
      st.num,
      st.name || '',
      chosenScience.join(', '),
      extraChoices.join(', ')
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '과학집중_선택자');
  XLSX.writeFile(wb, `정명고_${currentKey}_과학집중_선택자_${sciFocus.students.length}명.xlsx`);
}

function exportCoSelectionMatrixToExcel() {
  const pairs = computeCoSelectionPairs('2026_2_1');
  const exportData = [
    ['순위', '과목 A', '과목 B', '동시 선택 학생수', '동시 선택 비율(%)']
  ];

  pairs.forEach((p, idx) => {
    exportData.push([
      idx + 1,
      p.subA,
      p.subB,
      p.count,
      p.rate + '%'
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '동시선택_상관분석');
  XLSX.writeFile(wb, '정명고_시간표편성_동시선택_상관분석.xlsx');
}

// -------------------------------------------------------------
// Integrated Master Summary View (전체 학기 통합 종합 분석)
// -------------------------------------------------------------
function renderMasterSummaryView() {
  const cohorts = ['2026_2_1', '2026_2_2', '2025_3_1', '2025_3_2'];
  
  // 1. Update 4 Cohort KPI Summary Cards
  const kpi2026_1 = state.data['2026_2_1'] || {};
  const sci2026_1 = getScienceFocusInfo('2026_2_1');
  const count2026_1 = kpi2026_1.students?.length || 0;
  const subs2026_1 = kpi2026_1.subjects?.length || 0;
  const kpi1El = document.getElementById('master-kpi-2026-1-students');
  if (kpi1El) kpi1El.textContent = `${count2026_1}명`;
  const desc1El = document.getElementById('master-kpi-2026-1-desc');
  if (desc1El) desc1El.textContent = `과목 ${subs2026_1}개 · 4과학 올선택 ${sci2026_1.students.length}명`;

  const kpi2026_2 = state.data['2026_2_2'] || {};
  const sci2026_2 = getScienceFocusInfo('2026_2_2');
  const count2026_2 = kpi2026_2.students?.length || 0;
  const subs2026_2 = kpi2026_2.subjects?.length || 0;
  const kpi2El = document.getElementById('master-kpi-2026-2-students');
  if (kpi2El) kpi2El.textContent = `${count2026_2}명`;
  const desc2El = document.getElementById('master-kpi-2026-2-desc');
  if (desc2El) desc2El.textContent = `과목 ${subs2026_2}개 · 심화과학 3↑ ${sci2026_2.students.length}명`;

  const kpi2025_1 = state.data['2025_3_1'] || {};
  const sci2025_1 = getScienceFocusInfo('2025_3_1');
  const count2025_1 = kpi2025_1.students?.length || 0;
  const subs2025_1 = kpi2025_1.subjects?.length || 0;
  const kpi3El = document.getElementById('master-kpi-2025-1-students');
  if (kpi3El) kpi3El.textContent = `${count2025_1}명`;
  const desc3El = document.getElementById('master-kpi-2025-1-desc');
  if (desc3El) desc3El.textContent = `과목 ${subs2025_1}개 · 전문과학 3↑ ${sci2025_1.students.length}명`;

  const kpi2025_2 = state.data['2025_3_2'] || {};
  const count2025_2 = kpi2025_2.students?.length || 0;
  const subs2025_2 = kpi2025_2.subjects?.length || 0;
  const kpi4El = document.getElementById('master-kpi-2025-2-students');
  if (kpi4El) kpi4El.textContent = `${count2025_2}명`;
  const desc4El = document.getElementById('master-kpi-2025-2-desc');
  if (desc4El) desc4El.textContent = `과목 ${subs2025_2}개 · 전 과목 정상 편제`;

  // 2. Gather master subjects list
  const masterList = [];
  cohorts.forEach(key => {
    const ch = state.data[key];
    if (!ch || !ch.subjects) return;
    ch.subjects.forEach(sub => {
      masterList.push({
        cohortKey: key,
        cohortName: ch.name || key,
        ...sub
      });
    });
  });

  // 3. Filter masterList
  const cohortFilter = state.masterCohortFilter || 'all';
  const catFilter = state.masterCategoryFilter || 'all';
  const query = (state.masterSearchQuery || '').toLowerCase();

  const filtered = masterList.filter(item => {
    if (cohortFilter !== 'all' && item.cohortKey !== cohortFilter) return false;
    if (catFilter !== 'all' && item.category !== catFilter) return false;
    if (query && !item.name.toLowerCase().includes(query)) return false;
    return true;
  });

  const rowCountEl = document.getElementById('master-table-row-count');
  if (rowCountEl) rowCountEl.textContent = `총 ${filtered.length}개 과목`;

  const tbody = document.getElementById('master-subject-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:32px; color:#94A3B8;">조건에 일치하는 과목이 없습니다.</td></tr>`;
    return;
  }

  filtered.forEach(sub => {
    const isDesignated = (sub.type === '지정' || sub.group === '학교지정' || sub.badge === '학교지정');
    const sections = isDesignated ? '-' : Math.round(sub.count / 25);

    let catBadgeClass = 'badge-gray';
    if (sub.category === '기초') catBadgeClass = 'badge-purple';
    if (sub.category === '사회') catBadgeClass = 'badge-blue';
    if (sub.category === '과학') catBadgeClass = 'badge-green';
    if (sub.category === '생활교양') catBadgeClass = 'badge-amber';
    if (sub.category === '예체능') catBadgeClass = 'badge-pink';

    let groupBadgeClass = 'badge-purple';
    if (isDesignated) groupBadgeClass = 'badge-gray';
    else if (sub.badge === '택4') groupBadgeClass = 'badge-amber';
    else if (sub.badge === '택5') groupBadgeClass = 'badge-purple';
    else if (sub.badge === '택1') groupBadgeClass = 'badge-blue';

    let statusBadge = `<span class="badge badge-green">개설 안정</span>`;
    if (isDesignated) {
      statusBadge = `<span class="badge badge-gray">학교지정</span>`;
    } else {
      if (sub.count === 0) statusBadge = `<span class="badge badge-gray">미선택</span>`;
      else if (sub.count < 10) statusBadge = `<span class="badge badge-pink">폐강 위기</span>`;
      else if (sub.count < 15) statusBadge = `<span class="badge badge-amber">소인수 주의</span>`;
    }

    // Cohort badge tag
    let cohortTag = `<span class="badge badge-purple" style="font-size:0.75rem;">2학년 1학기</span>`;
    if (sub.cohortKey === '2026_2_2') cohortTag = `<span class="badge badge-blue" style="font-size:0.75rem;">2학년 2학기</span>`;
    else if (sub.cohortKey === '2025_3_1') cohortTag = `<span class="badge badge-green" style="font-size:0.75rem;">3학년 1학기</span>`;
    else if (sub.cohortKey === '2025_3_2') cohortTag = `<span class="badge badge-amber" style="font-size:0.75rem;">3학년 2학기</span>`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cohortTag}</td>
      <td><span class="badge ${catBadgeClass}">${sub.category}</span></td>
      <td>
        <strong style="color:#1E293B; cursor:pointer; text-decoration:underline; text-underline-offset:3px;" class="subject-clickable-name" data-sub="${sub.name}" data-cohort="${sub.cohortKey}">
          ${sub.name}
        </strong>
      </td>
      <td><span class="badge ${groupBadgeClass}">${sub.group || sub.badge || (isDesignated ? '학교지정' : '학생선택')}</span></td>
      <td style="text-align:center; font-weight:700; color:#4F46E5; white-space:nowrap;">${sub.units || 3}학점</td>
      <td style="text-align:right; font-weight:800; color:#0F172A; font-size:0.95rem; white-space:nowrap;">${sub.count}명</td>
      <td style="text-align:center; font-weight:700; color:#4F46E5; white-space:nowrap;">
        ${isDesignated ? '<span style="color:#94A3B8; font-weight:normal;">-</span>' : `${sections}개 분반`}
      </td>
      <td>
        <div class="progress-bar-wrap" style="min-width:110px;">
          <div class="progress-track">
            <div class="progress-fill" style="width: ${Math.min(100, sub.rate)}%;"></div>
          </div>
          <span style="font-size:0.8rem; font-weight:600; color:#64748B; width:42px; text-align:right;">${sub.rate}%</span>
        </div>
      </td>
      <td style="text-align:center; white-space:nowrap;">${statusBadge}</td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll('#master-subject-table .subject-clickable-name').forEach(el => {
    el.addEventListener('click', () => {
      const subName = el.getAttribute('data-sub');
      const cohortKey = el.getAttribute('data-cohort');
      openSubjectStudentsModal(subName, cohortKey);
    });
  });
}

// -------------------------------------------------------------
// Master Integrated Excel Export (전 학기 종합 엑셀 파일 생성)
// -------------------------------------------------------------
function exportMasterSummaryToExcel() {
  const wb = XLSX.utils.book_new();
  const cohorts = ['2026_2_1', '2026_2_2', '2025_3_1', '2025_3_2'];

  // Sheet 1: Master Integrated Overview
  const masterRows = [
    ['대상 학기', '순위', '교과 영역', '과목명', '이수 구분(선택군)', '학점', '선택 학생수', '예상 분반 수 (25명 기준, 학교지정은 -)', '선택률(%)', '주당 필요 시수']
  ];

  cohorts.forEach(key => {
    const ch = state.data[key];
    if (!ch || !ch.subjects) return;
    ch.subjects.forEach((s, idx) => {
      const isDesignated = (s.type === '지정' || s.group === '학교지정' || s.badge === '학교지정');
      const sections = isDesignated ? '-' : Math.round(s.count / 25);
      const hours = isDesignated ? '-' : (sections * (s.units || 3));
      masterRows.push([
        ch.name || key,
        idx + 1,
        s.category,
        s.name,
        s.group || s.type,
        s.units || 3,
        s.count,
        sections,
        s.rate + '%',
        hours
      ]);
    });
  });

  const wsMaster = XLSX.utils.aoa_to_sheet(masterRows);
  XLSX.utils.book_append_sheet(wb, wsMaster, '전체학기_통합현황');

  // Individual sheets for each of the 4 cohorts
  cohorts.forEach(key => {
    const ch = state.data[key];
    if (!ch || !ch.subjects) return;
    const sheetRows = [
      ['순위', '교과 영역', '과목명', '이수 구분(선택군)', '학점', '선택 학생수', '예상 분반 수 (25명 기준)', '선택률(%)', '주당 필요 시수']
    ];
    ch.subjects.forEach((s, idx) => {
      const isDesignated = (s.type === '지정' || s.group === '학교지정' || s.badge === '학교지정');
      const sections = isDesignated ? '-' : Math.round(s.count / 25);
      const hours = isDesignated ? '-' : (sections * (s.units || 3));
      sheetRows.push([
        idx + 1,
        s.category,
        s.name,
        s.group || s.type,
        s.units || 3,
        s.count,
        sections,
        s.rate + '%',
        hours
      ]);
    });

    const sheetName = key.replace('_', '입학_');
    const wsCohort = XLSX.utils.aoa_to_sheet(sheetRows);
    XLSX.utils.book_append_sheet(wb, wsCohort, sheetName);
  });

  // Sheet for Science Focus Summary
  const sciRows = [
    ['학기 구분', '구분 명칭', '대상 과학 과목군', '기준 요건', '해당 학생수', '전체 학생 대비 비율(%)']
  ];
  ['2026_2_1', '2026_2_2', '2025_3_1'].forEach(k => {
    const focus = getScienceFocusInfo(k);
    if (focus.active) {
      const total = state.data[k]?.students?.length || 0;
      const rate = total > 0 ? ((focus.students.length / total) * 100).toFixed(1) : '0.0';
      sciRows.push([
        state.data[k]?.name || k,
        focus.title,
        focus.subjects.join(', '),
        k === '2026_2_1' ? '4과목 올선택' : '3과목 이상 선택',
        focus.students.length,
        rate + '%'
      ]);
    }
  });
  const wsSci = XLSX.utils.aoa_to_sheet(sciRows);
  XLSX.utils.book_append_sheet(wb, wsSci, '과학집중_종합현황');

  XLSX.writeFile(wb, '정명고_2027학년도_과목선택_통합종합분석보고서.xlsx');
}

// -------------------------------------------------------------
// Download Official Course Selection Excel Template
// Generates standard 4-sheet template for teachers & students
// -------------------------------------------------------------
function downloadExcelTemplate() {
  const wb = XLSX.utils.book_new();

  // 1. 2026_2_1
  const h2026_1 = [
    '학년', '반', '번호', '이름',
    '대수', '문학', '스포츠 생활1', '영어Ⅰ', '확률과 통계',
    '사회와 문화', '현대사회와 윤리', '세계사', '세계시민과 지리', '물리학', '화학', '생명과학', '지구과학',
    '중국어', '일본어', '정보', '한문'
  ];
  const r2026_1 = [2, 1, 1, '홍길동', 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0];
  const ws1 = XLSX.utils.aoa_to_sheet([h2026_1, r2026_1]);
  XLSX.utils.book_append_sheet(wb, ws1, '2026입학생 2학년 1학기');

  // 2. 2026_2_2
  const h2026_2 = [
    '학년', '반', '번호', '이름',
    '독서와 작문', '미적분Ⅰ', '영어Ⅱ', '스포츠 생활2',
    '언어생활 탐구', '기하', '영미 문학 읽기', '법과 사회', '윤리와 사상', '동아시아 역사 기행', '한국지리 탐구', '사회문제 탐구', '역학과 에너지', '화학반응의 세계', '세포와 물질대사', '지구시스템과학', '과학과제연구',
    '중국 문화', '일본어 회화', '인공지능 기초', '언어생활과 한자'
  ];
  const r2026_2 = [2, 1, 1, '홍길동', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
  const ws2 = XLSX.utils.aoa_to_sheet([h2026_2, r2026_2]);
  XLSX.utils.book_append_sheet(wb, ws2, '2026입학생 2학년 2학기');

  // 3. 2025_3_1
  const h2025_1 = [
    '학년', '반', '번호', '이름',
    '화법과 언어', '영어 독해와 작문', '스포츠 과학', '음악감상과 비평',
    '미적분Ⅱ', '경제수학',
    '문학과 영상', '인공지능 수학', '심화영어', '국제 관계의 이해', '인문학과 윤리', '도시의 미래 탐구', '기후변화와 지속가능한 세계', '전자기와 양자', '물질과 에너지', '생물의 유전', '행성우주과학',
    '인간과 심리', '심화 일본어', '데이터 과학', '생활과 한문'
  ];
  const r2025_1 = [3, 1, 1, '김철수', 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0];
  const ws3 = XLSX.utils.aoa_to_sheet([h2025_1, r2025_1]);
  XLSX.utils.book_append_sheet(wb, ws3, '2025입학생 3학년 1학기');

  // 4. 2025_3_2
  const h2025_2 = [
    '학년', '반', '번호', '이름',
    '독서 토론과 글쓰기', '심화 영어 독해와 작문', '스포츠 문화', '미술감상과 비평', '융합사고 수학',
    '주제 탐구 독서', '수학과 문화', '미디어 영어', '여행지리', '윤리문제 탐구', '금융과 경제생활', '역사로 탐구하는 현대 세계', '과학의 역사와 문화', '기후변화와 환경생태', '융합과학 탐구',
    '중국 언어와 역사의 이해1', '일본 문화', '소프트웨어와 생활', '한문고전읽기'
  ];
  const r2025_2 = [3, 1, 1, '김철수', 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0];
  const ws4 = XLSX.utils.aoa_to_sheet([h2025_2, r2025_2]);
  XLSX.utils.book_append_sheet(wb, ws4, '2025입학생 3학년 2학기');

  XLSX.writeFile(wb, '정명고_2027학년도_과목선택_조사양식_표준서식.xlsx');
}

// -------------------------------------------------------------
// Universal Smart Adaptive School Excel Sheet Parser
// 
// Intelligently auto-detects:
// 1. Subject Header Row: scans rows 0~9 to find the row containing subject names (Row 1, 2, 4, etc.)
// 2. Student Info Columns: scans headers for '학년', '반', '번호', '성명'/'이름', '학번' in any column position (Col A, B, C, D...)
// 3. Data Start Row: dynamically identifies where binary 0/1 choice data begins
// 4. Group Headings: forward fills parent group labels (택4, 택5, 학교지정 등)
// -------------------------------------------------------------
function parseSchoolExcelSheet(sheetName, sheetIndex, jsonRows) {
  if (!jsonRows || jsonRows.length < 2) return null;

  // 1. Determine Target Cohort based on Sheet Name or Index
  const rawClean = String(sheetName || '').replace(/\s+/g, '');
  let cohortKey = '2026_2_1';
  if ((rawClean.includes('2026') && rawClean.includes('2학기')) || rawClean.includes('2-2') || (sheetIndex === 1 && !rawClean.includes('2025'))) {
    cohortKey = '2026_2_2';
  } else if ((rawClean.includes('2025') && rawClean.includes('1학기')) || rawClean.includes('3-1') || sheetIndex === 2) {
    cohortKey = '2025_3_1';
  } else if ((rawClean.includes('2025') && rawClean.includes('2학기')) || rawClean.includes('3-2') || sheetIndex === 3) {
    cohortKey = '2025_3_2';
  } else {
    cohortKey = '2026_2_1';
  }

  // 2. Intelligent Auto-Detection of Subject Header Row (Scans rows 0 through 9)
  let bestSubjectRowIdx = -1;
  let maxSubjectScore = 0;

  for (let r = 0; r < Math.min(jsonRows.length, 10); r++) {
    const row = jsonRows[r];
    if (!row) continue;
    let score = 0;
    for (let c = 0; c < row.length; c++) {
      const cellVal = String(row[c] || '').trim();
      if (!cellVal) continue;
      // High score if matches official curriculum subject
      if (getCurriculumSubject(cohortKey, cellVal)) {
        score += 5;
      } else if (isLikelySubjectName(cellVal)) {
        score += 2;
      }
    }
    if (score > maxSubjectScore) {
      maxSubjectScore = score;
      bestSubjectRowIdx = r;
    }
  }

  // Fallback to row 0 if no score
  if (bestSubjectRowIdx === -1) {
    bestSubjectRowIdx = 0;
  }

  // 3. Intelligent Auto-Detection of Student Identifier Columns (Scans rows 0 up to bestSubjectRowIdx + 1)
  let gradeCol = -1;
  let banCol = -1;
  let numCol = -1;
  let nameCol = -1;
  let idCol = -1;

  for (let r = 0; r <= Math.min(jsonRows.length - 1, bestSubjectRowIdx + 1); r++) {
    const row = jsonRows[r];
    if (!row) continue;
    for (let c = 0; c < row.length; c++) {
      const val = String(row[c] || '').trim().replace(/\s+/g, '');
      if ((val === '학년' || val === '학년도') && gradeCol === -1) gradeCol = c;
      if ((val === '반' || val === '학급' || val === '학급반') && banCol === -1) banCol = c;
      if ((val === '번호' || val === '출석번호' || val === '번') && numCol === -1) numCol = c;
      if ((val === '성명' || val === '이름' || val === '학생명' || val === '학생이름') && nameCol === -1) nameCol = c;
      if ((val === '학번' || val === 'id' || val === '학생id' || val === '학생번호') && idCol === -1) idCol = c;
    }
  }

  // Fallback defaults if column headers were missing or unlabeled
  if (banCol === -1 || numCol === -1) {
    if (cohortKey.startsWith('2025')) {
      if (gradeCol === -1) gradeCol = 1;
      if (banCol === -1) banCol = 2;
      if (numCol === -1) numCol = 3;
    } else {
      if (gradeCol === -1) gradeCol = 0;
      if (banCol === -1) banCol = 1;
      if (numCol === -1) numCol = 2;
    }
  }

  // 4. Extract Subject Columns & Groups from bestSubjectRowIdx
  const subjectRow = jsonRows[bestSubjectRowIdx] || [];
  const groupRow = bestSubjectRowIdx > 0 ? (jsonRows[bestSubjectRowIdx - 1] || []) : [];

  // Forward fill group names (from row above, e.g. "학교지정", "선택 4과목", "택5", "택1")
  const forwardFilledGroups = [];
  let currentGroup = '';
  for (let c = 0; c < Math.max(groupRow.length, subjectRow.length); c++) {
    const gVal = String(groupRow[c] || '').trim();
    if (gVal && (gVal.includes('택') || gVal.includes('지정') || gVal.includes('선택'))) {
      currentGroup = gVal;
    }
    forwardFilledGroups[c] = currentGroup;
  }

  const subjectHeaders = [];
  for (let c = 0; c < subjectRow.length; c++) {
    // Skip student identification columns
    if (c === gradeCol || c === banCol || c === numCol || c === nameCol || c === idCol) continue;

    let rawSubName = String(subjectRow[c] || '').trim();
    let groupName = forwardFilledGroups[c] || '';

    if (!rawSubName && !groupName) continue;
    if (rawSubName === '0' || rawSubName === '1') continue;

    // Match against official curriculum definition or fallback
    const cur = getCurriculumSubject(cohortKey, rawSubName);
    let finalName = '';
    let finalGroup = '';
    let finalBadge = '';
    let finalType = '선택';
    let finalUnits = 3;
    let finalCat = '기초';

    if (cur) {
      finalName = cur.name;
      finalGroup = cur.group;
      finalBadge = cur.badge;
      finalType = cur.type;
      finalUnits = cur.units;
      finalCat = cur.category;
    } else {
      const parsed = extractSubjectAndGroup(rawSubName, groupName);
      finalName = parsed.cleanName;
      finalGroup = parsed.group;
      const meta = getSubjectMeta(finalName, cohortKey);
      finalBadge = meta.badge || '선택';
      finalType = meta.type || '선택';
      finalUnits = meta.units || 3;
      finalCat = meta.category || '기초';
    }

    // Ignore noise columns (비고, 합계, etc.)
    if (finalName && !finalName.includes('비고') && !finalName.includes('합계') && !finalName.includes('총계') && !finalName.includes('학년') && !finalName.includes('반') && !finalName.includes('번호')) {
      subjectHeaders.push({
        colIndex: c,
        name: finalName,
        cleanName: finalName,
        group: finalGroup,
        badge: finalBadge,
        type: finalType,
        units: finalUnits,
        category: finalCat
      });
    }
  }

  if (subjectHeaders.length === 0) return null;

  // 5. Intelligent Detection of Data Start Row
  let dataStartRowIdx = bestSubjectRowIdx + 1;
  for (let r = bestSubjectRowIdx + 1; r < Math.min(jsonRows.length, bestSubjectRowIdx + 6); r++) {
    const row = jsonRows[r];
    if (!row) continue;
    let binaryCount = 0;
    let testedCount = 0;
    subjectHeaders.forEach(sh => {
      const v = String(row[sh.colIndex] !== undefined ? row[sh.colIndex] : '').trim();
      if (v !== '') {
        testedCount++;
        if (v === '0' || v === '1' || v === 'O' || v === 'X' || v === 'o' || v === 'x') {
          binaryCount++;
        }
      }
    });
    if (testedCount >= 3 && (binaryCount / testedCount) >= 0.5) {
      dataStartRowIdx = r;
      break;
    }
  }

  // 6. Parse Student Rows
  const students = [];
  const dataRows = jsonRows.slice(dataStartRowIdx);

  for (let r = 0; r < dataRows.length; r++) {
    const row = dataRows[r];
    if (!row || row.length === 0) continue;

    const rawGrade = String(gradeCol !== -1 && row[gradeCol] !== undefined ? row[gradeCol] : '').trim();
    const rawBan = String(banCol !== -1 && row[banCol] !== undefined ? row[banCol] : '').trim();
    const rawNum = String(numCol !== -1 && row[numCol] !== undefined ? row[numCol] : '').trim();
    const rawName = String(nameCol !== -1 && row[nameCol] !== undefined ? row[nameCol] : '').trim();
    const rawId = String(idCol !== -1 && row[idCol] !== undefined ? row[idCol] : '').trim();

    // Skip empty or summary rows
    if (!rawBan && !rawNum && !rawName && !rawId) continue;
    if (rawGrade.includes('합계') || rawBan.includes('합계') || rawGrade.includes('총계') || rawBan.includes('총계') || rawName.includes('합계')) continue;

    const gradeVal = rawGrade || (cohortKey.startsWith('2026') ? '2' : '3');
    const banVal = rawBan || '-';
    const numVal = rawNum || String(r + 1);

    const choices = [];
    const designated = [];

    subjectHeaders.forEach(sub => {
      const cell = row[sub.colIndex];
      // 1 or '1' or 'O' means selected
      if (cell === 1 || cell === '1' || cell === 1.0 || String(cell).trim() === '1' || String(cell).trim().toUpperCase() === 'O') {
        if (sub.type === '지정') {
          designated.push(sub.cleanName);
        } else {
          choices.push(sub.cleanName);
        }
      }
    });

    students.push({
      id: `${banVal}반 ${numVal}번`,
      grade: gradeVal,
      ban: banVal,
      num: numVal,
      name: rawName,
      choices: choices,
      designated: designated
    });
  }

  const toColLetter = (idx) => idx >= 0 ? String.fromCharCode(65 + idx) : '-';

  return {
    cohortKey,
    students,
    subjectHeaders,
    subjectCount: subjectHeaders.length,
    metaInfo: {
      subjectRowNumber: bestSubjectRowIdx + 1,
      dataStartRowNumber: dataStartRowIdx + 1,
      gradeColLetter: toColLetter(gradeCol),
      banColLetter: toColLetter(banCol),
      numColLetter: toColLetter(numCol),
      nameColLetter: toColLetter(nameCol)
    }
  };
}

// -------------------------------------------------------------
// Excel (.xlsx / .csv) File Upload Handler
// -------------------------------------------------------------
function handleFileUpload(file) {
  if (!file) return;
  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      let loadedCount = 0;
      let sheetResults = [];

      workbook.SheetNames.forEach((sheetName, sheetIndex) => {
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

        if (!json || json.length < 2) return;

        const result = parseSchoolExcelSheet(sheetName, sheetIndex, json);
        if (result && result.students && result.students.length > 0) {
          loadDatasetIntoState(result.cohortKey, result.students);
          loadedCount += result.students.length;
          const cohortTitle = state.data[result.cohortKey]?.name || result.cohortKey;
          sheetResults.push({
            sheetName: sheetName,
            cohortTitle: cohortTitle,
            studentCount: result.students.length,
            subjectCount: result.subjectCount,
            meta: result.metaInfo
          });
        }
      });

      if (loadedCount > 0) {
        updateStatus(true, `${file.name}`, loadedCount, true);
        
        // Show summary bar
        const summaryBar = document.getElementById('upload-summary-bar');
        if (summaryBar) {
          summaryBar.style.display = 'flex';
          const fn = document.getElementById('uploaded-filename');
          if (fn) fn.textContent = file.name;
          const sc = document.getElementById('uploaded-sheet-count');
          if (sc) sc.textContent = `${sheetResults.length}개 시트 자동 감지 완료`;
          const ts = document.getElementById('uploaded-total-students');
          if (ts) ts.textContent = `총 ${loadedCount}명 파싱`;
        }

        renderDashboard();
        showUploadResultModal(file.name, loadedCount, sheetResults);
      } else {
        showAlertModal('과목 데이터 미감지', '엑셀 파일에서 개별 과목 선택 데이터를 감지하지 못했습니다.\n\n시트의 상단 행에 과목명(물리학, 화학, 대수, 문학 등)이 있는지 확인해주세요.', 'error');
      }

    } catch (err) {
      console.error('File parsing error:', err);
      showAlertModal('파일 분석 오류', '파일을 분석하는 중 오류가 발생했습니다:\n' + err.message, 'error');
    }
  };

  reader.readAsArrayBuffer(file);
}

// -------------------------------------------------------------
// Custom Pastel Upload Result Modal
// -------------------------------------------------------------
function showUploadResultModal(fileName, loadedCount, sheetResults) {
  const modal = document.getElementById('modal-upload-result');
  if (!modal) return;

  const fn = document.getElementById('upload-result-filename');
  if (fn) fn.textContent = fileName;
  const sc = document.getElementById('upload-result-student-count');
  if (sc) sc.textContent = `${loadedCount}명`;
  const shc = document.getElementById('upload-result-sheet-count');
  if (shc) shc.textContent = `${sheetResults.length}개 시트`;

  const listContainer = document.getElementById('upload-result-sheet-list');
  if (listContainer) {
    listContainer.innerHTML = '';
    sheetResults.forEach(item => {
      const card = document.createElement('div');
      card.style.cssText = 'background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:12px 16px; box-shadow:0 1px 3px rgba(0,0,0,0.03);';

      let locationPills = `<span class="badge badge-gray" style="font-size:0.75rem;">과목 행: ${item.meta.subjectRowNumber}행</span> <span class="badge badge-gray" style="font-size:0.75rem;">반/번호: ${item.meta.banColLetter}열/${item.meta.numColLetter}열</span>`;
      if (item.meta.nameColLetter && item.meta.nameColLetter !== '-') {
        locationPills += ` <span class="badge badge-blue" style="font-size:0.75rem;">이름: ${item.meta.nameColLetter}열</span>`;
      }

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
          <strong style="color:#1E293B; font-size:0.92rem;">${item.sheetName}</strong>
          <span class="badge badge-purple">${item.cohortTitle}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; flex-wrap:wrap; gap:8px;">
          <span style="font-size:0.84rem; color:#475569;">
            학생 <strong>${item.studentCount}명</strong> · 감지 과목 <strong>${item.subjectCount}개</strong>
          </span>
          <div style="display:flex; gap:4px; flex-wrap:wrap;">
            ${locationPills}
          </div>
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  modal.classList.add('active');
}

// -------------------------------------------------------------
// Status Indicator Updater
// -------------------------------------------------------------
function updateStatus(isSuccess, message, count, isUploaded = false) {
  const dot = document.getElementById('status-indicator');
  const text = document.getElementById('status-text');
  const badge = document.getElementById('data-meta-badge');

  if (dot) dot.className = isSuccess ? 'status-dot' : 'status-dot loading';
  if (text) text.textContent = `분석 데이터: ${message}`;
  if (badge) {
    badge.textContent = isUploaded ? `업로드 파일 (${count}명)` : `정명고 공식 교육과정 (${count}명)`;
    badge.className = isUploaded ? 'badge badge-green' : 'badge badge-purple';
  }
}

// -------------------------------------------------------------
// Event Listeners Setup
// -------------------------------------------------------------
function setupEventListeners() {
  // 1. Tab Switching
  document.querySelectorAll('#cohort-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cohort-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderDashboard();
    });
  });

  // 2. Category Filters
  document.querySelectorAll('#category-filters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#category-filters .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.categoryFilter = btn.getAttribute('data-cat');
      const cohort = state.data[state.activeTab];
      renderSubjectTable(cohort?.subjects || [], cohort?.students?.length || 0);
    });
  });

  // 3. Type Filters (학생선택 / 학교지정)
  document.querySelectorAll('#type-filters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#type-filters .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.typeFilter = btn.getAttribute('data-type');
      const cohort = state.data[state.activeTab];
      renderSubjectTable(cohort?.subjects || [], cohort?.students?.length || 0);
    });
  });

  // 4. Subject Search Input
  const searchInput = document.getElementById('subject-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      const cohort = state.data[state.activeTab];
      renderSubjectTable(cohort?.subjects || [], cohort?.students?.length || 0);
    });
  }

  // 5. Expert Cohort Pills Switcher
  document.querySelectorAll('#expert-cohort-pills button').forEach(btn => {
    btn.addEventListener('click', () => {
      const cohort = btn.getAttribute('data-cohort');
      if (cohort) {
        state.expertCohort = cohort;
        renderExpertTools();
      }
    });
  });

  // 6. Student Filters (Cohort & Ban Dropdowns)
  const studentCohortSelect = document.getElementById('student-filter-cohort');
  if (studentCohortSelect) {
    studentCohortSelect.addEventListener('change', (e) => {
      state.studentCohort = e.target.value;
      state.studentBan = '1';
      renderStudentSearchAndAudit();
    });
  }

  const studentBanSelect = document.getElementById('student-filter-ban');
  if (studentBanSelect) {
    studentBanSelect.addEventListener('change', (e) => {
      state.studentBan = e.target.value;
      renderAllStudentsTable();
    });
  }

  const studentSearchInput = document.getElementById('student-search-input');
  if (studentSearchInput) {
    studentSearchInput.addEventListener('input', () => {
      renderAllStudentsTable();
    });
  }

  // 7. Master Summary View Filters
  document.querySelectorAll('#master-cohort-filter-pills button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#master-cohort-filter-pills button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.masterCohortFilter = btn.getAttribute('data-filter');
      renderMasterSummaryView();
    });
  });

  document.querySelectorAll('#master-category-filter-pills button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#master-category-filter-pills button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.masterCategoryFilter = btn.getAttribute('data-cat');
      renderMasterSummaryView();
    });
  });

  const masterSearchInput = document.getElementById('master-search-input');
  if (masterSearchInput) {
    masterSearchInput.addEventListener('input', (e) => {
      state.masterSearchQuery = e.target.value.trim();
      renderMasterSummaryView();
    });
  }

  // 8. Section Simulator Slider
  const slider = document.getElementById('sim-class-size-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      state.simClassSize = parseInt(e.target.value, 10);
      document.getElementById('sim-slider-val').textContent = `${state.simClassSize}명 기준`;
      renderExpertTools();
    });
  }

  // 9. 4-Science View Students Button
  const btnSci4 = document.getElementById('btn-view-sci4-students');
  if (btnSci4) {
    btnSci4.addEventListener('click', open4ScienceModal);
  }

  // 10. Load Sample Data Button
  const btnLoadSample = document.getElementById('btn-load-sample');
  if (btnLoadSample) {
    btnLoadSample.addEventListener('click', () => {
      generateRealisticSampleData();
      const summaryBar = document.getElementById('upload-summary-bar');
      if (summaryBar) summaryBar.style.display = 'none';
      const fileInput = document.getElementById('file-input');
      if (fileInput) fileInput.value = '';
      renderDashboard();
      showAlertModal('샘플 데이터 복원 완료', '정명고 공식 교육과정 기준 샘플 데이터(355명)로 복원되었습니다.', 'success');
    });
  }

  // 11. File Drag & Drop & Browse
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const btnBrowseFile = document.getElementById('btn-browse-file');
  const btnReupload = document.getElementById('btn-reupload');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0]);
      }
    });
  }

  if (btnBrowseFile && fileInput) {
    btnBrowseFile.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  if (btnReupload && fileInput) {
    btnReupload.addEventListener('click', () => {
      fileInput.click();
    });
  }

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    });
  }

  // 12. Export Buttons
  document.getElementById('btn-export-excel')?.addEventListener('click', downloadExcelTemplate);
  document.getElementById('btn-export-sci4-excel')?.addEventListener('click', export4ScienceListToExcel);
  document.getElementById('btn-export-matrix')?.addEventListener('click', exportCoSelectionMatrixToExcel);
  document.getElementById('btn-export-master-excel')?.addEventListener('click', exportMasterSummaryToExcel);

  // 13. Print Button
  document.getElementById('btn-print')?.addEventListener('click', () => {
    window.print();
  });

  // 14. Help Guide Modal
  document.getElementById('btn-help-guide')?.addEventListener('click', () => {
    document.getElementById('modal-help')?.classList.add('active');
  });

  // 15. Setup Modal Closers
  setupModalClosers();
}

// -------------------------------------------------------------
// App Initialization
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  generateRealisticSampleData();
  setupEventListeners();
  renderDashboard();
  console.log('정명고 공식 교육과정 분석 대시보드가 정상적으로 초기화되었습니다.');
});
