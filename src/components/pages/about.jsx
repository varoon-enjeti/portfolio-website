import React from 'react'
import '../../styles/pages-styles/about.css';

export default function About({setAbout}) {
    return (
        <div className="subpage">
            <button onClick={() => {setAbout(false)}} className="close" id="a-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="a-title">About</div>
        </div>
    );
}