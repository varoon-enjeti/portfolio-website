import React from 'react';
import '../../styles/line-styles/redline.css';

// color, position, orientation

export default function Redline() {
    return (
        <div className="redline">
            <div className="rlv"></div>
            <div className="rmh"></div>
            <div className="rrv"></div>
        </div>
    );
}