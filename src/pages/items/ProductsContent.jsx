import TabmenuSub from "../../components/TabmenuSub";
import CardProduct from "../../components/CardProduct";

// items
// S-Vision => 제품검사 제품
const svisionInspection = [
  {
    id: 1,
    name: "MLCC 외관 선별 검사",
    content: "MLCC 도포 불량 여부 검사",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_mlcc.png",
    imageAlt: "MLCC 외관 선별 검사",
  },
  {
    id: 2,
    name: "TFT기판 측면 배선 검사",
    content: "마이크로LED의 양불 판정을 위한 배선 검사",
    href: "#",
    price: "가격 협의",
    imageSrc: "./img/product_TFT.png",
    imageAlt: "TFT기판 측면 배선 검사",
  },
  {
    id: 3,
    name: "적층 레이어 검사",
    content: "MLCC 적층칩들의 레이어 양불 판정",
    href: "#",
    price: "가격 협의",
    imageSrc: "./img/product_layer.png",
    imageAlt: "적층 레이어 검사",
  },

  // More products...
];

// S-Vision => 비전얼라인 제품
const svisionAlign = [
  // {
  //   id: 1,
  //   name: "OLED 글라스 & C-Panel 부착 비전얼라인",
  //   content: "OLED 글라스와 C-판넬의 특징점을 인식하여 로봇의 이동 거리/각도 계산",
  //   href: "#",
  //   price: "가격 협의",
  //   imageSrc: "/img/product_cpanel2.png",
  //   imageAlt: "OLED 글라스 & C-Panel 부착 비전얼라인",
  // },
  {
    id: 1,
    name: "저저항 검사기 비전얼라인",
    content:
      "OLED 글라스와 C-판넬의 특징점을 인식하여 로봇의 이동 거리/각도 계산",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_low_resistance_alignvision.png",
    imageAlt: "저저항 검사기 비전얼라인",
  },
  // More products...
];

// S-Vision => OCR 제품
const svisionOCR = [
  {
    id: 1,
    name: "멀티 바코드 인식",
    content: "다수의 바코드 인식",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_barcode.png",
    imageAlt: "멀티 바코드 인식 SW",
  },
  {
    id: 2,
    name: "문서 분류",
    content: "문서 내 필요 정보 검출 및 분류",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_document_classification.png",
    imageAlt: "멀문서 분류",
  },
  {
    id: 3,
    name: "손글씨 검출",
    content: "손으로 작성된 손글씨 검출 및 분류",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_handwriting_detection.png",
    imageAlt: "손글씨 검출",
  },

  // More products...
];

// S-Vision => OCR 제품
const svisionCargo = [
  {
    id: 1,
    name: "박스 검출",
    content: "흔들린 이미지의 가려진 화물까지 검출",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_boxCargo.png",
    imageAlt: "비정형, 다품종 화물 검출 SW",
  },
  {
    id: 2,
    name: "재활용 쓰레기 검출",
    content: "비정형, 다품종, 무작위 적재 상태의 화물 검출",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_recyclable_waste.png",
    imageAlt: "재활용 쓰레기 검출",
  },

  // More products...
];

// S-Robotics => 로봇팔 제품
const sroboticsManipulator = [
  {
    id: 1,
    name: "파프리카 수확 로봇",
    content: "파프리카 형상 검출 및 수확",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_paprika.png",
    imageAlt: "파프리카 수확 로봇.",
  },
  {
    id: 2,
    name: "S-Picker",
    content: "진공 흡착식 그리퍼를 이용한 픽앤플레이스",
    href: "#",
    price: "가격 협의",
    imageSrc: "./img/product_boxCargoRobot.png",
    imageAlt: "화물 픽업 로봇.",
  },
  // More products...
];

// S-Robotics => 직교로봇 제품
const sroboticsCartesian = [
  {
    id: 1,
    name: "자동차 스마트키 검사 로봇",
    content: "자동차 스마트키의 버튼을 눌러 감도 검사",
    href: "#",
    price: "가격 협의",
    imageSrc: "./img/product_carkey_inspection_robot.jpg",
    imageAlt: "자동차 스마트키 검사 로봇",
  },
  // More products...
];

// S-Robotics => 햅틱 제품
const sroboticsHaptic = [
  {
    id: 1,
    name: "악수 로봇",
    content: "햅틱 기술을 이용하여 사람과 악수",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_shakehand_robot.jpg",
    imageAlt: "악수 로봇",
  },
  // More products...
];

// monitoring => 자동화공정 모니터링 제품
const monitoringAutomatedProcess = [
  {
    id: 1,
    name: "2차전지 저저항 공정 모니터링",
    content: "현재 진행중인 공정 표시 및 모니터링",
    href: "#",
    price: "가격 협의",
    imageSrc: "./img/product_low_resistance_monitoring.png",
    imageAlt: "자동차 스마트키 검사 로봇",
  },
  // More products...
];

// monitoring => 센서데이터 모니터링 제품
const monitoringSensorData = [
  {
    id: 1,
    name: "소리 dB 모니터링",
    content: "데시벨 센서 데이터 통신 및 모니터링",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_sounddB.png",
    imageAlt: "소리 dB 모니터링",
  },
  {
    id: 2,
    name: "수질 데이터 모니터링",
    content: "데시벨 센서 데이터 통신 및 모니터링",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_water.png",
    imageAlt: "소리 dB 모니터링",
  },
  {
    id: 3,
    name: "자율주행 차량 센서 모니터링",
    content: "센서와 HMI, HMI와 웹을 연동 및 모니터링",
    href: "#",
    price: "가격 협의",
    imageSrc: "/img/product_tractor.png",
    imageAlt: "소리 dB 모니터링",
  },
  // More products...
];

// S-Vision tabmenu 콘텐츠
const Svision = [
  {
    id: "(1)",
    tabTitle: "제품검사",
    content: <CardProduct items={svisionInspection} />,
  },
  {
    id: "(2)",
    tabTitle: "비전얼라인",
    content: <CardProduct items={svisionAlign} />,
  },
  {
    id: "(3)",
    tabTitle: "OCR",
    content: <CardProduct items={svisionOCR} />,
  },
  {
    id: "(4)",
    tabTitle: "화물 검출",
    content: <CardProduct items={svisionCargo} />,
  },
];

// S-Roboitcs tabmenu 콘텐츠
const Srobotics = [
  {
    id: "(1)",
    tabTitle: "다관절 로봇",
    content: <CardProduct items={sroboticsManipulator} />,
  },
  {
    id: "(2)",
    tabTitle: "직교 로봇",
    content: <CardProduct items={sroboticsCartesian} />,
  },
  {
    id: "(3)",
    tabTitle: "햅틱",
    content: <CardProduct items={sroboticsHaptic} />,
  },
];

// Monitoring tabmenu 콘텐츠
const Monitoring = [
  {
    id: "(1)",
    tabTitle: "자동화공정 모니터링",
    content: <CardProduct items={monitoringAutomatedProcess} />,
  },
  {
    id: "(2)",
    tabTitle: "센서데이터 모니터링",
    content: <CardProduct items={monitoringSensorData} />,
  },
];

// Products tabmenu 콘텐츠
const ProductsContent = [
  {
    id: 1,
    tabTitle: "S-Vision",
    content: (
      <div className="w-full h-auto">
        <h1 className="text-base md:text-xl font-bold text-zinc-800 mb-3 mx-4">
          객체검출 솔루션
        </h1>
        <div className="text-xs md:text-sm mx-4 h-20">
          <p>
            Area Camera, Line Camera, CCTV 등을 이용하여 객체를 검출하고
            분석하는 솔루션
          </p>
          <p>Rule-based, Ai-based 퓨전 알고리즘으로 보다 유연한 검사</p>
        </div>

        <TabmenuSub tabs={Svision} />
      </div>
    ),
  },
  {
    id: 2,
    tabTitle: "S-Robotics",
    content: (
      <div className="w-full h-auto">
        <h1 className="text-base md:text-xl font-bold text-zinc-800 mb-3 mx-4">
          다관절 로봇, 직교 로봇 제어 솔루션
        </h1>
        <div className="text-xs md:text-sm mx-4 h-20">
          <p>로보틱스 전공의 석박사급 엔지니어가 제공하는 제어 솔루션</p>
        </div>
        <TabmenuSub tabs={Srobotics} />
      </div>
    ),
  },
  {
    id: 3,
    tabTitle: "Monitoring",
    content: (
      <div className="w-full h-auto">
        <h1 className="text-base md:text-xl font-bold text-zinc-800 mb-3 mx-4">
          모니터링 시스템
        </h1>
        <div className="text-xs md:text-sm mx-4 h-20">
          <p>검사 데이터 통계, CCTV 감시 등 필수 정보 시각화</p>
        </div>
        <TabmenuSub tabs={Monitoring} />
      </div>
    ),
  },
];

export default ProductsContent;
