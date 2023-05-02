import React from 'react';
import { useState } from 'react';
import '../../styles/pages-styles/projects.css';

export default function Projects() {
    const [p_live, setPLive] = useState(false);

    function handleProjects() {
        setPLive = True;
        document.getElementsByClassName("projects").style
    }

    return (
        <div className="projects">
            <button onClick={() => {}} className="close" id="p-close"></button>
            <div className="title" id="p-title">Projects</div>
        </div>
    );
}