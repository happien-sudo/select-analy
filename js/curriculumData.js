/**
 * 2022 개정 교육과정 교과목 마스터 데이터베이스
 * 출처: 2026 함께 만들어가는 학생중심 학교교육과정 도움 자료집 (고등학교)
 */

const CURRICULUM_DATA = [
  // ==================== 국어 ====================
  { group: '국어', category: '공통과목', name: '공통국어1', credits: 4 },
  { group: '국어', category: '공통과목', name: '공통국어2', credits: 4 },
  { group: '국어', category: '일반선택', name: '화법과 언어', credits: 4 },
  { group: '국어', category: '일반선택', name: '독서와 작문', credits: 4 },
  { group: '국어', category: '일반선택', name: '문학', credits: 4 },
  { group: '국어', category: '진로선택', name: '주제 탐구 독서', credits: 4 },
  { group: '국어', category: '진로선택', name: '문학과 영상', credits: 4 },
  { group: '국어', category: '진로선택', name: '직무 의사소통', credits: 4 },
  { group: '국어', category: '융합선택', name: '독서 토론과 글쓰기', credits: 4 },
  { group: '국어', category: '융합선택', name: '매체 의사소통', credits: 4 },
  { group: '국어', category: '융합선택', name: '언어생활 탐구', credits: 4 },

  // ==================== 수학 ====================
  { group: '수학', category: '공통과목', name: '공통수학1', credits: 4 },
  { group: '수학', category: '공통과목', name: '공통수학2', credits: 4 },
  { group: '수학', category: '공통과목', name: '기본수학1', credits: 4 },
  { group: '수학', category: '공통과목', name: '기본수학2', credits: 4 },
  { group: '수학', category: '일반선택', name: '대수', credits: 4 },
  { group: '수학', category: '일반선택', name: '미적분Ⅰ', credits: 4 },
  { group: '수학', category: '일반선택', name: '확률과 통계', credits: 4 },
  { group: '수학', category: '진로선택', name: '기하', credits: 4 },
  { group: '수학', category: '진로선택', name: '미적분Ⅱ', credits: 4 },
  { group: '수학', category: '진로선택', name: '경제 수학', credits: 4 },
  { group: '수학', category: '진로선택', name: '인공지능 수학', credits: 4 },
  { group: '수학', category: '진로선택', name: '직무 수학', credits: 4 },
  { group: '수학', category: '진로선택', name: '전문 수학', credits: 4 },
  { group: '수학', category: '진로선택', name: '이산 수학', credits: 4 },
  { group: '수학', category: '진로선택', name: '고급 기하', credits: 4 },
  { group: '수학', category: '진로선택', name: '고급 대수', credits: 4 },
  { group: '수학', category: '진로선택', name: '고급 미적분', credits: 4 },
  { group: '수학', category: '융합선택', name: '수학과 문화', credits: 4 },
  { group: '수학', category: '융합선택', name: '실용 통계', credits: 4 },
  { group: '수학', category: '융합선택', name: '수학과제 탐구', credits: 4 },
  { group: '수학', category: '융합선택', name: '융합사고수학', credits: 4 },

  // ==================== 영어 ====================
  { group: '영어', category: '공통과목', name: '공통영어1', credits: 4 },
  { group: '영어', category: '공통과목', name: '공통영어2', credits: 4 },
  { group: '영어', category: '공통과목', name: '기본영어1', credits: 4 },
  { group: '영어', category: '공통과목', name: '기본영어2', credits: 4 },
  { group: '영어', category: '일반선택', name: '영어Ⅰ', credits: 4 },
  { group: '영어', category: '일반선택', name: '영어Ⅱ', credits: 4 },
  { group: '영어', category: '일반선택', name: '영어 독해와 작문', credits: 4 },
  { group: '영어', category: '진로선택', name: '영미 문학 읽기', credits: 4 },
  { group: '영어', category: '진로선택', name: '영어 발표와 토론', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 독해와 작문', credits: 4 },
  { group: '영어', category: '진로선택', name: '직무 영어', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 회화Ⅰ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 회화Ⅱ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어Ⅰ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어Ⅱ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 독해Ⅰ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 독해Ⅱ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 작문Ⅰ', credits: 4 },
  { group: '영어', category: '진로선택', name: '심화 영어 작문Ⅱ', credits: 4 },
  { group: '영어', category: '융합선택', name: '실생활 영어 회화', credits: 4 },
  { group: '영어', category: '융합선택', name: '미디어 영어', credits: 4 },
  { group: '영어', category: '융합선택', name: '세계 문화와 영어', credits: 4 },

  // ==================== 사회(역사/도덕 포함) ====================
  { group: '사회', category: '공통과목', name: '한국사1', credits: 3 },
  { group: '사회', category: '공통과목', name: '한국사2', credits: 3 },
  { group: '사회', category: '공통과목', name: '통합사회1', credits: 4 },
  { group: '사회', category: '공통과목', name: '통합사회2', credits: 4 },
  { group: '사회', category: '일반선택', name: '세계시민과 지리', credits: 4 },
  { group: '사회', category: '일반선택', name: '세계사', credits: 4 },
  { group: '사회', category: '일반선택', name: '사회와 문화', credits: 4 },
  { group: '사회', category: '일반선택', name: '현대사회와 윤리', credits: 4 },
  { group: '사회', category: '진로선택', name: '한국지리 탐구', credits: 4 },
  { group: '사회', category: '진로선택', name: '도시의 미래 탐구', credits: 4 },
  { group: '사회', category: '진로선택', name: '동아시아 역사 기행', credits: 4 },
  { group: '사회', category: '진로선택', name: '정치', credits: 4 },
  { group: '사회', category: '진로선택', name: '법과 사회', credits: 4 },
  { group: '사회', category: '진로선택', name: '경제', credits: 4 },
  { group: '사회', category: '진로선택', name: '윤리와 사상', credits: 4 },
  { group: '사회', category: '진로선택', name: '인문학과 윤리', credits: 4 },
  { group: '사회', category: '진로선택', name: '국제 관계의 이해', credits: 4 },
  { group: '사회', category: '진로선택', name: '국제 정치', credits: 4 },
  { group: '사회', category: '진로선택', name: '국제 경제', credits: 4 },
  { group: '사회', category: '진로선택', name: '국제법', credits: 4 },
  { group: '사회', category: '진로선택', name: '지역 이해', credits: 4 },
  { group: '사회', category: '진로선택', name: '한국 사회의 이해', credits: 4 },
  { group: '사회', category: '진로선택', name: '비교 문화', credits: 4 },
  { group: '사회', category: '진로선택', name: '세계 문제와 미래 사회', credits: 4 },
  { group: '사회', category: '진로선택', name: '국제 관계와 국제기구', credits: 4 },
  { group: '사회', category: '진로선택', name: '현대 세계의 변화', credits: 4 },
  { group: '사회', category: '진로선택', name: '사회 탐구 방법', credits: 4 },
  { group: '사회', category: '진로선택', name: '사회과제 연구', credits: 4 },
  { group: '사회', category: '융합선택', name: '여행지리', credits: 4 },
  { group: '사회', category: '융합선택', name: '역사로 탐구하는 현대 세계', credits: 4 },
  { group: '사회', category: '융합선택', name: '사회문제 탐구', credits: 4 },
  { group: '사회', category: '융합선택', name: '금융과 경제생활', credits: 4 },
  { group: '사회', category: '융합선택', name: '윤리문제 탐구', credits: 4 },
  { group: '사회', category: '융합선택', name: '기후변화와 지속가능한 세계', credits: 4 },

  // ==================== 과학 ====================
  { group: '과학', category: '공통과목', name: '통합과학1', credits: 4 },
  { group: '과학', category: '공통과목', name: '통합과학2', credits: 4 },
  { group: '과학', category: '공통과목', name: '과학탐구실험1', credits: 1 },
  { group: '과학', category: '공통과목', name: '과학탐구실험2', credits: 1 },
  { group: '과학', category: '일반선택', name: '물리학', credits: 4 },
  { group: '과학', category: '일반선택', name: '화학', credits: 4 },
  { group: '과학', category: '일반선택', name: '생명과학', credits: 4 },
  { group: '과학', category: '일반선택', name: '지구과학', credits: 4 },
  { group: '과학', category: '진로선택', name: '역학과 에너지', credits: 4 },
  { group: '과학', category: '진로선택', name: '전자기와 양자', credits: 4 },
  { group: '과학', category: '진로선택', name: '물질과 에너지', credits: 4 },
  { group: '과학', category: '진로선택', name: '화학 반응의 세계', credits: 4 },
  { group: '과학', category: '진로선택', name: '세포와 물질대사', credits: 4 },
  { group: '과학', category: '진로선택', name: '생물의 유전', credits: 4 },
  { group: '과학', category: '진로선택', name: '지구시스템과학', credits: 4 },
  { group: '과학', category: '진로선택', name: '행성우주과학', credits: 4 },
  { group: '과학', category: '진로선택', name: '고급 물리학', credits: 4 },
  { group: '과학', category: '진로선택', name: '고급 화학', credits: 4 },
  { group: '과학', category: '진로선택', name: '고급 생명과학', credits: 4 },
  { group: '과학', category: '진로선택', name: '고급 지구과학', credits: 4 },
  { group: '과학', category: '진로선택', name: '과학과제 연구', credits: 4 },
  { group: '과학', category: '융합선택', name: '물리학 실험', credits: 4 },
  { group: '과학', category: '융합선택', name: '화학 실험', credits: 4 },
  { group: '과학', category: '융합선택', name: '생명과학 실험', credits: 4 },
  { group: '과학', category: '융합선택', name: '지구과학 실험', credits: 4 },
  { group: '과학', category: '융합선택', name: '과학의 역사와 문화', credits: 4 },
  { group: '과학', category: '융합선택', name: '기후변화와 환경생태', credits: 4 },
  { group: '과학', category: '융합선택', name: '융합과학 탐구', credits: 4 },

  // ==================== 체육 ====================
  { group: '체육', category: '일반선택', name: '체육1', credits: 3 },
  { group: '체육', category: '일반선택', name: '체육2', credits: 3 },
  { group: '체육', category: '진로선택', name: '운동과 건강', credits: 3 },
  { group: '체육', category: '진로선택', name: '스포츠 문화', credits: 2 },
  { group: '체육', category: '진로선택', name: '스포츠 과학', credits: 2 },
  { group: '체육', category: '융합선택', name: '스포츠 생활1', credits: 3 },
  { group: '체육', category: '융합선택', name: '스포츠 생활2', credits: 3 },
  { group: '체육', category: '진로선택', name: '스포츠 개론', credits: 4 },
  { group: '체육', category: '진로선택', name: '육상', credits: 4 },
  { group: '체육', category: '진로선택', name: '체조', credits: 4 },
  { group: '체육', category: '진로선택', name: '수상 스포츠', credits: 4 },
  { group: '체육', category: '융합선택', name: '스포츠 교육', credits: 4 },
  { group: '체육', category: '진로선택', name: '기초 체육 전공 실기', credits: 4 },
  { group: '체육', category: '진로선택', name: '심화 체육 전공 실기', credits: 4 },
  { group: '체육', category: '진로선택', name: '고급 체육 전공 실기', credits: 4 },
  { group: '체육', category: '진로선택', name: '스포츠 경기 체력', credits: 4 },
  { group: '체육', category: '융합선택', name: '스포츠 생리의학', credits: 4 },
  { group: '체육', category: '진로선택', name: '스포츠 경기 기술', credits: 4 },
  { group: '체육', category: '진로선택', name: '스포츠 경기 분석', credits: 4 },
  { group: '체육', category: '융합선택', name: '스포츠 행정 및 경영', credits: 4 },

  // ==================== 예술 ====================
  { group: '예술', category: '일반선택', name: '음악', credits: 3 },
  { group: '예술', category: '일반선택', name: '미술', credits: 3 },
  { group: '예술', category: '일반선택', name: '연극', credits: 3 },
  { group: '예술', category: '진로선택', name: '음악 연주와 창작', credits: 3 },
  { group: '예술', category: '진로선택', name: '음악 감상과 비평', credits: 3 },
  { group: '예술', category: '진로선택', name: '미술 창작', credits: 3 },
  { group: '예술', category: '진로선택', name: '미술 감상과 비평', credits: 3 },
  { group: '예술', category: '융합선택', name: '음악과 미디어', credits: 3 },
  { group: '예술', category: '융합선택', name: '미술과 매체', credits: 3 },
  { group: '예술', category: '진로선택', name: '음악 이론', credits: 4 },
  { group: '예술', category: '진로선택', name: '음악사', credits: 4 },
  { group: '예술', category: '진로선택', name: '시창·청음', credits: 4 },
  { group: '예술', category: '진로선택', name: '음악 전공 실기', credits: 4 },
  { group: '예술', category: '융합선택', name: '음악과 문화', credits: 4 },
  { group: '예술', category: '진로선택', name: '합창·합주', credits: 4 },
  { group: '예술', category: '진로선택', name: '음악 공연 실습', credits: 4 },
  { group: '예술', category: '진로선택', name: '미술 이론', credits: 4 },
  { group: '예술', category: '진로선택', name: '드로잉', credits: 4 },
  { group: '예술', category: '진로선택', name: '미술사', credits: 4 },
  { group: '예술', category: '진로선택', name: '미술 전공 실기', credits: 4 },
  { group: '예술', category: '융합선택', name: '미술 매체 탐구', credits: 4 },
  { group: '예술', category: '진로선택', name: '조형 탐구', credits: 4 },
  { group: '예술', category: '융합선택', name: '미술과 사회', credits: 4 },

  // ==================== 기술·가정 / 정보 ====================
  { group: '기술·가정/정보', category: '일반선택', name: '기술·가정', credits: 4 },
  { group: '기술·가정/정보', category: '일반선택', name: '정보', credits: 4 },
  { group: '기술·가정/정보', category: '진로선택', name: '로봇과 공학세계', credits: 4 },
  { group: '기술·가정/정보', category: '진로선택', name: '생활과학 탐구', credits: 4 },
  { group: '기술·가정/정보', category: '진로선택', name: '인공지능 기초', credits: 4 },
  { group: '기술·가정/정보', category: '진로선택', name: '데이터 과학', credits: 4 },
  { group: '기술·가정/정보', category: '진로선택', name: '정보과학', credits: 4 },
  { group: '기술·가정/정보', category: '융합선택', name: '창의 공학 설계', credits: 4 },
  { group: '기술·가정/정보', category: '융합선택', name: '지식 재산 일반', credits: 4 },
  { group: '기술·가정/정보', category: '융합선택', name: '생애 설계와 자립', credits: 2 },
  { group: '기술·가정/정보', category: '융합선택', name: '아동발달과 부모', credits: 4 },
  { group: '기술·가정/정보', category: '융합선택', name: '소프트웨어와 생활', credits: 4 },

  // ==================== 제2외국어 / 한문 ====================
  { group: '제2외국어/한문', category: '일반선택', name: '독일어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '프랑스어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '스페인어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '중국어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '일본어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '러시아어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '아랍어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '베트남어', credits: 4 },
  { group: '제2외국어/한문', category: '일반선택', name: '한문', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '독일어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '프랑스어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '스페인어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '중국어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '일본어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '러시아어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '아랍어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '베트남어 회화', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 독일어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 프랑스어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 스페인어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 중국어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 일본어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 러시아어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 아랍어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '심화 베트남어', credits: 4 },
  { group: '제2외국어/한문', category: '진로선택', name: '한문 고전 읽기', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '독일어권 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '프랑스어권 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '스페인어권 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '중국 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '일본 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '러시아 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '아랍 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '베트남 문화', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '언어생활과 한자', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '생활과 한문', credits: 4 },
  { group: '제2외국어/한문', category: '융합선택', name: '중국 언어와 역사의 이해 1', credits: 4 },

  // ==================== 교양 ====================
  { group: '교양', category: '일반선택', name: '진로와 직업', credits: 3 },
  { group: '교양', category: '일반선택', name: '생태와 환경', credits: 3 },
  { group: '교양', category: '진로선택', name: '인간과 철학', credits: 3 },
  { group: '교양', category: '진로선택', name: '논리와 사고', credits: 3 },
  { group: '교양', category: '진로선택', name: '인간과 심리', credits: 3 },
  { group: '교양', category: '진로선택', name: '교육의 이해', credits: 3 },
  { group: '교양', category: '진로선택', name: '삶과 종교', credits: 3 },
  { group: '교양', category: '진로선택', name: '보건', credits: 3 },
  { group: '교양', category: '융합선택', name: '인간과 경제활동', credits: 3 },
  { group: '교양', category: '융합선택', name: '논술', credits: 3 },

  // ==================== 주요 전문 교과 (발췌) ====================
  { group: '전문교과', category: '전문공통', name: '성공적인 직업 생활', credits: 4 },
  { group: '전문교과', category: '전문공통', name: '노동 인권과 산업 안전 보건', credits: 4 },
  { group: '전문교과', category: '전문공통', name: '디지털과 직업 생활', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '상업 경제', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '기업과 경영', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '회계 원리', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '프로그래밍', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '자료 구조', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '알고리즘 설계', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '인공지능 일반', credits: 4 },
  { group: '전문교과', category: '전공일반', name: '빅 데이터 분석', credits: 4 }
];

// 빠른 조회를 위한 정규화 인덱스 맵 생성
const CURRICULUM_MAP = new Map();

function buildCurriculumMap() {
  CURRICULUM_DATA.forEach(item => {
    // 띄어쓰기 제거 및 소문자화
    const key = item.name.replace(/\s+/g, '').toLowerCase();
    CURRICULUM_MAP.set(key, item);

    // 로마자 표기 변형도 색인에 등록 (예: Ⅰ -> 1, I)
    const normalizedKey = key
      .replace(/ⅰ|Ⅰ/g, '1')
      .replace(/ⅱ|Ⅱ/g, '2')
      .replace(/ⅲ|Ⅲ/g, '3');
    if (!CURRICULUM_MAP.has(normalizedKey)) {
      CURRICULUM_MAP.set(normalizedKey, item);
    }
  });
}

buildCurriculumMap();

// 전역 내보내기 (브라우저 및 GAS 환경 호환)
if (typeof window !== 'undefined') {
  window.CURRICULUM_DATA = CURRICULUM_DATA;
  window.CURRICULUM_MAP = CURRICULUM_MAP;
}
