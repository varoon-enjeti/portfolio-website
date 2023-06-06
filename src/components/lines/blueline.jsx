import React from 'react';
import '../../styles/line-styles/blueline.css';

export default function Blueline({setContact}) {
    return (
        <div className="blueline">
            <div className="bhl"></div>
            <div className="bvl"></div>
            <div className="bhm"></div>
            <div className="bvr"></div>
            <div className="bhr"></div>
            <div className="bdr">
                <button onClick={() => {setContact(true)}} type="button" className="open-btn" id="blue-btn">
                    <p className="section-txt" id="blue-txt">Contact</p>
                </button>
            </div>
        </div>
    );
}