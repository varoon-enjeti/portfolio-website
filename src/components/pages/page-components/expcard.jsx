import React from 'react';
import "../../../styles/pages-styles/page-component-styles/expcard.css"

export default function ExpCard({role, company, date, id}) {
    return (
        <div className="expcard" id={id}>
            <p className="exp-card-role">{role}</p>
            <p className="exp-card-company">{company}</p>
            <p className="exp-card-date">{date}</p>
        </div>
    );
}