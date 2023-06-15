import React from 'react';
import "../../../styles/pages-styles/page-component-styles/projcard.css"
import ghlogo from "../../../resources/ghlogo.png"

export default function ProjCard({name, description, tools, image, link, id}) {
    const bannerImageStyle = {
        width: `100%`,
        height: `71%`,
        background: `url(${image})`,
        backgroundSize: 'cover',
        borderRadius: "15px 15px 0px 0px",
        borderBottom: "4px solid #2C2C2C",
    };

    return (
        <div className="projcard" id={id}>
            <div className="proj-frame" style={bannerImageStyle}></div>
            <div className="proj-card-lower">
                <p className="proj-card-name">{name}</p>
                <p className="proj-card-desc">{description}</p>
                <div className="tools">
                    {tools.map((tool) => (
                        <div className="tool">{tool}</div>
                    ))}
                    <a href={link} target="_blank" className="ghlink">
                        <img src={ghlogo} alt="GitHub Logo" className="ghlogo" />
                    </a>
                </div>
            </div>
        </div>
    );
}