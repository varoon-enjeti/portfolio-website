import React from 'react';
import '../styles/header.css';
import pfp from "../resources/pfp.png";
import Project from './pages/projects';

export default function Header({projectLive, setProject, aboutLive, setAbout, interestsLive, setInterests, contactLive, setContact}) {

    function handleClick() {
        if (projectLive) {
            setProject(false)
        } else if (aboutLive) {
            setAbout(false)
        } else if (interestsLive) {
            setInterests(false)
        } else if (contactLive) {
            setContact(false)
        }
    }


    return(
        <div onClick={() => {handleClick()}} type="button" className="header">
            <button className="name">Varoon Enjeti</button>
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