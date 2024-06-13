import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const words = [
    "Software Engineer.",
    "Web Developer.",
    "MERN Developer. "
    
  ];

  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    const page = document.querySelector(".App");
    if (page) {
      page.classList.add("animate_content");
      setTimeout(() => {
        navigate(path);
      }, 1000);
    }
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    if (page) {
      setTimeout(() => {
        page.classList.remove("animate_content");
      }, 2000);
    }

    gsap.registerPlugin(TextPlugin);
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    const boxTl = gsap.timeline();
    boxTl.to(".box", {
      duration: 1,
      width: "8vw",
      delay: 2,
      ease: "power4.inOut",
    });

    gsap.from(".hi", {
      y: 100,
      duration: 1,
      delay: 2.5,
      ease: "power3.out",
      onComplete: () => {
        masterTl.play();
      },
    });

    const masterTl = gsap.timeline({ repeat: -1 }).pause();

    words.forEach((word) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: word });
      masterTl.add(tl);
    });
  }, [words]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="header-btns">
          <div className="header-btn header-btn1"></div>
          <div className="header-btn header-btn2"></div>
          <div className="header-btn header-btn3"></div>
        </div>
        <div className="header-text">
          <p>saumya-portfolio &#8212; -bash</p>
        </div>
      </div>
      <div className="terminal-body">
        <div className="terminal-bg-text">
          <p>saumya-MB:~ saumya-portfolio$ ls</p>
          <p>About Experience Projects Contact</p>
        </div>
        <div className="terminal-main-text">
          <p>
            Hi, I'm <span>Saumya.</span>
          </p>
          <p className="gsap-animation">
            <span className="box"></span>
            <span className="hi">I&apos;m </span>
            <span className="text"></span>
            <span className="cursor"></span>
          </p>
        </div>
        <div className="terminal-btns">
          <button onClick={() => navigateTo("/about")} className="terminal-btn terminal-btn1">
            cd About/ &#8594;
          </button>
          <button onClick={() => navigateTo("/experience")} className="terminal-btn terminal-btn2">
            cd Experience/ <span>&#8594;</span>
          </button>
          <button onClick={() => navigateTo("/projects")} className="terminal-btn terminal-btn3">
            cd Projects/ &#8594;
          </button>
          <button onClick={() => navigateTo("/contact")} className="terminal-btn terminal-btn4">
            cd Contact/ &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
