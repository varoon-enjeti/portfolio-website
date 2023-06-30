import React from 'react'
import { useState } from "react";
import '../../styles/pages-styles/contact.css';
import linkd from "../../resources/linkd.svg";
import mail from "../../resources/mail.svg";
import git from "../../resources/git.svg";

export default function Contact({setContact}) {
    return (
        <div className="subpage">
            <button onClick={() => {setContact(false)}} className="close" id="c-close">
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
                <div className="cont-btns">
                    <a href="" className="linkd">
                        <img src={linkd} className="link-img" />
                    </a>
                    <a href="mailto:varoon.enjeti@gmail.com?subject=Let's Connect!" className="mail">
                        <img src={mail} className="mail-img" />
                    </a>
                    <a href="" className="git">
                        <img src={git} className="git-img" />
                    </a>                    
                </div>
            </div>
        </div>
    );
}