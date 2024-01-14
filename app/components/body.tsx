'use client'
import React, { useState, useEffect, useRef } from 'react';
import Header from "./header";
import Redline from "./lines/redline";
import Yellowline from "./lines/yellowline";
import Greenline from "./lines/greenline";
import Blueline from "./lines/blueline";
import Projects from './subpages/projects';
import About from './subpages/about';
import Skills from './subpages/skills';
import Contact from './subpages/contact';
import { CSSTransition } from 'react-transition-group';

export default function Body() {
    const nodeRef = useRef(null);

    // Subpage States
    const [projectLive, setProject] = useState(false);
    const [aboutLive, setAbout] = useState(false);
    const [skillsLive, setSkills] = useState(false);
    const [contactLive, setContact] = useState(false);

    // Width x Height
    const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0));
    const [height, setHeight] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 0));

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Time : HH:MM:SS AM/PM

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const strHours = hours < 10 ? `0${hours}` : `${hours}`;
        const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const strSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${strHours}:${strMinutes}:${strSeconds} ${ampm}`;
    };

    return (
        <div className="w-[calc(100%-50px)] h-[calc(100%-50px)]">
            <Header 
                projectLive={projectLive}
                setProject={setProject}
                aboutLive={aboutLive}
                setAbout={setAbout}
                skillsLive={skillsLive}
                setSkills={setSkills}
                contactLive={contactLive}
                setContact={setContact}
            />
            <div className="2xl:w-full 2xl:h-[60%] 2xl:absolute 2xl:top-1/3 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/3">
                <Yellowline setAbout={setAbout}/>
                <Redline setProject={setProject}/>
                <Greenline setSkills={setSkills}/>
                <Blueline setContact={setContact}/>
            </div>
            <div className="flex h-full w-full justify-between items-end">
                <div className="font-sans font-light text-[22px] tracking-[-0.04em] text-darkgrey pl-[7px] data">{width} x {height}</div>
                <div className="font-sans font-light text-[22px] tracking-[-0.04em] text-darkgrey data">{formatTime(time)}</div>
            </div>
            <div className="">
                <CSSTransition in={projectLive} timeout={800} classNames="transition" unmountOnExit onEnter={() => setProject(true)} onExited={() => setProject(false)}>
                    <Projects setProject={setProject}/>
                </CSSTransition>
                <CSSTransition in={aboutLive} timeout={800} classNames="transition" unmountOnExit onEnter={() => setAbout(true)} onExited={() => setAbout(false)}>
                    <About setAbout={setAbout}/>
                </CSSTransition>
                <CSSTransition in={skillsLive} timeout={800} classNames="transition" unmountOnExit onEnter={() => setSkills(true)} onExited={() => setSkills(false)}>
                    <Skills setSkills={setSkills}/>
                </CSSTransition>
                <CSSTransition in={contactLive} timeout={800} classNames="transition" unmountOnExit onEnter={() => setContact(true)} onExited={() => setContact(false)}>
                    <Contact setContact={setContact}/>
                </CSSTransition>
            </div>
        </div>
    );
}