import React from "react";
import img1 from "../assets/image/NFTeveningPartners.webp";
import img2 from "../assets/image/NFTCalendar.webp";
import img3 from "../assets/image/Nebraska.webp";
import img4 from "../assets/image/Fannie.webp";
const Partners = () => {
  return (
    <div>
      <div className="max-w-[1140px] container 2xl:max-w-[1320px] px-3 mx-auto py-[48px]">
        <h1 className="text-white text-center text-[48px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal leading-[108%]">
          Partners
        </h1>

        <div className="flex flex-row  flex-wrap pt-[50px] justify-center  items-center ">
          <div className=" w-full sm:w-6/12  md:w-4/12  lg:w-3/12 px-3  ">
            <div className="flex items-center justify-center md:justify-normal  gap-4">
              <img src={img1} alt="imge3" />
              <div className="min-h-[127px] w-[5px] rotate-12 shadow-[0_015px#FDDA60] bg-[#FDDA60] hidden md:block"></div>
            </div>
          </div>

          <div className=" w-full sm:w-6/12  md:w-4/12  lg:w-3/12 px-3 pt-6 sm:pt-0 ">
            <div className="flex items-center justify-center md:justify-normal md:items-start gap-4">
              <img src={img2} alt="imge3" />
              <div className="min-h-[127px] w-[5px] rotate-12 shadow-[0_015px#FDDA60] bg-[#FDDA60] hidden md:block"></div>
            </div>
          </div>

          <div className=" w-full sm:w-6/12  md:w-4/12  lg:w-3/12 px-3 pt-6 ">
            <div className="flex items-center justify-center md:justify-normal md:items-start gap-4">
              <img src={img3} alt="imge3" />
              <div className="min-h-[127px] w-[5px] rotate-12 shadow-[0_015px#FDDA60] bg-[#FDDA60] hidden md:block"></div>
            </div>
          </div>

          <div className=" w-full sm:w-6/12  md:w-4/12  lg:w-3/12 px-3 pt-6 ">
            <div className="flex justify-center md:justify-normal">
              <img src={img4} alt="imge3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
