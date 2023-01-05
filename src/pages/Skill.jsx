import React from "react";

const Skill = () => {
  return (
    <div className="container">
      {/* overview */}
      <div className="w-full text-center">
        <h1 className=" text-3xl font-bold mb-9">SP2 사업분야</h1>
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-6 md:gap-3 w-full">
          <div className="mx-3">
            <img src="/img/business_area01.jpg" alt="" className="w-5/6 md:w-full mx-auto mb-5" />
            <div className="text-left w-5/6 md:w-full mx-auto">
              <p className="font-bold  sm:text-2xl text-xl mb-3 text-[#09486B]">Machine Vision</p>
              <p>인공지능 기반 객체검출 시스템으로 제품 유무 판단, 비정형 객체 검출, 불량 검출을 시행합니다.</p>
            </div>
          </div>
          <div className="mx-3">
            <img src="/img/business_area02.jpg" alt="" className="w-5/6 md:w-full mx-auto mb-5" />
            <div className="text-left w-5/6 md:w-full mx-auto">
              <p className="font-bold  sm:text-2xl text-xl mb-3 text-[#09486B]">Robotics</p>
              <p>다관절 로봇을 이용한 픽앤플레이스 시스템으로 생산, 물류, 음식, 농업 등 다양한 산업에 자동화 솔루션을 제공합니다.</p>
            </div>
          </div>
          <div className=" mx-3">
            <img src="/img/business_area03.jpg" alt="" className="w-5/6 md:w-full mx-auto mb-5" />
            <div className="text-left w-5/6 md:w-full mx-auto">
              <p className="font-bold  sm:text-2xl text-xl mb-3 text-[#09486B]">Monitoring System</p>
              <p>머신비전, 로봇제어 기술을 활용해 영상, 검사결과, 통계 등 각종 데이터를 실시간으로 모니터링 할 수 있는 플랫폼을 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
