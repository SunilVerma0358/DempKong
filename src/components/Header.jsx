import React, { useState } from "react";
import Logo from "../assets/image/FooterLogo.webp";
import twitter from "../assets/svg/twitter.svg";
import Subtract from "../assets/svg/Subtract.svg";
import diamand from "../assets/svg/diamand.svg";
import discord from "../assets/svg/discord.svg";
import MLogo from "../assets/svg/M.svg";
import telegram from "../assets/svg/telegram.svg";
import Button from "./Button";
import small from "../assets/image/small.webp";
import medium from "../assets/image/medium.webp";
import big from "../assets/image/big.webp";

const Header = () => {
  const [modal, setmodal] = useState(false);
  function Mymodal() {
    setmodal(!modal);
  }
  return (
    <div>
      <div
        className={` ${
          modal ? "block" : "hidden"
        } w-full h-full fixed bg-[#000000a3]  z-40 `}
      ></div>
      <div className="flex justify-center">
        <div
          className={` ${
            modal ? "top-0 m-10" : "top-[-100%] m-0"
          } fixed top-0 w-[250px] h-[200px] rounded-[20px] duration-300 bg-[#FDDA60] z-[60] mx-auto flex-col flex justify-center items-center`}
        >
          {" "}
          <p className="text-base text-black hover:text-white font-AzoSans font-normal duration-300">
            It is a Modal
          </p>
          <button
            onClick={Mymodal}
            className="text-base text-white hover:text-[#000] font-AzoSans font-normal duration-300 mt-4 hover:bg-white bg-[#000] border border-black px-3 py-2 rounded-[8px] "
          >
            Back
          </button>
        </div>
      </div>
      <div className="bg-[url(./assets/image/header-bg.png)] h-[80vh] md:h-screen bg-no-repeat bg-center size   relative z-20  overflow-hidden">
        <div className="absolute animate-HeroImg z-10 bottom-0 hidden md:block md:right-[38%] lg:right-[37%] xl:right-[33%] 2xl:right-[33%] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[405px]">
          <img className="w-full " src={small} alt="small" />
        </div>
        <div className="absolute animate-HeroImg1 z-10 bottom-0 right-0 sm:right-[20%] md:right-[15%] lg:right-[12%] xl:right-[13%] 2xl:right-[16%] max-w-[300px] lg:max-w-[350px] xl:max-w-[417px]">
          <img className="w-full" src={medium} alt="small" />
        </div>
        <div className="absolute z-10 animate-HeroImg3 bottom-0 hidden sm:block right-[-22%] lg:right-[-15%] xl:right-[-20%] 2xl:right-[-8%] max-w-[440px] lg:max-w-[480px] xl:max-w-[641px]">
          <img className="w-full" src={big} alt="small" />
        </div>
        <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto relative z-20 ">
          <div className="absolute right-2 top-5">
            <button
              onClick={Mymodal}
              className=" bg-[#FDDA60] px-3 sm:px-6  py-2 sm:py-4 rounded-[4px] text-black leading-[108.744%] text-[14px] sm:text-base font-AzoSans font-normal   hover:text-white before:transition-all before:ease-linear  before:duration-500 duration-500 before:absolute before:left-[-100%] before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full    before:-z-10 before:hover:bg-[#0A0A0a] z-20 overflow-hidden relative shadow-buttonShadow"
            >
              CONNECT WALLET
            </button>
          </div>
          <div className="flex items-center sm:justify-center max-w-[116px] mr-auto sm:mx-auto pt-2">
            <img className="w-full" src={Logo} alt="logo" />
          </div>

          <div className="flex gap-3 sm:gap-6 items-center justify-center pt-[19px]">
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://opensea.io/"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={Subtract} alt="twitter" />
            </a>
            <a
              href="#!"
              target="blank"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={diamand} alt="twitter" />
            </a>
            <a
              href="https://discord.com/channels/@me/1144134800668643440"
              target="blank"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={discord} alt="twitter" />
            </a>
            <a
              href="https://mega.io/"
              target="blank"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={MLogo} alt="twitter" />
            </a>
            <a
              href="https://telegram.org/"
              target="blank"
              className="hover:-translate-y-1 transition-all ease-linear duration-300"
            >
              <img src={telegram} alt="twitter" />
            </a>
          </div>
          <h2 className="max-w-[570px] mx-auto text-center text-[44px] sm:text-[56px] md:text-[64px] font-normal text-[#fff] leading-[108%] font-AzoSans pt-[23px] ">
            WELCOME
            <br />
            TO{" "}
            <span className="text-[#F1C85D] relative  before:bg-[#F1C85D] before:w-full before:h-[5px] before:absolute before:left-0 before:bottom-0">
              DomPKong
            </span>
          </h2>
          <p className="max-w-[565px] mx-auto text-center text-base font-Montserrat text-[#fff] leading-[160%] font-normal pt-[20px]">
            Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
            amet et. Erat nam molestie. Vita
          </p>
          <div className="max-w-[453px] mx-auto flex gap-[6px] sm:gap-[32px] justify-center items-center pt-[35px]">
            <Button btn="Whitepaper" />
            <Button btn="Mint" />
            <Button btn="Opensea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
