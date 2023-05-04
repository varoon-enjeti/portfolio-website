import React from 'react'
import '../../styles/pages-styles/projects.css';

export default function Project({state, func}) {


    let marg = {margin: "100% 0"};
    if (state) {
        marg = {margin: 0};
    } else {
        marg = {margin: "100% 0"};
    }

    return (
        <div className="projects" style={marg}>
            <button onClick={func()} className="close" id="p-close"></button>
            <div className="title" id="p-title">Projects</div>
        </div>
    );
}