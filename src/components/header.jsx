import React from 'react';
import '../styles/header.css';
import pfp from "../resources/pfp.png";

export default function Header() {
    return(
        <div className="header">
            <a href="#" className="name">Varoon Enjeti</a>
            <div className="header-bottom">
                <a href="/" className="pfp-clck">
                    <img src={pfp} alt="" className="pfp" />
                </a>
                <div className="transit-text">
                    <div className="transit-txt">Transit Map</div>
                    <div className="transit-txt">Portfolio</div>
                </div>
            </div>
        </div>
    );
}