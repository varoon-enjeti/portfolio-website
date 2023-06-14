import React from 'react';
import '../../styles/pages-styles/about.css';
import ExpCard from './page-components/expcard';

export default function About({setAbout}) {
    return (
        <div className="subpage">
            <button onClick={() => {setAbout(false)}} className="close" id="a-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="a-title">About</div>
            <div className="about-content">
                <div className="about-left">
                    <div className="headshot-frame"></div>
                    <div className="education">
                        <p className="edu-title">Education</p>
                        <p className="edu-lower">Northwestern University</p>
                        <p className="edu-lower">Bachelor's Degree - Computer Science</p>
                        <p className="edu-lower">Class of 2025</p>
                    </div>
                </div>
                <div className="about-right">
                     <div className="experience">
                        <p className="exp-title">Experience</p>
                        <div className="exp-line-container">
                            <div className="exp-line">
                                <div className="exp-cards">
                                <ExpCard 
                                        role={"Data Analyst Intern"}
                                        company={"Kemper"}
                                        date={"Summer 2023"}
                                        id={"one"}
                                    />
                                    <ExpCard 
                                        role={"Software Engineer Intern"}
                                        company={"Ruta Health"}
                                        date={"Jan. 2023 - May 2023"}
                                        id={"two"}
                                    />
                                    <ExpCard 
                                        role={"Software Developer"}
                                        company={"ESW - AutoAquaponics"}
                                        date={"Sep. 2022 - Dec. 2022"}
                                        id={"three"}
                                    />
                                    <ExpCard 
                                        role={"Software Developer"}
                                        company={"Envision Capital Management"}
                                        date={"Jan. 2022 - May 2022"}
                                        id={"four"}
                                    />
                                </div>
                            </div>
                            <div className="exp-dots">
                                <div className="dot" id="oned"></div>
                                <div className="dot" id="twod"></div>
                                <div className="dot" id="threed"></div>
                                <div className="dot" id="fourd"></div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}