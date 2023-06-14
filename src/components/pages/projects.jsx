import React from 'react'
import ProjCard from './page-components/projcard';
import '../../styles/pages-styles/projects.css';

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
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={"../../../resources/pfp.png"}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"onep"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={"../../../resources/pfp.png"}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"twop"}
                            />
                        </div>
                        <div className="proj-bot">
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={"../../../resources/pfp.png"}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"threep"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={"../../../resources/pfp.png"}
                                link={"https://github.com/varoon-enjeti/portfolio-website"}
                                id={"fourp"}
                            />
                            <ProjCard
                                name={"Portfolio Website"}
                                description={"varoon.xyz"}
                                tools={["Python", "Artificial Intelligence"]}
                                image={"../../../resources/pfp.png"}
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