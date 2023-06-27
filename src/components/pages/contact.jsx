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
            <div className="contact-bottom">
                <form className="contact-box">
                    <input className='cont-form' type="text" placeholder='Name' />
                    <input className='cont-form' type="text" placeholder='Email' />
                    <textarea className='cont-form' id='message' type="text" placeholder='Message' />
                </form>
            </div>
        </div>
    );
}