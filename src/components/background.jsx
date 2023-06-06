import React, { use } from 'react';
import { useState } from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import Greenline from './lines/greenline';
import Blueline from './lines/blueline';
import '../styles/background.css';
import Project from './pages/projects';
import About from './pages/about';
import WIP from './wip';

export default function Background() {
    const [projectLive, setProject] = useState(false);
    const [aboutLive, setAbout] = useState(false);
    const [interestsLive, setInterests] = useState(false);
    const [contactLive, setContact] = useState(false);

    return (
        <div className="background">
            <Header 
                projectLive={projectLive}
                setProject={setProject}
                aboutLive={aboutLive}
                setAbout={setAbout}
            />
            <div className="lines">
                <Yellowline setAbout={setAbout}/>
                <Redline setProject={setProject}/>
                <Greenline setInterests={setInterests}/>
                <Blueline setContact={setContact}/>
            </div>
            <div className="pages">
                {projectLive ? (<Project setProject={setProject}/>) : (null)}
                {aboutLive ? (<About setAbout={setAbout}/>) : (null)}
                {/* {aboutInterests ? (<About setInterests={setInterests}/>) : (null)}
                {aboutContact ? (<About setContact={setContact}/>) : (null)} */}
            </div>
            <WIP />
        </div>
    );
}