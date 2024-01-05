import React, { useState } from "react";
import Hugh from "../assets/image/Hugh.webp";
import Rambo from "../assets/image/Rambo.webp";
import Albert from "../assets/image/Albert.webp";
import prince from "../assets/image/Prince.webp";
import Royals from "../assets/image/Royals.webp";
import Main from "../assets/image/TheKing.webp";
import Elive from "../assets/image/Elivis.webp";
import Pacs from "../assets/image/pac.webp";
import Anonymous from "../assets/image/Anonymous.webp";
import HoMan from "../assets/image/He-Man.webp";
import img1 from "../assets/image/img1-main.webp";
import img2 from "../assets/image/img2-main.webp";
import img3 from "../assets/image/img3-main.webp";
import img4 from "../assets/image/img6-main.webp";
import img5 from "../assets/image/img7-main.webp";
import img6 from "../assets/image/img9-main.webp";

const TheKing = () => {
  const [first, setfirst] = useState("Tab1");
  function ChangeTab(Tab) {
    setfirst(Tab);
  }
  return (
    <div className=" relative pt-[48px] sm:pt-[90px] xl:pt-[125px] pb-[48px] sm:pb-[94px] overflow-hidden z-20">
      <div className=" blur-[179px] bg-[#FDDA60] w-[260px]  md:w-[364px] rounded-[50%] h-[260px] md:h-[364px] top-[40%] left-[30%] lg:left-[40%] absolute -z-10  "></div>
      <div className="container 2xl:max-w-[1320px] max-w-[1140px] px-3 mx-auto">
        <h1 className="text-[46px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal text-white leading-[108%] text-center">
          THE KONGS
        </h1>
        <div className=" sm:h-[750px] md:h-[901px]">
          {first === "Tab1" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img1}
                alt="main"
              />
            </div>
          )}
          {first === "Tab2" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img2}
                alt="main"
              />
            </div>
          )}
          {first === "Tab3" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img3}
                alt="main"
              />
            </div>
          )}
          {first === "Tab4" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={Main}
                alt="main"
              />
            </div>
          )}
          {first === "Tab5" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img4}
                alt="main"
              />
            </div>
          )}
          {first === "Tab6" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img4}
                alt="main"
              />
            </div>
          )}
          {first === "Tab7" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img5}
                alt="main"
              />
            </div>
          )}
          {first === "Tab8" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img4}
                alt="main"
              />
            </div>
          )}
          {first === "Tab9" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img6}
                alt="main"
              />
            </div>
          )}
          {first === "Tab10" && (
            <div className="flex justify-center max-w-[786px] mx-auto">
              <img
                data-aos="fade-down"
                className="w-full max-[640px]:pb-[48px] sm:pb-[100px] md:mb-[100px]"
                src={img1}
                alt="main"
              />
            </div>
          )}
        </div>
      </div>
      <div className="overflow-x-scroll md:overflow-auto flex  gap-3 ">
        <div
          onClick={() => ChangeTab("Tab1")}
          className="sticky  md:absolute  md:top-[30%] md:left-0 lg:top-[10%] lg:left-0 xl:left-[-2%] md:max-w-[120px] lg:max-w-[180px]"
        >
          <img
            className=" w-[140px]  hover:scale-[102%] duration-300 transition-all ease-linear cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Hugh}
            alt="hugh"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab2")}
          className="sticky   md:absolute  md:top-[25%] md:left-[20%] lg:top-[26%]  lg:left-0 xl:left-[5%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Rambo}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab3")}
          className="sticky   md:absolute  md:top-[15%] md:left-[44%] lg:top-[43%] lg:left-0 xl:left-[10%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Albert}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab4")}
          className="sticky   md:absolute  md:right-0 md:top-[30%] lg:top-[60%]  lg:left-0 xl:left-[5%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={prince}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab5")}
          className="sticky   md:absolute md:right-[22%] md:top-[25%] lg:top-[78%] lg:left-0 xl:left-[-2%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Royals}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab6")}
          className="sticky   md:absolute md:top-[86%] md:right-[62%] lg:top-[10%] lg:right-0 xl:right-[-2%] md:max-w-[120px] lg:max-w-[180px]"
        >
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={HoMan}
            alt="hugh"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab7")}
          className="sticky   md:absolute md:top-[81%] md:right-[80%] lg:top-[26%]  lg:right-0  xl:right-[5%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] duration-300 transition-all ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Anonymous}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab8")}
          className="sticky   md:absolute md:bottom-0 md:right-[43%] lg:top-[43%] lg:right-0  xl:right-[10%] md:max-w-[120px] lg:max-w-[180px] "
        >
          {" "}
          <img
            className=" w-[140px] hover:scale-[102%] transition-all duration-300 ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Pacs}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab9")}
          className="sticky    md:absolute md:bottom-[5%] md:right-[22%] lg:bottom-[24%]  lg:right-0  xl:right-[5%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className="w-[140px] hover:scale-[102%] transition-all duration-300 ease-linear  cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full rounded-[8px] shadow-buttonShadow"
            src={Elive}
            alt="Rambo"
          />
        </div>
        <div
          onClick={() => ChangeTab("Tab10")}
          className="sticky md:absolute md:bottom-[10%] md:right-0 lg:bottom-[6%] lg:right-0  xl:right-[-2%] md:max-w-[120px] lg:max-w-[180px]"
        >
          {" "}
          <img
            className="w-[140px] hover:scale-[102%] transition-all duration-300 ease-linear cursor-pointer max-w-[200px] sm:w-[180px] sm:max-w-[300px] md:w-full"
            src={Hugh}
            alt="Rambo"
          />
        </div>
      </div>
    </div>
  );
};

export default TheKing;
