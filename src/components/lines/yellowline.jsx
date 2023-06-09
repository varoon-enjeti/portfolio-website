import React from 'react';
import '../../styles/line-styles/yellowline.css';

// color, position, orientation

export default function Yellowline({setAbout}) {
    return (
        <div className="yellowline">
            <div className="ylv">
                <button onClick={() => {setAbout(true)}} type="button" className="open-btn">
                    <p className="section-txt">About</p>
                </button>
            </div>
            <div className="ymh"></div>
            <div className="ydr"></div>
        </div>
    )
}