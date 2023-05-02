import React from 'react';
import { useState } from 'react';
import '../../styles/pages-styles/projects.css';

export default function Projects() {
    const [p_live, setPLive] = useState(true);

    function handleProjects() {
        if (p_live) {
            setPLive(false);
        } else {
            setPLive(true);
        }
    }

    let marg = {margin: "100% 0"};
    if (p_live) {
        marg = {margin: 0};
    } else {
        marg = {margin: "100% 0"};
    }

    console.log(p_live)
    console.log(marg);

    return (
        <div className="projects" style={marg}>
            <button onClick={handleProjects} className="close" id="p-close"></button>
            <div className="title" id="p-title">Projects</div>
        </div>
    );
}