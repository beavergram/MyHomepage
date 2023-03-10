import React from "react";
import { SkillFrontEnd } from "./items/SkillItems";
const History = () => {
  return (
    <div className="container">
      {/* Dev Job History */}
      <div className=" flex justify-center mb-12">
        <div className="w-10/12 md:flex-none md:w-8/12 md:pl-5">
          <h1 className=" md:text-3xl text-xl font-bold mb-9 md:mb-12">Dev Skill</h1>
          <div className="">
            <SkillFrontEnd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
