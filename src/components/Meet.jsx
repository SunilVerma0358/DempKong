import React from "react";

const Meet = (event) => {
  return (
    <div>
      <div className="w-full h-[1px] bg-[#fDDA60]   shadow-[0px_0px_15px_1px_#FDDA60]"></div>
      <div className="flex flex-wrap flex-row -mx-3 pt-[34px] pb-[40px] sm:pb-[60px]">
        <div data-aos="fade-right" className="w-full md:w-6/12 px-3">
          <div className="flex sm:block justify-center flex-col items-center sm:justify-normal sm:items-start">
            <h4 className="font-bold font-Montserrat leading-[108%] text-[20px] sm:text-[22px] md:text-[24px] text-white">
              {event.Heading}
            </h4>
            <p className="text-[18px] sm:text-[20px] text-white font-Montserrat font-normal leading-[108%] pt-3">
              {event.PharaOne}
            </p>
            <div className="rounded-[20px] border-[3px] border-[#FDDA60] max-w-[230px] shadow-cardShadow mt-6 sm:mt-[32px]">
              <img className="rounded-[20px]" src={event.Img} alt="jaylon" />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full md:w-6/12 px-3 pt-6 md:pt-0"
        >
          <div className="flex sm:block flex-col justify-center items-center  sm:justify-normal sm:items-start">
            <h4 className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-Montserrat font-semibold  leading-[108%]">
              {event.PharaTwo}
            </h4>
            <p className=" text-[18px] sm:text-[18px] md:text-[20px] text-white font-Montserrat font-normal leading-[108%] pt-3">
              {event.PharaThree}
            </p>
            <p className=" text-center sm:text-start text-[14px] sm:text-[16px]  text-white font-Montserrat font-normal leading-[160%] pt-6 sm:pt-[32px]">
              {event.PharaFour}{" "}
            </p>
            <p className=" text-center sm:text-start text-[14px] sm:text-[16px] text-white font-Montserrat font-normal leading-[160%] pt-3 sm:pt-[15px]">
              {event.PharaFive}{" "}
            </p>
            <div className="flex gap-4 pt-6 sm:pt-[32px]">
              <a
                href="#!"
                className=" rounded-[20px] hover:-translate-y-2 transition-all ease-linear duration-300"
              >
                <span>{event.Svg}</span>
              </a>
              <a
                href="#!"
                className="rounded-[20px] hover:-translate-y-2 transition-all ease-linear duration-300"
              >
                <span> {event.SvgTwo}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
