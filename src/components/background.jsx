import React from 'react';
import { useState } from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import Greenline from './lines/greenline';
import Blueline from './lines/blueline';
import '../styles/background.css';
import Project from './pages/projects';
import WIP from './wip';

export default function Background() {
    const [projectLive, setProject] = useState(false);

    return (
        <div className="background">
            <Header setProject={setProject}/>
            <div className="lines">
                <Yellowline />
                <Redline setProject={setProject}/>
                <Greenline />
                <Blueline />
            </div>
            <div className="pages">
                {projectLive ? (<Project setProject={setProject}/>) : (null)}
            </div>
            <WIP />
        </div>
    );
}