import React from 'react';
import '../../styles/line-styles/redline.css';
import Projects from '../pages/projects';

// color, position, orientation

export default function Redline() {
    return (
        <div className="redline">
            <div className="rlv"></div>
            <div className="rmh"></div>
            <div className="rrv">
                <button onClick={() => {}} type="button" className="open-btn">
                    <p className="section-txt">Projects</p>
                </button>
            </div>
            {/* <Projects /> */}
        </div>
    );
}