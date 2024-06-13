import React, { useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

interface SideMenuProps {
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

// Styles for conditional side menu animations
const mountedStyle: React.CSSProperties = {
  animation: "fadeIn 1s ease-in-out",
};

const unmountedStyle: React.CSSProperties = {
  animation: "fadeOut 1s ease-in-out",
  animationFillMode: "forwards",
};

const SideMenu: React.FC<SideMenuProps> = ({
  isMounted,
  setIsMounted,
  menuState,
  setMenuState,
  toggleMenu,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (e: MouseEvent<HTMLParagraphElement>): void => {
    const html = document.querySelector("html");
    const page = document.querySelector(".App");
    if (page) {
      page.classList.add("animate_content");
    }
    if (html) {
      html.classList.remove("menu-open");
    }
    const target = e.target as HTMLParagraphElement;
    const route = target.innerHTML.toLowerCase();
    setTimeout(() => {
      setMenuState(false);
      setIsMounted(false);
      navigate(`/${route}`);
    }, 1000);
  };

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const navLinks = document.querySelectorAll(".nav-option");
    if (navLinks.length && isMounted) {
      gsap.from(navLinks, {
        duration: 1,
        x: 300,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, [isMounted]);

  return (
    <div className="side-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`burger burger1 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger2 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger3 ${menuState ? "isOpen" : ""}`} />
      </div>
      {menuState && (
        <div
          style={isMounted ? mountedStyle : unmountedStyle}
          className="screen-cover"
        ></div>
      )}
      {menuState && (
        <div
          className="menu-container"
          style={isMounted ? mountedStyle : unmountedStyle}
          onAnimationEnd={() => {
            if (!isMounted) setMenuState(false);
          }}
        >
          <ul>
            <li>
              <div className="nav-option">
                <p>01</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Home
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>02</p>
                <p className="nav-link" onClick={handleNavigate}>
                  About
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>03</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Experience
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>04</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Projects
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>05</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Contact
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideMenu;