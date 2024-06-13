import React, { useEffect, useState, MouseEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import SideMenu from "./../components/SideMenu";
import logo from "../assets/logo.png"

const Header: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<string | null>(
    document.documentElement.getAttribute("data-theme")
  );
  const [currentRoute, setCurrentRoute] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = (): void => {
    const page = document.querySelector(".App");
    if (page) {
      page.classList.add("animate_content");
    }
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const toggleMenu = (): void => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("menu-open");
    }

    setIsMounted(!isMounted);
    if (!menuState) setMenuState(true);
  };

  const toggleDarkThemeLanding = (): void => {
    const attributeVal = document.documentElement.getAttribute("data-theme");
    if (attributeVal === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setDarkMode("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode("dark");
    }
  };

  const handleNavigate = (e: MouseEvent<HTMLButtonElement>): void => {
    const html = document.querySelector("html");
    const page = document.querySelector(".App");
    if (page) {
      page.classList.add("animate_content");
    }
    if (html) {
      html.classList.remove("menu-open");
    }
    const target = e.target as HTMLButtonElement;
    const route = target.innerHTML.toLowerCase();
    setTimeout(() => {
      setMenuState(false);
      setIsMounted(false);
      navigate(`/${route}`);
    }, 1000);
  };

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <nav>
        <div className="left-nav">
          <button onClick={handleHome}>
            <img src={logo} alt="logo with a hand drawn J" />  
          </button>
        </div>
        {currentRoute === "/home" ? null : (
          <div className="nav-btns">
            <button
              className={
                currentRoute === "/about" ? "nav-btn current-page" : "nav-btn"
              }
              onClick={handleNavigate}
            >
              About
            </button>
            <button
              className={
                currentRoute === "/experience"
                  ? "nav-btn current-page"
                  : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Experience
            </button>
            <button
              className={
                currentRoute === "/projects"
                  ? "nav-btn current-page"
                  : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Projects
            </button>
            <button
              className={
                currentRoute === "/contact"
                  ? "nav-btn current-page"
                  : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Contact
            </button>
          </div>
        )}
        <div className="right-nav">
          <div className="toggle-main">
            <input
              onClick={toggleDarkThemeLanding}
              type="checkbox"
              id="toggle-main"
              defaultChecked={darkMode === "dark"}
            />
            <label htmlFor="toggle-main"></label>
          </div>
          <div className="menu">
            <SideMenu
              isMounted={isMounted}
              setIsMounted={setIsMounted}
              menuState={menuState}
              setMenuState={setMenuState}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
