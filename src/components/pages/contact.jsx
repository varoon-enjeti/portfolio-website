import React from 'react'
import { useState } from "react";
import '../../styles/pages-styles/contact.css';

export default function Contact({setContact}) {
    const [status, setStatus] = useState("Let's Connect!");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Lets's Connect");
        let result = await response.json();
        alert(result.status);
    };

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
                    <button className='cont-form' id='cont-btn'>{status}</button>
                </form>
            </div>
        </div>
    );
}