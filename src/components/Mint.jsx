import React, { useState } from "react";
import Bottol from "../assets/image/bottel.webp";
import Glass from "../assets/image/glass.webp";
import Button from "./Button";

const Mint = () => {
  const [data, setData] = useState(1);
  function Add() {
    if (data < 9) {
      setData(data + 1);
    }
  }
  function Sub() {
    if (data > 1) {
      setData(data - 1);
    } else {
      setData(data);
    }
  }
  const mintCount = data < 10 ? `0${data}` : data;
  return (
    <div className="bg-[url(./assets/image/timelineImg.png)] bg-no-repeat  bg-cover py-[48px]  md:pb-[40px] z-20 relative ">
      <div className=" hidden sm:block blur-[179px] bg-[#FDDA60] w-[260px]  sm:w-[200px] md:w-[290px] rounded-[50%] h-[260px] sm:h-[200px] md:h-[290px] sm:top-[70%] md:top-[60%] lg:top-[30%]  right-0 absolute -z-10  "></div>
      <div className=" hidden sm:block blur-[141px] bg-[#FDDA60] w-[100px]  sm:w-[173px] rounded-[50%] h-[100px]  sm:h-[173px] top-[10%] left-0  absolute -z-10  "></div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className=" flex flex-wrap flex-row -mx-3 items-center">
          <div className="w-full lg:w-6/12 px-3">
            <div data-aos="fade-up" className="flex justify-center items-end">
              <div>
                <img className="max-h-[806px]" src={Bottol} alt="bottol" />
              </div>
              <div className="flex justify-end">
                <img src={Glass} alt="glass" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3 pt-8 lg:pt-0 max-w-[670px]  mx-auto lg:mx-0 ">
            <h2 className="text-white text-[48px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal leading-[108%]">
              Mint NFT
            </h2>
            <div className="flex flex-wrap flex-row -mx-3  pt-[28px] sm:pt-[35px] md:pt-[51px]">
              <div className="w-6/12 px-3">
                <h3 className="text-white font-black font-Montserrat text-[28px] sm:text-[36px] leading-[108%]">
                  9999{" "}
                </h3>
                <p className="text-white text-[14px] sm:text-base font-Montserrat font-normal leading-[160%] pt-[8px] sm:pt-[14px]">
                  of 10,000 minted
                </p>
                <div className=" pt-5 sm:pt-[33px]">
                  <h3 className="text-white font-black font-Montserrat text-[28px] sm:text-[36px] leading-[108%]">
                    Max 9
                  </h3>
                  <p className="text-white text-[14px] sm:text-base font-Montserrat font-normal leading-[160%] pt-[8px] sm:pt-[14px]">
                    NFTs per transaction
                  </p>
                </div>
              </div>
              <div className="w-6/12 px-3">
                <h3 className="text-white font-black font-Montserrat text-[28px] sm:text-[36px] leading-[108%]">
                  .2 ETH
                </h3>
                <p className="text-white pt-2 sm:text-base font-Montserrat font-normal leading-[160%]  sm:pt-[14px] ">
                  per NFT
                </p>
                <div className=" pt-[20px] sm:pt-[33px]">
                  <h3 className="text-white font-black font-Montserrat text-[28px] sm:text-[36px] leading-[108%]">
                    Max 2
                  </h3>
                  <p className="text-white pt-2 sm:text-base font-Montserrat font-normal leading-[160%]   sm:pt-[14px]">
                    Transaction per wallet
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-[34px] pt-[28px] sm:pt-[35px] md:pt-[49px]">
              <button
                onClick={Sub}
                className="bg-white text-black rounded-[5px] pt-1 pb-[7px] px-[15px] sm:py-[13px] font-Montserrat hover:bg-[#000] duration-300 hover:text-white hover:shadow-buttonShadow sm:px-[30px]  font-black text-[36px]"
              >
                -
              </button>
              <p className="flex justify-center items-center border-[2px] border-white rounded-[4px] text-white font-black   py-[7px] sm:py-[13px] w-[405px] text-[36px]">
                {mintCount}
              </p>
              <button
                onClick={Add}
                className="bg-white text-black rounded-[5px] pt-1 pb-[7px] px-[15px] sm:py-[13px] font-Montserrat hover:bg-[#000] duration-300 hover:text-white hover:shadow-buttonShadow sm:px-[30px] font-black text-[36px]"
              >
                +
              </button>
            </div>
            <Button
              btn="MINT NOW"
              className=" mt-[26px] sm:mt-[35px] md:mt-[46px] max-[640px]:max-w-[430px] w-full"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Mint;
