import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Mint from "./components/Mint";
import Partners from "./components/Partners";
import TheKing from "./components/TheKing";
import TheTeam from "./components/TheTeam";
import Timeline from "./components/Timeline";
import Utilities from "./components/Utilities";
import Lord from "./components/Lord";
import BackToTop from "./components/BackToTop";

function App() {
  const [lorder, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        {" "}
        {lorder ? (
          <div>
            <Lord />
          </div>
        ) : (
          <div className="bg-[#0A0A0A]">
            <Header />
            <About />
            <Utilities /> <TheKing />
            <Mint />
            <Timeline />
            <Partners />
            <TheTeam />
            <Faq />
            <BackToTop />
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
}

export default App;
