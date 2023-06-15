import React from 'react'
import ProjCard from './page-components/projcard';
import '../../styles/pages-styles/projects.css';
import pfp from "../../resources/pfp.png";

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
                    <div className="proj-cards">
                        <div className="proj-top">
                            <ProjCard
                                name={"MDP - Pathfinder"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"onep"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"twop"}
                            />
                        </div>
                        <div className="proj-bot">
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"threep"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"fourp"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"Markov Decision Process - Reinforcement Learning Algorithm"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={pfp}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"fivep"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}