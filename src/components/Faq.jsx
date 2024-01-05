import React, { useState } from "react";
import plus from "../assets/image/plus.webp";
import subTrack from "../assets/image/subTrack.webp";
import FooterLogo from "../assets/image/FooterLogo.webp";
import FooterTwiter from "../assets/svg/FooterTwitter.svg";
import FooterShip from "../assets/svg/ShipFooter.svg";
import FooterDiamand from "../assets/svg/footerDiamand.svg";
import FooterDiscord from "../assets/svg/FooterDiscord.svg";
import Footertelgram from "../assets/svg/telgramFooter.svg";
import MFooter from "../assets/svg/FooterM.svg";

const Faq = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Arcu faucibus diam feugiat magna etiam.",
      content:
        " Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. ",
    },
    {
      title: "Fermentum tortor aenean.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Dictum est amet sollicitudin.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Sed vulputate mi faucibus.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Commodo placerat ultricies.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Nunc amet cursus morbi donec.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
  ];
  return (
    <div className="bg-[url(../src/assets/image/footer_bg.png)] bg-no-repeat bg-cover relative z-20 overflow-hidden ">
      <div className="blur-[131px] bg-[#FDDA60] w-[120px] sm:w-[180px] md:w-[216px] rounded-[50%] h-[120px] sm:h-[180px] md:h-[216px] bottom-[-10%] left-0 absolute -z-10  "></div>
      <div className="container max-w-[1140px] px-3 mx-auto 2xl:max-w-[1320px] pt-[48px] md:pt-[60px]">
        <h2 className="text-white text-[48px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal leading-[108%] text-center pb-6 sm:pb-[35px] md:pb-[40px] lg:pb-[50px]">
          FAQs
        </h2>
        <div
          data-aos="fade-down"
          className="max-w-[896px] mx-auto 2xl:max-w-[1140px] transition-all ease-linear duration-300 "
        >
          {accordionData.map((item, index) => (
            <div
              className="border-b-[3px] border-[#FFDA60] mb-[5px] transition-all ease-linear duration-300 "
              key={index}
            >
              <div
                className={`${
                  openAccordion === index ? "px-3" : "pb-[17px]"
                } pt-[25px] cursor-pointer   text-white font-Montserrat text-[18px] md:text-[22px] font-bold leading-[108%] transition-all ease-linear duration-300`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <div>{item.title}</div>
                  <div className="text-[#FDDDA60]">
                    {openAccordion === index ? (
                      <img src={subTrack} alt="plus" />
                    ) : (
                      <img src={plus} alt="plus" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`accordion-content text-white text-[14px] md:text-base font-Montserrat font-normal leading-[160%] transition-all ease-linear duration-300 ${
                  openAccordion === index ? "open px-3 pb-5 pt-[9px]" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[60px] md:pt-[92px]">
        <div className="max-w-[310px] max-h-[230px] mx-auto an">
          <img className="w-full" src={FooterLogo} alt="footerLogo" />
        </div>
        <div className="flex gap-6 items-center justify-center py-7">
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
            target="blank"
            className=" hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={FooterTwiter} alt="footer" />
          </a>
          <a
            href="https://opensea.io/"
            target="blank"
            className=" hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={FooterShip} alt="footer" />
          </a>
          <a
            href="#!"
            target="blank"
            className=" hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={FooterDiamand} alt="footer" />
          </a>
          <a
            href="https://discord.com/channels/@me/1144134800668643440"
            target="blank"
            className=" hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={FooterDiscord} alt="footer" />
          </a>
          <a
            href="https://mega.io/"
            target="blank"
            className=" hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={MFooter} alt="footer" />
          </a>
          <a
            href="https://telegram.org/ "
            target="blank"
            className="hover:-translate-y-2 transition-all ease-linear duration-300"
          >
            <img src={Footertelgram} alt="footer" />
          </a>
        </div>
      </div>
      <p className="text-base font-Montserrat font-normal text-center leading-normal border-t border-white  pt-4 pb-5 text-white">
        © DomPKong {year}
      </p>
    </div>
  );
};

export default Faq;
