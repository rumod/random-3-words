const words = [
  // 동물
  { text: "카피바라", category: "동물" }, { text: "코끼리", category: "동물" },
  { text: "고슴도치", category: "동물" }, { text: "해달", category: "동물" },
  { text: "문어", category: "동물" }, { text: "알파카", category: "동물" },
  { text: "수달", category: "동물" }, { text: "홍학", category: "동물" },
  { text: "청설모", category: "동물" }, { text: "두더지", category: "동물" },
  { text: "고래상어", category: "동물" }, { text: "사막여우", category: "동물" },
  { text: "오리너구리", category: "동물" }, { text: "천산갑", category: "동물" },
  { text: "나무늘보", category: "동물" }, { text: "바다거북", category: "동물" },
  { text: "까마귀", category: "동물" }, { text: "도롱뇽", category: "동물" },
  { text: "반딧불이", category: "동물" }, { text: "복어", category: "동물" },
  { text: "아기 염소", category: "동물" }, { text: "털북숭이 매머드", category: "동물" },

  // 사물
  { text: "우산", category: "사물" }, { text: "주전자", category: "사물" },
  { text: "망원경", category: "사물" }, { text: "오르골", category: "사물" },
  { text: "고무장갑", category: "사물" }, { text: "성냥갑", category: "사물" },
  { text: "낡은 열쇠", category: "사물" }, { text: "종이비행기", category: "사물" },
  { text: "회중시계", category: "사물" }, { text: "빈 액자", category: "사물" },
  { text: "손전등", category: "사물" }, { text: "스노볼", category: "사물" },
  { text: "빨간 실", category: "사물" }, { text: "도미노", category: "사물" },
  { text: "확성기", category: "사물" }, { text: "풍선껌 기계", category: "사물" },
  { text: "나침반", category: "사물" }, { text: "보온병", category: "사물" },
  { text: "장난감 왕관", category: "사물" }, { text: "투명한 자", category: "사물" },
  { text: "태엽", category: "사물" }, { text: "구겨진 지도", category: "사물" },

  // 식물
  { text: "민들레", category: "식물" }, { text: "선인장", category: "식물" },
  { text: "은행잎", category: "식물" }, { text: "수국", category: "식물" },
  { text: "바오바브나무", category: "식물" }, { text: "네잎클로버", category: "식물" },
  { text: "해바라기", category: "식물" }, { text: "이끼", category: "식물" },
  { text: "대나무", category: "식물" }, { text: "라벤더", category: "식물" },
  { text: "식충식물", category: "식물" }, { text: "목화송이", category: "식물" },
  { text: "버드나무", category: "식물" }, { text: "야광버섯", category: "식물" },
  { text: "고사리", category: "식물" }, { text: "덩굴장미", category: "식물" },
  { text: "도토리", category: "식물" }, { text: "파리지옥", category: "식물" },
  { text: "작은 새싹", category: "식물" }, { text: "유리 온실의 토마토", category: "식물" },
  { text: "바람에 날리는 씨앗", category: "식물" }, { text: "이름 모를 들꽃", category: "식물" },

  // 재질
  { text: "유리", category: "재질" }, { text: "벨벳", category: "재질" },
  { text: "고무", category: "재질" }, { text: "대리석", category: "재질" },
  { text: "양철", category: "재질" }, { text: "비눗방울", category: "재질" },
  { text: "골판지", category: "재질" }, { text: "도자기", category: "재질" },
  { text: "솜사탕 같은", category: "재질" }, { text: "크롬", category: "재질" },
  { text: "반투명한 비닐", category: "재질" }, { text: "젖은 모래", category: "재질" },
  { text: "반짝이 가루", category: "재질" }, { text: "녹슨 철", category: "재질" },
  { text: "말랑한 젤", category: "재질" }, { text: "거친 나무", category: "재질" },
  { text: "얼음", category: "재질" }, { text: "레이스", category: "재질" },
  { text: "진주", category: "재질" }, { text: "깃털", category: "재질" },
  { text: "주름진 은박지", category: "재질" }, { text: "깨지기 쉬운 설탕", category: "재질" },

  // 색상
  { text: "레몬색", category: "색상" }, { text: "먹물색", category: "색상" },
  { text: "연보라색", category: "색상" }, { text: "형광 분홍색", category: "색상" },
  { text: "우윳빛", category: "색상" }, { text: "청록색", category: "색상" },
  { text: "벽돌색", category: "색상" }, { text: "새벽의 파란색", category: "색상" },
  { text: "잘 익은 귤색", category: "색상" }, { text: "은회색", category: "색상" },
  { text: "체리색", category: "색상" }, { text: "탁한 민트색", category: "색상" },
  { text: "무지갯빛", category: "색상" }, { text: "초콜릿색", category: "색상" },
  { text: "복숭아빛", category: "색상" }, { text: "짙은 남색", category: "색상" },
  { text: "바랜 금색", category: "색상" }, { text: "라임색", category: "색상" },
  { text: "포도주색", category: "색상" }, { text: "구름 같은 흰색", category: "색상" },
  { text: "그림자색", category: "색상" }, { text: "사탕 포장지 같은 색", category: "색상" },

  // 장소
  { text: "옥상", category: "장소" }, { text: "세탁소", category: "장소" },
  { text: "심해", category: "장소" }, { text: "폐장한 놀이공원", category: "장소" },
  { text: "동네 문방구", category: "장소" }, { text: "비밀 다락방", category: "장소" },
  { text: "우주 정거장", category: "장소" }, { text: "해 질 녘 버스 정류장", category: "장소" },
  { text: "해저 우체국", category: "장소" }, { text: "끝없는 계단", category: "장소" },
  { text: "새벽 시장", category: "장소" }, { text: "구름 위 정원", category: "장소" },
  { text: "사막의 자판기", category: "장소" }, { text: "미로 같은 도서관", category: "장소" },
  { text: "작은 섬", category: "장소" }, { text: "달의 뒷면", category: "장소" },
  { text: "눈 덮인 온천", category: "장소" }, { text: "유령 기차역", category: "장소" },
  { text: "수족관 터널", category: "장소" }, { text: "24시간 편의점", category: "장소" },
  { text: "아무도 없는 운동장", category: "장소" }, { text: "지도에 없는 마을", category: "장소" },

  // 감정과 분위기
  { text: "귀여운", category: "분위기" }, { text: "불길한", category: "분위기" },
  { text: "엉뚱한", category: "분위기" }, { text: "쓸쓸한", category: "분위기" },
  { text: "두근거리는", category: "감정" }, { text: "심술 난", category: "감정" },
  { text: "졸린", category: "상태" }, { text: "뻔뻔한", category: "분위기" },
  { text: "낯선", category: "분위기" }, { text: "다정한", category: "분위기" },
  { text: "수상한", category: "분위기" }, { text: "용감한 척하는", category: "감정" },
  { text: "괜히 신나는", category: "감정" }, { text: "조금 억울한", category: "감정" },
  { text: "이유 없이 평화로운", category: "분위기" }, { text: "몹시 진지한", category: "분위기" },
  { text: "비밀스러운", category: "분위기" }, { text: "어설프게 우아한", category: "분위기" },
  { text: "너무 조용한", category: "분위기" }, { text: "기묘하게 익숙한", category: "분위기" },
  { text: "왠지 자랑스러운", category: "감정" }, { text: "세상에서 제일 느긋한", category: "분위기" },

  // 동작
  { text: "기다리는", category: "동작" }, { text: "녹아내리는", category: "동작" },
  { text: "빙글빙글 도는", category: "동작" }, { text: "몰래 따라오는", category: "동작" },
  { text: "졸면서 걷는", category: "동작" }, { text: "하늘로 떠오르는", category: "동작" },
  { text: "노래하는", category: "동작" }, { text: "거꾸로 자라는", category: "동작" },
  { text: "숨바꼭질하는", category: "동작" }, { text: "계속 커지는", category: "동작" },
  { text: "빛을 모으는", category: "동작" }, { text: "편지를 삼키는", category: "동작" },
  { text: "제자리에서 헤엄치는", category: "동작" }, { text: "그림자를 밟는", category: "동작" },
  { text: "박수 치는", category: "동작" }, { text: "천천히 사라지는", category: "동작" },
  { text: "모서리에 숨는", category: "동작" }, { text: "꿈속을 청소하는", category: "동작" },
  { text: "혼자서 축하하는", category: "동작" }, { text: "별을 세는", category: "동작" },
  { text: "꼬리를 흔드는", category: "동작" }, { text: "아무 말 없이 춤추는", category: "동작" },

  // 상태
  { text: "축축한", category: "상태" }, { text: "뒤집힌", category: "상태" },
  { text: "금이 간", category: "상태" }, { text: "부풀어 오른", category: "상태" },
  { text: "반쯤 투명한", category: "상태" }, { text: "전기가 나간", category: "상태" },
  { text: "길을 잃은", category: "상태" }, { text: "잠겨 있는", category: "상태" },
  { text: "너무 오래된", category: "상태" }, { text: "아직 따뜻한", category: "상태" },
  { text: "조립되지 않은", category: "상태" }, { text: "한쪽만 빛나는", category: "상태" },
  { text: "정전기가 가득한", category: "상태" }, { text: "바람 빠진", category: "상태" },
  { text: "얼어붙은", category: "상태" }, { text: "리본으로 묶인", category: "상태" },
  { text: "주인을 잃은", category: "상태" }, { text: "시간이 멈춘", category: "상태" },
  { text: "짝이 맞지 않는", category: "상태" }, { text: "조금 모자란", category: "상태" },
  { text: "비밀을 품은", category: "상태" }, { text: "아무도 기억하지 못하는", category: "상태" },

  // 날씨와 자연
  { text: "소나기", category: "날씨" }, { text: "안개", category: "날씨" },
  { text: "태풍 전야", category: "날씨" }, { text: "첫눈", category: "날씨" },
  { text: "번개", category: "날씨" }, { text: "무지개", category: "자연" },
  { text: "유성우", category: "자연" }, { text: "파도", category: "자연" },
  { text: "회오리바람", category: "날씨" }, { text: "햇무리", category: "자연" },
  { text: "한여름의 서리", category: "날씨" }, { text: "꽃가루 폭풍", category: "날씨" },
  { text: "보랏빛 노을", category: "자연" }, { text: "얼음비", category: "날씨" },
  { text: "바닷바람", category: "날씨" }, { text: "달빛", category: "자연" },
  { text: "구름 그림자", category: "자연" }, { text: "새벽 이슬", category: "자연" },
  { text: "모래 폭풍", category: "날씨" }, { text: "밤의 무지개", category: "자연" },
  { text: "갑자기 내리는 눈", category: "날씨" }, { text: "바람 없는 오후", category: "날씨" },

  // 음식
  { text: "젤리", category: "음식" }, { text: "붕어빵", category: "음식" },
  { text: "레몬 사탕", category: "음식" }, { text: "김이 나는 만두", category: "음식" },
  { text: "체리 파이", category: "음식" }, { text: "별 모양 쿠키", category: "음식" },
  { text: "수박 한 조각", category: "음식" }, { text: "식은 감자튀김", category: "음식" },
  { text: "무지개 떡", category: "음식" }, { text: "괴물 샌드위치", category: "음식" },
  { text: "민트초코", category: "음식" }, { text: "구름 맛 솜사탕", category: "음식" },
  { text: "문어 소시지", category: "음식" }, { text: "달걀 프라이", category: "음식" },
  { text: "딸기 우유", category: "음식" }, { text: "네모난 도넛", category: "음식" },
  { text: "우주 김밥", category: "음식" }, { text: "고추냉이 아이스크림", category: "음식" },
  { text: "자정의 라면", category: "음식" }, { text: "대왕 푸딩", category: "음식" },
  { text: "녹지 않는 빙수", category: "음식" }, { text: "마지막 한 알의 팝콘", category: "음식" },

  // 직업과 인물
  { text: "우체부", category: "직업" }, { text: "마술사", category: "직업" },
  { text: "심해 잠수부", category: "직업" }, { text: "시계 수리공", category: "직업" },
  { text: "유령 탐정", category: "직업" }, { text: "구름 목수", category: "직업" },
  { text: "야간 경비원", category: "직업" }, { text: "식물학자", category: "직업" },
  { text: "서커스 단장", category: "직업" }, { text: "로봇 요리사", category: "직업" },
  { text: "달 토끼 배달원", category: "직업" }, { text: "꿈 수집가", category: "직업" },
  { text: "견습 마녀", category: "인물" }, { text: "은퇴한 용사", category: "인물" },
  { text: "잠옷 입은 왕", category: "인물" }, { text: "별을 닦는 청소부", category: "직업" },
  { text: "거짓말 못 하는 해적", category: "인물" }, { text: "미래에서 온 관광객", category: "인물" },
  { text: "수줍은 발명가", category: "직업" }, { text: "동물원 사진사", category: "직업" },
  { text: "기억을 파는 상인", category: "직업" }, { text: "세상 끝의 안내원", category: "직업" },

  // 시대와 이야기 요소
  { text: "백악기의", category: "시대" }, { text: "먼 미래의", category: "시대" },
  { text: "한밤중의", category: "시간" }, { text: "세기말의", category: "시대" },
  { text: "아주 먼 옛날의", category: "시대" }, { text: "5분 뒤의", category: "시간" },
  { text: "마지막 여름의", category: "시간" }, { text: "월요일 아침의", category: "시간" },
  { text: "시간 여행에서 돌아온", category: "이야기" }, { text: "전설에만 등장하는", category: "이야기" },
  { text: "금지된 주문으로 만든", category: "이야기" }, { text: "결말을 잊어버린", category: "이야기" },
  { text: "첫 장면에 나타난", category: "이야기" }, { text: "100년 뒤 발견된", category: "이야기" },
  { text: "평행 우주에서 온", category: "이야기" }, { text: "어제 꿈에서 본", category: "이야기" },
  { text: "자정이 되면 깨어나는", category: "이야기" }, { text: "다음 계절을 기다리는", category: "시간" },
  { text: "공룡 시대에 떨어진", category: "시대" }, { text: "새해 첫날의", category: "시간" },
  { text: "아직 오지 않은 봄의", category: "시간" }, { text: "역사책에서 탈출한", category: "이야기" },

  // 소리와 감각
  { text: "딸랑딸랑", category: "소리" }, { text: "사각사각", category: "소리" },
  { text: "톡 쏘는", category: "감각" }, { text: "보송보송한", category: "감각" },
  { text: "끈적끈적한", category: "감각" }, { text: "반짝반짝", category: "감각" },
  { text: "우당탕", category: "소리" }, { text: "귓가에 맴도는", category: "소리" },
  { text: "레몬 향이 나는", category: "감각" }, { text: "발끝이 간지러운", category: "감각" },
  { text: "종소리 같은", category: "소리" }, { text: "물속에서 들리는", category: "소리" },
  { text: "아삭아삭", category: "소리" }, { text: "폭신폭신한", category: "감각" },
  { text: "차갑고 매끄러운", category: "감각" }, { text: "햇볕 냄새가 나는", category: "감각" },
  { text: "아주 작은 속삭임", category: "소리" }, { text: "쿵 하고 떨어지는", category: "소리" },
  { text: "탄산처럼 톡톡 튀는", category: "감각" }, { text: "구름을 만지는 느낌", category: "감각" },
  { text: "멀리서 들리는 휘파람", category: "소리" }, { text: "새 책 냄새가 나는", category: "감각" },

  // 환상과 기술
  { text: "주머니 우주", category: "환상" }, { text: "고장 난 로봇", category: "기술" },
  { text: "투명 망토", category: "환상" }, { text: "말하는 엘리베이터", category: "환상" },
  { text: "홀로그램 유령", category: "기술" }, { text: "마법의 자판기", category: "환상" },
  { text: "감정을 읽는 안테나", category: "기술" }, { text: "소원을 기록하는 카메라", category: "환상" },
  { text: "접이식 달", category: "환상" }, { text: "박스로 만든 우주선", category: "기술" },
  { text: "기억 저장 장치", category: "기술" }, { text: "미니어처 블랙홀", category: "환상" },
  { text: "꿈꾸는 인공지능", category: "기술" }, { text: "순간이동 문", category: "기술" },
  { text: "날씨 리모컨", category: "기술" }, { text: "용의 알", category: "환상" },
  { text: "시간을 먹는 시계", category: "환상" }, { text: "자동으로 뜨개질하는 바늘", category: "기술" },
  { text: "비밀 암호", category: "기술" }, { text: "중력이 없는 방", category: "환상" },
  { text: "미래의 오래된 컴퓨터", category: "기술" }, { text: "작동법을 모르는 버튼", category: "기술" }
];

const wordElements = document.querySelectorAll(".word span");
const drawButton = document.querySelector(".draw-button");

function pickRandomWord() {
  return words[Math.floor(Math.random() * words.length)].text;
}

function drawThreeWords() {
  wordElements.forEach((element) => {
    const card = element.closest(".word");
    card.classList.remove("is-changing");
    element.textContent = pickRandomWord();

    // 같은 애니메이션을 연속 클릭에서도 다시 시작합니다.
    void card.offsetWidth;
    card.classList.add("is-changing");
  });
}

if (wordElements.length === 3 && drawButton) {
  drawButton.addEventListener("click", drawThreeWords);
  drawThreeWords();
}
