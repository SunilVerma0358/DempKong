import React from "react";
import cars from "../assets/image/Cars.webp";
import boats from "../assets/image/boats.webp";
import watche from "../assets/image/waches.webp";

const About = () => {
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>;

  return (
    <div className=" overflow-hidden">
      <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 pt-[70px]  md:pt-[129px] pb-[84px]">
        <div className="flex flex-wrap flex-row -mx-3 items-center">
          <div className=" w-full lg:w-6/12 px-3">
            <h1 className="text-[48px] sm:text-[56px] md:text-[64px] sm:text-center lg:text-start  font-normal leading-[108%] font-AzoSans text-[#fff]">
              About
            </h1>
            <p className="text-[14px] sm:text-base font-normal leading-[160%] sm:text-center sm:mx-auto lg:mx-0  lg:text-start font-Montserrat text-[#fff] max-w-[521px]">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
              nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
            </p>
          </div>
          <div className=" w-full lg:w-6/12 px-3 max-sm:overflow-hidden relative  ">
            <div className="blur-[131px] bg-[#FDDA60] w-[120px] sm:w-[180px] md:w-[216px] rounded-[50%] h-[120px] sm:h-[180px] md:h-[216px] top-[10%] left-[30%] absolute "></div>
            <div className="relative conatiner1 my-[4%] mx-auto py-5">
              <div className="  h-[300px] w-full flex justify-center items-center bg-transparent">
                <div className="slider-box-ABout">
                  <div className="carousel w-full cursor-pointer flex items-center justify-center">
                    <div className="w-[200px] h-[140px] absolute overflow-hidden backface it1 border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center">
                      <img
                        className="w-full rounded-[16px] h-full"
                        src={cars}
                        alt="img
                        "
                      />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it2">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it3">
                      <img className="w-full" src={watche} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it4">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it5">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it6">
                      <img className="w-full" src={watche} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it7">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it8">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it9">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
