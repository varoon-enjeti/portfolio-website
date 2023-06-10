import React from 'react'
import '../../styles/pages-styles/about.css';
import headshot from "../../resources/headshot.png";

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
                    {/* <img src={headshot} alt="headshot" className="headshot"/> */}
                    <div className="education">
                        <p className="edu-title">Education</p>
                        <p className="edu-lower">Northwestern University</p>
                        <p className="edu-lower">Bachelor's of Arts - Computer Science</p>
                        <p className="edu-lower">Class of 2025</p>
                    </div>
                </div>
                <div className="about-right">
                     <div className="experience">
                        <p className="exp-title">Experience</p>
                        <div className="exp-line"></div>
                     </div>
                </div>
            </div>
        </div>
    );
}