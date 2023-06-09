import React from 'react'
import { useState, useEffect } from 'react';
import ProjCard from './page-components/projcard';
import '../../styles/pages-styles/projects.css';
import pfp from "../../resources/pfp.png";
import mdp from "../../resources/mdp.jpg";
import mlt from "../../resources/mlt.jpg";
import pacman from "../../resources/pacman.jpg";
import calc from "../../resources/calc.png";

export default function Project({setProject}) {
    return (
        <div className="subpage">
            <button onClick={() => {setProject(false)}} className="close" id="p-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="p-title">Projects</div>
            <div className="proj-content">
                <div className="proj-line">                        
                    <div className='proj-cards'>
                        <div className="proj-top">
                            <ProjCard
                                name={"MDP - Pathfinder"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={mdp}
                                link={"https://github.com/varoon-enjeti/mdp-pathfinder"}
                                id={"onep"}
                            />
                            <ProjCard
                                name={"mlt-stt-api"}
                                description={"Mixed-Language Interpreting Speech-to-Text API"}
                                tools={["Python", "Deepgram API", "Pandas"]}
                                image={mlt}
                                link={"https://github.com/varoon-enjeti/mli-stt-api"}
                                id={"twop"}
                            />
                        </div>
                        <div className="proj-bot">
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["React.js", "Node.js"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"threep"}
                            />
                            <ProjCard
                                name={"Pac-Man++"}
                                description={"Fully Functional Pac-Man Game"}
                                tools={["C++", "GE211"]}
                                image={pacman}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"fourp"}
                            />
                            <ProjCard
                                name={"4-Function Calculator"}
                                description={"Fully Functional Calculator with a GUI"}
                                tools={["Python", "Tkinter"]}
                                image={calc}
                                link={"https://github.com/varoon-enjeti/4-Function-Calculator"}
                                id={"fivep"}
                            />
                        </div>
                    </div>
                    <div className="proj-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}