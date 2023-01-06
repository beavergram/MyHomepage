import React from "react";
import { ExperienceItems } from "./items/ExperienceItems";
const Experience = () => {
  return (
    <div className="container">
      {/* Dev Experience */}
      <div className=" flex justify-center mb-12">
        <div className="w-10/12 md:flex-none md:w-8/12 md:pl-5">
          <h1 className=" md:text-3xl text-xl font-bold mb-9 md:mb-12">Dev Experience</h1>
          <div className="">
            <ExperienceItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
