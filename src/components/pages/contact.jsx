import React from 'react'
import '../../styles/pages-styles/contact.css';

export default function Contact({setContact}) {
    return (
        <div className="subpage">
            <button onClick={() => {setContact(false)}} className="close" id="c-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="c-title">Contact</div>
        </div>
    );
}