import { useEffect, useState } from "react";

import WebBocket from "../components/Experience/WebBocket";
import Glucian from "../components/Experience/Glucian";
import "./Experience.css";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<string>("FSA");

  const handleExperienceClick = (experience: string) => {
    setActiveExperience(experience);
  };

  useEffect(() => {
    const page = document.querySelector<HTMLDivElement>(".App");
    if (page) {
      setTimeout(() => {
        page.classList.remove("animate_content");
      }, 2000);
    }
  }, []);

  return (
    <div className="experience-container">
      <p className="experience-header">Experience</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
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
            <p>Saumya-MB:Experience saumya-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={() => handleExperienceClick("Web")}
                className="experience-terminal-btn terminal-btn1"
              >
                cat Web_Bocket.txt/ &#8594;
              </button>
              <button
                onClick={() => handleExperienceClick("Glu")}
                className="experience-terminal-btn terminal-btn3"
              >
                cat Glucian Technology.txt/ &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {activeExperience === "Web" && <WebBocket />}
              {activeExperience === "Glu" && <Glucian />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
