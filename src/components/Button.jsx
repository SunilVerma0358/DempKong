import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={` ${props.className} bg-[#FDDA60] px-3 sm:px-6  py-2 sm:py-4 rounded-[4px] text-black leading-[108.744%] text-[14px] sm:text-base font-AzoSans font-normal   hover:text-white before:transition-all before:ease-linear  before:duration-500 duration-500 before:absolute before:left-[-100%] before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full    before:-z-10 before:hover:bg-[#0A0A0a] z-20 overflow-hidden relative shadow-buttonShadow`}
      >
        {props.btn}
      </button>
    </div>
  );
};

export default Button;
