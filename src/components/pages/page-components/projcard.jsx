import React from 'react';
import { useState, useEffect } from 'react';
import "../../../styles/pages-styles/page-component-styles/projcard.css"
import ghlogo from "../../../resources/ghlogo.png"

export default function ProjCard({name, description, tools, image, link, id}) {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
        setWindowSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const bannerImageStyle = {
        width: `100%`,
        height: `71%`,
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        borderRadius: "15px 15px 0px 0px",
        borderBottom: "4px solid #2C2C2C",
        backgroundPositionY: -25
    };

    const bannerMobile = {
        width: `100%`,
        height: `71%`,
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        borderRadius: "8px 8px 0px 0px",
        borderBottom: "2px solid #2C2C2C",
        backgroundPositionY: -25
    }

    const isMobile = windowSize < 613;

    return (
        <div className="projcard" id={id}>
            {isMobile ? <div className="proj-frame" style={bannerMobile}></div> : <div className="proj-frame" style={bannerImageStyle}></div>}
            <div className="proj-card-lower">
                <p className="proj-card-name">{name}</p>
                {(id === "threep") ? (<a href='varoon.xyz' className="proj-card-desc">{description}</a>) : (<p className="proj-card-desc">{description}</p>)}
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