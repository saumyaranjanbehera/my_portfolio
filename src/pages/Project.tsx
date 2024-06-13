import { useEffect } from "react";
import "./Project.css";
import project from "./../../public/toolkit-logos/project.png";
import project1 from "./../../public/toolkit-logos/project-1.png";
import project2 from "./../../public/toolkit-logos/project-2.png"

const Projects: React.FC = () => {
    useEffect(() => {
        const page = document.querySelector(".App");
        if (page) {
            setTimeout(() => {
                page.classList.remove("animate_content");
            }, 2000);
        }
    }, []);

    return (
        <div className="projects-page-container">
            <div className="projects-landing">
                <div className="project-headline">
                    <div className="project-header-img">
                        <img src={project} alt="project header" />
                    </div>
                    <div className="project-page-header">
                        <p>
                            WHERE<br />
                            IDEAS<br />
                            <span>BEGIN.</span>
                        </p>
                        <div className="project-page-headline-btn">
                            <a href="#project">See my work</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="project" className="projects-container">
                <div className="project">
                    <div className="project-img">
                        <a
                            href="https://e-commerce-webpage.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project2}
                                alt="peak performance landing page"
                            />
                        </a>
                    </div>
                    <div className="project-info">
                        <h2 className="project-title">E-Commerce Shopping Website</h2>
                        <p>
                            Designed and implemented a high-performance e-commerce website using the MERN stack, leveraging React and
                            Context API to deliver a dynamic and seamless user experience, enhancing customer engagement and satisfaction.
                        </p>
                        <p>
                            Built a robust backend with Node.js and Express, utilizing RESTful APIs for seamless communication with a
                            MongoDB database, ensuring efficient data handling and high performance
                        </p>
                        <p>
                            Delivered an efficient and user-friendly e-commerce platform, implementing robust authentication mechanisms to
                            enhance security and provide a seamless login and logout experience for users.
                        </p>
                        <div className="project-tools">
                            <p>React.js</p>
                            <p>Node JS</p>
                            <p>Express JS</p>
                            <p>Tailwind CSS</p>
                            <p>Mongo DB</p>
                        </div>
                        <div className="project-btns">
                            <a
                                href="https://e-commerce-webpage.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Demo
                            </a>
                            <a
                                href="https://github.com/saumyaranjanbehera/mern_e_commerce_website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img">
                        <a
                            href="https://saumyaranjanbehera.github.io/Weather-App/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project1}
                                alt="alibi esports landing page"
                            />
                        </a>
                    </div>
                    <div className="project-info">
                        <h2 className="project-title">Weather Forecast(Web Application)</h2>
                        <p>
                            Designed and built an engaging weather forecasting web application using HTML, CSS, and JavaScript, effectively
                            incorporating a Weather API for real-time data. Implemented user-centric features to ensure a seamless and
                            intuitive user experience.
                        </p>
                        <p>
                            This website defaults to showing the weather in New Delhi and predicts the weather for the next 7
                            days.Additionally, this website also shows the current date and time.
                        </p>
                        <div className="project-tools">
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Weather API</p>

                        </div>
                        <div className="project-btns">
                            <a
                                href="https://saumyaranjanbehera.github.io/Weather-App/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Demo
                            </a>
                            <a
                                href="https://github.com/saumyaranjanbehera/Diet-Shopping-Website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
