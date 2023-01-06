import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClickMenu = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#000000] top-0 fixed w-full">
      <div className="flex justify-between items-center h-16 md:h-24 max-w-[1240px] px-4 mx-auto text-white">
        <Link to={"/"}>
          {/* <img src="/img/eagerBeaver.png" alt="" className="h-9 md:h-16" /> */}
          <h1 className="w-full text-2xl font-bold text-[#F72ADC] cursor-pointer">EagerBeaver</h1>
        </Link>

        <ul className="hidden md:flex text-center items-center">
          <Link to={"/about"}>
            <li className="p-3 w-[100px]">About E.B</li>
          </Link>
          <Link to={"/skill"}>
            <li className="p-3 w-[100px]">Skill</li>
          </Link>
          <Link to={"/history"}>
            <li className="p-3 w-[100px]">History</li>
          </Link>
          <Link to={"/experience"}>
            <li className="p-3 w-[100px]">Experience</li>
          </Link>
        </ul>
        <div onClick={handleClickMenu} className="block md:hidden cursor-pointer">
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Menu</h1>
          <ul className="p-4">
            <Link to={"/about"}>
              <li className="p-4 border-b border-gray-600" onClick={handleClickMenu}>
                About E.B
              </li>
            </Link>
            <Link to={"/skill"}>
              <li className="p-4 border-b border-gray-600" onClick={handleClickMenu}>
                Skill
              </li>
            </Link>
            <Link to={"/history"}>
              <li className="p-4 border-b border-gray-600" onClick={handleClickMenu}>
                History
              </li>
            </Link>
            <Link to={"/experience"}>
              <li className="p-4 border-b border-gray-600" onClick={handleClickMenu}>
                Experience
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
