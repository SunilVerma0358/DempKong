import React from "react";
import RoadmapMain from "../assets/image/RoadmapMainImg.webp";
import RoadmapEllipse from "../assets/image/RoadmapEllipse.webp";
import Button from "./Button";
const Timeline = () => {
  return (
    <div className="overflow-hidden">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] pt-[48px] lg:pt-[80px] pb-[48px]  px-3 mx-auto lg:pb-[60px]">
        <h2 className="text-white text-[44px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal leading-[108%] text-center lg:pb-[50px]">
          Roadmap
        </h2>
        <div className="relative z-20 pt-[45px] lg:pt-[150px] lg:pb-[100px]  ">
          <div className=" max-w-[318px] mx-auto lg:mx-0  ">
            <img className="w-full " src={RoadmapMain} alt="Roadmap" />
          </div>
          <div className="absolute -z-10 top-[6%] left-[-10%] max-w-[550px] hidden lg:block   ">
            <img className="w-full" src={RoadmapEllipse} alt="roadmap" />
          </div>
          <div className=" flex gap-4 flex-col w-full pt-8 lg:pt-0 ">
            <div
              data-aos="fade-left"
              className="flex group items-center sticky lg:absolute top-[3%] lg:top-[5%] left-[28%] xl:left-[22%] 2xl:left-[18%]"
            >
              <span>
                <svg
                  className="hidden lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="179"
                  height="12"
                  viewBox="0 0 179 12"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#FDDA60] transition-all ease-linear duration-300"
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="group-hover:bg-[#FDDA60] transition-all ease-linear duration-300 bg-white rounded-[50%] sm:w-[76px] sm:h-[76px] px-3 py-5  flex justify-center items-center ms-6">
                <p className="text-black font-Montserrat text-[16px] sm:text-[20px] font-black leading-[108%]">
                  20%
                </p>
              </div>
              <div className="ps-[25px] xl:ps-[43px]">
                <h3 className="text-[16px] sm:text-[20px] font-normal font-AzoSans leading-[108%] text-white pb-2">
                  Phase 1
                </h3>
                <p className="text-[13px] sm:text-[14px] xl:text-base font-normal font-Montserrat text-white leading-[160%] max-w-[598px]">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex group items-center sticky lg:absolute top-[23%] lg:top-[25%] left-[38%] xl:left-[32%] 2xl:left-[28%]"
            >
              <span>
                <svg
                  className="hidden lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="12"
                  viewBox="0 0 109 12"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#FDDA60] transition-all ease-linear duration-300"
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="group-hover:bg-[#FDDA60] transition-all ease-linear duration-300 bg-white rounded-[50%] sm:w-[76px] sm:h-[76px] px-3 py-5   flex justify-center items-center ms-6">
                <p className="text-black font-Montserrat text-[16px] sm:text-[20px] font-black leading-[108%]">
                  40%
                </p>
              </div>
              <div className="ps-[25px] xl:ps-[43px]">
                <h3 className="text-[16px] sm:text-[20px] font-normal font-AzoSans leading-[108%] text-white pb-2">
                  Phase 2
                </h3>
                <p className="text-[13px] sm:text-[14px] xl:text-base font-normal font-Montserrat text-white leading-[160%] max-w-[598px]">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex group items-center sticky lg:absolute top-[42%] lg:top-[45%] left-[40%] xl:left-[36%] 2xl:left-[30%]"
            >
              <span>
                <svg
                  className="hidden lg:block"
                  width="123"
                  height="12"
                  viewBox="0 0 123 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#FDDA60] transition-all ease-linear duration-300"
                    d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="group-hover:bg-[#FDDA60] transition-all ease-linear duration-300 bg-white rounded-[50%] sm:w-[76px] sm:h-[76px] px-3 py-5  flex justify-center items-center ms-6">
                <p className="text-black font-Montserrat text-[16px] sm:text-[20px] font-black leading-[108%]">
                  60%
                </p>
              </div>
              <div className="ps-[25px] xl:ps-[43px]">
                <h3 className="text-[16px] sm:text-[20px] font-normal font-AzoSans leading-[108%] text-white pb-2">
                  Phase 3
                </h3>
                <p className="text-[13px] sm:text-[14px] xl:text-base font-normal font-Montserrat text-white leading-[160%] max-w-[598px]">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex group items-center sticky lg:absolute top-[64%] lg:top-[66%] left-[38%] xl:left-[32%] 2xl:left-[28%]"
            >
              <span>
                <svg
                  className="hidden lg:block"
                  width="97"
                  height="12"
                  viewBox="0 0 97 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#FDDA60] transition-all duration-300 ease-linear"
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="group-hover:bg-[#FDDA60] transition-all duration-300 ease-linear bg-white rounded-[50%] sm:w-[76px] sm:h-[76px] px-3 py-5   flex justify-center items-center ms-6">
                <p className="text-black font-Montserrat text-[16px] sm:text-[20px] font-black leading-[108%]">
                  80%
                </p>
              </div>
              <div className="ps-[25px] xl:ps-[43px]">
                <h3 className="text-[16px] sm:text-[20px] font-normal font-AzoSans leading-[108%] text-white pb-2">
                  Phase 4
                </h3>
                <p className="text-[13px] sm:text-[14px] xl:text-base font-normal font-Montserrat text-white leading-[160%] max-w-[598px]">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex group items-center sticky lg:absolute bottom-[0] lg:bottom-[2%] left-[30%] xl:left-[25%] 2xl:left-[22%]"
            >
              <span>
                <svg
                  className="hidden lg:block"
                  width="133"
                  height="12"
                  viewBox="0 0 133 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" group-hover:fill-[#FDDA60] transition-all ease-linear duration-300"
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="group-hover:bg-[#FDDA60] transition-all ease-linear duration-300 bg-white rounded-[50%] sm:w-[76px] sm:h-[76px] px-3 py-5   flex justify-center items-center ms-6">
                <p className="text-black font-Montserrat text-[16px] sm:text-[20px] font-black leading-[108%]">
                  100%
                </p>
              </div>
              <div className="ps-[25px] xl:ps-[43px]">
                <h3 className="text-[16px] sm:text-[20px] font-normal font-AzoSans leading-[108%] text-white pb-2">
                  Phase 5
                </h3>
                <p className=" text-[13px] sm:text-[14px] xl:text-base font-normal font-Montserrat text-white leading-[160%] max-w-[598px]">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            btn=" Read Our Whitepaper"
            className="mt-[35px] sm:mt-[60px] md:mt-[76px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
