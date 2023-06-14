import React from 'react';
import "../../../styles/pages-styles/page-component-styles/projcard.css"

export default function ProjCard({name, description, tools, image, link, id}) {
    const bannerImageStyle = {
        width: `100%`,
        height: `100%`,
        background: `url(${image})`
    };

    return (
        <div className="projcard" id={id}>
            <div className="proj-frame" style={bannerImageStyle}></div>
        </div>
    );
}