import React from "react";


const Glucian: React.FC = () => {
    return (
        <>
            <div className="experience bloomberg">
                <p className="experience-role">Web Development Intern </p>
                <p className="experience-company">Glucian Technology</p>
                <div className="experience-description">
                    <ul>
                        <li>
                            Utilized HTML, CSS, and Bootstrap to create visually appealing and user-friendly portfolio web pages, effectively
                            highlighting professional work, skills, and ongoing courses. This resulted in increased client inquiries and project
                            collaborations.
                        </li>
                        <li>
                            • Developed clean and well-documented code for these web pages, ensuring they were easy to understand for users
                            and reflected my commitment to quality and clarity.

                        </li>

                    </ul>
                </div>
            </div>
            <div className="experience-toolkit-container">
                <div className="experience-toolkit">
                    <img src="/toolkit-logos/html.png" alt="python logo" />
                    <img src="/toolkit-logos/css.png" alt="javascript logo" />
                    <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
                </div>
            </div>
        </>
    );
};

export default Glucian;
