import React from 'react';
import { useState } from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import Greenline from './lines/greenline';
import Blueline from './lines/blueline';
import '../styles/background.css';
import Project from './pages/projects';

export default function Background() {
    const [project_live, setProjectLive] = useState(true);

    function handleProjects() {
        if (project_live) {
            setProjectLive(false);
        } else {
            setProjectLive(true);
        }
    }


    return (
        <div className="background">
            <Header />
            <div className="lines">
                <Yellowline />
                <Redline />
                <Greenline />
                <Blueline />
            </div>
            <div className="pages">
                <Project state={project_live} func={handleProjects}/>
            </div>
        </div>
    );
}