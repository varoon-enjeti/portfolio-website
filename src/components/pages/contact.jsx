import React from 'react'
import { useState } from "react";
import '../../styles/pages-styles/contact.css';

export default function Contact({setContact}) {
    return (
        <div className="subpage">
            <button onClick={() => {}} className="close" id="c-close">
                <div className="x"></div>
                <div className="x" id="right"></div>
            </button>
            <div className="title" id="c-title">Contact</div>
            <div className="contact-bottom">
                <form className="contact-box">
                    <input className='cont-form' type="text" id='cname' placeholder='Name' />
                    <input className='cont-form' type="email" id='cemail' placeholder='Email' />
                    <textarea className='cont-form' id='cmessage' type="text" placeholder='Message' />
                    <button className='cont-form' id='cont-btn' type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}