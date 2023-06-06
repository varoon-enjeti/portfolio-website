import React from 'react'
import '../../styles/pages-styles/about.css';

export default function About({setAbout}) {
    return (
        <div className="about">
            <button onClick={() => {setAbout(false)}} className="close" id="a-close"></button>
            <div className="title" id="a-title">About</div>
        </div>
    );
}