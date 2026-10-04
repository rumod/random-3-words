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
  { text: "털북숭이", category: "상태" }, { text: "매머드", category: "동물" },

  // 사물
  { text: "우산", category: "사물" }, { text: "주전자", category: "사물" },
  { text: "오르골", category: "사물" }, { text: "성냥갑", category: "사물" },
  { text: "낡은", category: "상태" }, { text: "스노볼", category: "사물" },
  { text: "장난감", category: "사물" },

  // 식물
  { text: "민들레", category: "식물" }, { text: "선인장", category: "식물" },
  { text: "은행잎", category: "식물" }, { text: "수국", category: "식물" },
  { text: "바오바브나무", category: "식물" }, { text: "네잎클로버", category: "식물" },
  { text: "해바라기", category: "식물" }, { text: "이끼", category: "식물" },
  { text: "대나무", category: "식물" }, { text: "라벤더", category: "식물" },
  { text: "식충식물", category: "식물" }, { text: "목화송이", category: "식물" },
  { text: "버드나무", category: "식물" }, { text: "야광", category: "상태" },
  { text: "고사리", category: "식물" }, { text: "덩굴장미", category: "식물" },
  { text: "도토리", category: "식물" }, { text: "파리지옥", category: "식물" },
  { text: "작은", category: "상태" }, { text: "새싹", category: "식물" },

  // 재질
  { text: "유리", category: "재질" }, { text: "벨벳", category: "재질" },
  { text: "대리석", category: "재질" }, { text: "비눗방울", category: "재질" },
  { text: "도자기", category: "재질" }, { text: "솜사탕", category: "음식" },
  { text: "크롬", category: "재질" }, { text: "반투명한", category: "상태" },
  { text: "비닐", category: "재질" }, { text: "젖은", category: "상태" },
  { text: "모래", category: "재질" }, { text: "반짝이", category: "재질" },
  { text: "가루", category: "재질" }, { text: "녹슨 철", category: "재질" },
  { text: "말랑한", category: "감각" }, { text: "젤", category: "재질" },
  { text: "얼음", category: "재질" }, { text: "레이스", category: "재질" },
  { text: "진주", category: "재질" }, { text: "은박지", category: "재질" },

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
  { text: "심해", category: "장소" }, { text: "작은 섬", category: "장소" },
  { text: "수족관", category: "장소" },

  // 감정과 분위기
  { text: "귀여운", category: "분위기" }, { text: "불길한", category: "분위기" },
  { text: "엉뚱한", category: "분위기" }, { text: "쓸쓸한", category: "분위기" },
  { text: "두근거리는", category: "감정" }, { text: "심술 난", category: "감정" },
  { text: "졸린", category: "상태" }, { text: "뻔뻔한", category: "분위기" },
  { text: "낯선", category: "분위기" }, { text: "다정한", category: "분위기" },
  { text: "수상한", category: "분위기" }, { text: "용감한 척하는", category: "감정" },
  { text: "신나는", category: "감정" }, { text: "평화로운", category: "분위기" },
  { text: "진지한", category: "분위기" }, { text: "비밀스러운", category: "분위기" },
  { text: "우아한", category: "분위기" }, { text: "조용한", category: "분위기" },
  { text: "기묘하게 익숙한", category: "분위기" }, { text: "자랑스러운", category: "감정" },
  { text: "느긋한", category: "분위기" },

  // 동작
  { text: "기다리는", category: "동작" }, { text: "녹아내리는", category: "동작" },
  { text: "빙글빙글 도는", category: "동작" }, { text: "몰래 따라오는", category: "동작" },
  { text: "하늘로 떠오르는", category: "동작" },
  { text: "노래하는", category: "동작" }, { text: "거꾸로 자라는", category: "동작" },
  { text: "숨바꼭질하는", category: "동작" }, { text: "계속 커지는", category: "동작" },
  { text: "빛을 모으는", category: "동작" }, { text: "헤엄치는", category: "동작" },
  { text: "천천히 사라지는", category: "동작" },
  { text: "모서리에 숨는", category: "동작" },
  { text: "꼬리를 흔드는", category: "동작" }, { text: "아무 말 없이 춤추는", category: "동작" },

  // 상태
  { text: "축축한", category: "상태" }, { text: "뒤집힌", category: "상태" },
  { text: "금이 간", category: "상태" }, { text: "부풀어 오른", category: "상태" },
  { text: "반쯤 투명한", category: "상태" }, { text: "잠겨 있는", category: "상태" },
  { text: "아직 따뜻한", category: "상태" }, { text: "한쪽만 빛나는", category: "상태" },
  { text: "얼어붙은", category: "상태" },
  { text: "짝이 맞지 않는", category: "상태" }, { text: "조금 모자란", category: "상태" },

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
  { text: "갑자기 내리는 눈", category: "날씨" },

  // 음식
  { text: "젤리", category: "음식" }, { text: "붕어빵", category: "음식" },
  { text: "레몬 사탕", category: "음식" }, { text: "체리 파이", category: "음식" },
  { text: "민트초코", category: "음식" },
  { text: "문어 소시지", category: "음식" }, { text: "달걀 프라이", category: "음식" },
  { text: "딸기 우유", category: "음식" },

  // 직업과 인물
  { text: "우체부", category: "직업" }, { text: "마술사", category: "직업" },
  { text: "식물학자", category: "직업" },

  // 시대와 이야기 요소
  { text: "백악기의", category: "시대" }, { text: "먼 미래의", category: "시대" },
  { text: "세기말의", category: "시대" }, { text: "아주 먼 옛날의", category: "시대" },

  // 소리와 감각
  { text: "톡 쏘는", category: "감각" }, { text: "보송보송한", category: "감각" },
  { text: "끈적끈적한", category: "감각" }, { text: "반짝반짝", category: "감각" },
  { text: "레몬 향이 나는", category: "감각" }, { text: "발끝이 간지러운", category: "감각" },
  { text: "폭신폭신한", category: "감각" },
  { text: "차갑고 매끄러운", category: "감각" }, { text: "햇볕 냄새가 나는", category: "감각" },
  { text: "탄산처럼 톡톡 튀는", category: "감각" }, { text: "구름을 만지는 느낌", category: "감각" },
  { text: "새 책 냄새가 나는", category: "감각" },

  // 존재
  { text: "고양이", category: "존재" }, { text: "새", category: "존재" },
  { text: "금붕어", category: "존재" }, { text: "토끼", category: "존재" },
  { text: "생쥐", category: "존재" }, { text: "다람쥐", category: "존재" },
  { text: "여우", category: "존재" }, { text: "강아지", category: "존재" },
  { text: "오리", category: "존재" }, { text: "병아리", category: "존재" },
  { text: "거위", category: "존재" }, { text: "개구리", category: "존재" },
  { text: "달팽이", category: "존재" }, { text: "나비", category: "존재" },
  { text: "나방", category: "존재" }, { text: "벌", category: "존재" },
  { text: "무당벌레", category: "존재" }, { text: "물고기", category: "존재" },
  { text: "해파리", category: "존재" }, { text: "작은 용", category: "존재" },
  { text: "천사", category: "존재" }, { text: "아기 천사", category: "존재" },
  { text: "요정", category: "존재" }, { text: "난쟁이", category: "존재" },
  { text: "유령", category: "존재" }, { text: "작은 악마", category: "존재" },
  { text: "별의 정령", category: "존재" }, { text: "꽃의 정령", category: "존재" },
  { text: "버섯 요정", category: "존재" }, { text: "이름 모를 작은 생물", category: "존재" },

  // 과일·식물·자연
  { text: "무화과", category: "과일·식물·자연" }, { text: "체리", category: "과일·식물·자연" },
  { text: "수박", category: "과일·식물·자연" }, { text: "딸기", category: "과일·식물·자연" },
  { text: "사과", category: "과일·식물·자연" }, { text: "배", category: "과일·식물·자연" },
  { text: "복숭아", category: "과일·식물·자연" }, { text: "포도", category: "과일·식물·자연" },
  { text: "레몬", category: "과일·식물·자연" }, { text: "오렌지", category: "과일·식물·자연" },
  { text: "석류", category: "과일·식물·자연" }, { text: "블루베리", category: "과일·식물·자연" },
  { text: "자두", category: "과일·식물·자연" }, { text: "멜론", category: "과일·식물·자연" },
  { text: "꽃", category: "과일·식물·자연" }, { text: "장미", category: "과일·식물·자연" },
  { text: "튤립", category: "과일·식물·자연" }, { text: "데이지", category: "과일·식물·자연" },
  { text: "백합", category: "과일·식물·자연" }, { text: "제비꽃", category: "과일·식물·자연" },
  { text: "들꽃", category: "과일·식물·자연" }, { text: "꽃다발", category: "과일·식물·자연" },
  { text: "화분", category: "과일·식물·자연" }, { text: "덩굴", category: "과일·식물·자연" },
  { text: "잎사귀", category: "과일·식물·자연" }, { text: "풀", category: "과일·식물·자연" },
  { text: "버섯", category: "과일·식물·자연" }, { text: "나무", category: "과일·식물·자연" },
  { text: "씨앗", category: "과일·식물·자연" }, { text: "열매", category: "과일·식물·자연" },
  { text: "솔방울", category: "과일·식물·자연" }, { text: "조개", category: "과일·식물·자연" },
  { text: "돌멩이", category: "과일·식물·자연" }, { text: "구름", category: "과일·식물·자연" },
  { text: "비", category: "과일·식물·자연" }, { text: "눈", category: "과일·식물·자연" },
  { text: "달", category: "과일·식물·자연" }, { text: "별", category: "과일·식물·자연" },
  { text: "햇빛", category: "과일·식물·자연" },

  // 음식·디저트·음료
  { text: "케이크", category: "음식·디저트·음료" }, { text: "조각케이크", category: "음식·디저트·음료" },
  { text: "컵케이크", category: "음식·디저트·음료" }, { text: "타르트", category: "음식·디저트·음료" },
  { text: "푸딩", category: "음식·디저트·음료" }, { text: "쿠키", category: "음식·디저트·음료" },
  { text: "비스킷", category: "음식·디저트·음료" }, { text: "도넛", category: "음식·디저트·음료" },
  { text: "마카롱", category: "음식·디저트·음료" }, { text: "사탕", category: "음식·디저트·음료" },
  { text: "초콜릿", category: "음식·디저트·음료" }, { text: "아이스크림", category: "음식·디저트·음료" },
  { text: "파르페", category: "음식·디저트·음료" }, { text: "크림", category: "음식·디저트·음료" },
  { text: "식빵", category: "음식·디저트·음료" }, { text: "크루아상", category: "음식·디저트·음료" },
  { text: "샌드위치", category: "음식·디저트·음료" }, { text: "잼", category: "음식·디저트·음료" },
  { text: "꿀", category: "음식·디저트·음료" }, { text: "우유", category: "음식·디저트·음료" },
  { text: "커피", category: "음식·디저트·음료" }, { text: "라테", category: "음식·디저트·음료" },
  { text: "차", category: "음식·디저트·음료" }, { text: "홍차", category: "음식·디저트·음료" },
  { text: "크림소다", category: "음식·디저트·음료" }, { text: "레모네이드", category: "음식·디저트·음료" },
  { text: "주스", category: "음식·디저트·음료" }, { text: "찻주전자", category: "음식·디저트·음료" },

  // 사물·소품
  { text: "어항", category: "사물·소품" }, { text: "유리병", category: "사물·소품" },
  { text: "유리잔", category: "사물·소품" }, { text: "찻잔", category: "사물·소품" },
  { text: "접시", category: "사물·소품" }, { text: "포크", category: "사물·소품" },
  { text: "숟가락", category: "사물·소품" }, { text: "촛대", category: "사물·소품" },
  { text: "초", category: "사물·소품" }, { text: "성냥", category: "사물·소품" },
  { text: "리본", category: "사물·소품" }, { text: "천", category: "사물·소품" },
  { text: "손수건", category: "사물·소품" }, { text: "바구니", category: "사물·소품" },
  { text: "작은 상자", category: "사물·소품" }, { text: "선물상자", category: "사물·소품" },
  { text: "편지", category: "사물·소품" }, { text: "봉투", category: "사물·소품" },
  { text: "우표", category: "사물·소품" }, { text: "책", category: "사물·소품" },
  { text: "작은 의자", category: "사물·소품" }, { text: "테이블", category: "사물·소품" },
  { text: "램프", category: "사물·소품" }, { text: "거울", category: "사물·소품" },
  { text: "액자", category: "사물·소품" }, { text: "열쇠", category: "사물·소품" },
  { text: "자물쇠", category: "사물·소품" }, { text: "종", category: "사물·소품" },
  { text: "모자", category: "사물·소품" }, { text: "왕관", category: "사물·소품" },
  { text: "목걸이", category: "사물·소품" }, { text: "구슬", category: "사물·소품" },
  { text: "단추", category: "사물·소품" }, { text: "실타래", category: "사물·소품" },
  { text: "가위", category: "사물·소품" }, { text: "화병", category: "사물·소품" },
  { text: "물뿌리개", category: "사물·소품" }, { text: "빗자루", category: "사물·소품" },
  { text: "사다리", category: "사물·소품" }, { text: "작은 문", category: "사물·소품" },
  { text: "창문", category: "사물·소품" }, { text: "쿠션", category: "사물·소품" },
  { text: "베개", category: "사물·소품" }, { text: "이불", category: "사물·소품" },
  { text: "시계", category: "사물·소품" },

  // 장소·공간
  { text: "정원", category: "장소·공간" }, { text: "꽃밭", category: "장소·공간" },
  { text: "숲", category: "장소·공간" }, { text: "연못", category: "장소·공간" },
  { text: "작은 카페", category: "장소·공간" }, { text: "찻자리", category: "장소·공간" },
  { text: "부엌", category: "장소·공간" }, { text: "창가", category: "장소·공간" },
  { text: "다락방", category: "장소·공간" }, { text: "침대", category: "장소·공간" },
  { text: "책상", category: "장소·공간" }, { text: "온실", category: "장소·공간" },
  { text: "작은 집", category: "장소·공간" }, { text: "버섯집", category: "장소·공간" },
  { text: "나무 구멍", category: "장소·공간" }, { text: "구름 위", category: "장소·공간" },
  { text: "별이 뜬 밤", category: "장소·공간" }, { text: "비 오는 거리", category: "장소·공간" },
  { text: "피크닉 자리", category: "장소·공간" }, { text: "과일나무 아래", category: "장소·공간" },

  // 창작 요소
  { text: "빈티지", category: "창작 요소" }, { text: "악마", category: "창작 요소" },
  { text: "악동", category: "창작 요소" }, { text: "요괴", category: "창작 요소" },
  { text: "빛", category: "창작 요소" }, { text: "투명", category: "창작 요소" },
  { text: "흐림", category: "창작 요소" }, { text: "유기적", category: "창작 요소" },
  { text: "오래됨", category: "창작 요소" }, { text: "장식적", category: "창작 요소" },
  { text: "말랑함", category: "창작 요소" }, { text: "금속성", category: "창작 요소" },
  { text: "자연물", category: "창작 요소" }, { text: "인공물", category: "창작 요소" },
  { text: "조랑말", category: "창작 요소" }, { text: "아기", category: "창작 요소" },
  { text: "도깨비", category: "창작 요소" }, { text: "불꽃", category: "창작 요소" },
  { text: "폭죽", category: "창작 요소" }, { text: "도마뱀", category: "창작 요소" },
  { text: "용", category: "창작 요소" },

  // 추가 후보
  { text: "올빼미", category: "추가 후보" }, { text: "박쥐", category: "추가 후보" },
  { text: "사슴", category: "추가 후보" }, { text: "양", category: "추가 후보" },
  { text: "염소", category: "추가 후보" }, { text: "거북이", category: "추가 후보" },
  { text: "애벌레", category: "추가 후보" }, { text: "잠자리", category: "추가 후보" },
  { text: "소라게", category: "추가 후보" }, { text: "불가사리", category: "추가 후보" },
  { text: "인어", category: "추가 후보" }, { text: "마녀", category: "추가 후보" },
  { text: "괴물", category: "추가 후보" }, { text: "그림자", category: "추가 후보" },
  { text: "눈사람", category: "추가 후보" }, { text: "허수아비", category: "추가 후보" },
  { text: "물방울", category: "추가 후보" }, { text: "물결", category: "추가 후보" },
  { text: "거품", category: "추가 후보" }, { text: "서리", category: "추가 후보" },
  { text: "이슬", category: "추가 후보" }, { text: "연기", category: "추가 후보" },
  { text: "바람", category: "추가 후보" }, { text: "혜성", category: "추가 후보" },
  { text: "유성", category: "추가 후보" }, { text: "노을", category: "추가 후보" },
  { text: "방울", category: "추가 후보" }, { text: "주사위", category: "추가 후보" },
  { text: "카드", category: "추가 후보" }, { text: "가면", category: "추가 후보" },
  { text: "안경", category: "추가 후보" }, { text: "돋보기", category: "추가 후보" },
  { text: "털실", category: "추가 후보" }, { text: "작은 가방", category: "추가 후보" },
  { text: "장화", category: "추가 후보" }, { text: "알", category: "추가 후보" },
  { text: "뼈", category: "추가 후보" }, { text: "이빨", category: "추가 후보" },
  { text: "꼬리", category: "추가 후보" }, { text: "날개", category: "추가 후보" },
  { text: "뿔", category: "추가 후보" }, { text: "껍질", category: "추가 후보" },
  { text: "발자국", category: "추가 후보" }, { text: "구멍", category: "추가 후보" },
  { text: "미로", category: "추가 후보" }, { text: "가짜 꽃", category: "추가 후보" },
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
