import React, { useState } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center max-w-[1920px] mx-auto px-[10%] h-[80px] bg-blue-500 text-[#fff] relative">
        <p className="text-[30px] font-bold">Sachira</p>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <MdOutlineClear size={40} />
            ) : (
              <MdOutlineDehaze size={40} />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[20px] text-[20px]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className={`md:hidden bg-blue-400 rounded-b-[20px] absolute top-20  left-0 w-full duration-400 ease-in-out z-[-10] ${isOpen ? 'top-20' : 'top-[-450px]'}`}>
          <ul className="flex flex-col items-center gap-[20px] py-[20px] pb-[20px] text-[20px] text-[#fff] ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
     
      </nav>

      {/* Mobile Menu */}

      {/* {isOpen ? (
        <div className="md:hidden bg-blue-500 rounded-b-[20px]">
          <ul className="flex flex-col items-center gap-[20px] pb-[20px] text-[20px] text-[#fff] ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      ) : null} */}
    </header>
  );
};

export default Header;
