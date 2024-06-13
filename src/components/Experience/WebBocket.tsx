import React from "react";


const WebBocket: React.FC = () => {
  return (
    <>
      <div className="experience bloomberg">
        <p className="experience-role">Web Development Intern (Frontend Role) </p>
        <p className="experience-company">Web_Bocket</p>
        <div className="experience-description">
          <ul>
            <li>
            Designed and developed company websites using React.js and Tailwind CSS, focusing primarily on the frontend.
            </li>
            <li>
            Streamlined front-end development processes and implemented cross-browser compatibility, reducing technical
            issues and ensuring a consistent user experience for all users.
            </li>
            <li>
            Enhanced website performance and user interface using React.js and Tailwind CSS, contributing to increased user
            engagement and satisfaction
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/react.png" alt="python logo" />
          <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
          <img src="/toolkit-logos/next-js.png" alt="javascript logo" />
        </div>
      </div>
    </>
  );
};

export default WebBocket;
