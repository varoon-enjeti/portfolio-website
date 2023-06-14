import React from 'react';
import "../../../styles/pages-styles/page-component-styles/projcard.css"

export default function ProjCard({name, description, tools, image, link, id}) {
    return (
        <div className="projcard" id={id}></div>
    );
}