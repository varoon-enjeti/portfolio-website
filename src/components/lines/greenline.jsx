import React from 'react';
import '../../styles/line-styles/greenline.css';

export default function Greenline() {
    return (
        <div className="greenline">
            <div className="glv">
                <button onClick={() => {}} type="button" className="open-btn" id="green-btn">
                    <p className="section-txt" id="green-txt">Interests</p>
                </button>
            </div>
            <div className="gmh"></div>
            <div className="gdr"></div>
            <div className="ghr"></div>
            <div className="gvr"></div>
            <div className="gvb"></div>
        </div>
    )
}