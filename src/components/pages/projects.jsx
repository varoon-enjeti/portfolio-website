import React from 'react'
import '../../styles/pages-styles/projects.css';

export default function Project({setProject}) {
    return (
        <div className="subpage">
            <button onClick={() => {setProject(false)}} className="close" id="p-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="p-title">Projects</div>
        </div>
    );
}