import React from 'react'
import '../../styles/pages-styles/interests.css';

export default function Interests({setInterests}) {
    return (
        <div className="subpage">
            <button onClick={() => {setInterests(false)}} className="close" id="i-close"></button>
            <div className="title" id="i-title">Interests</div>
        </div>
    );
}