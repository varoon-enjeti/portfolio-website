'use client'
import React, { useState, useEffect } from 'react';
import { greenProps, SetStateType } from '../types';

const Skills: React.FC<greenProps> = ({ setSkills }) => {
    return (
        <div className="w-full h-[calc(100%-108px)] bg-lightgrey absolute top-[108px] left-0 z-10 border-4 border-darkgrey rounded-t-[15px]">
            <button onClick={() => {setSkills(false)}} className="absolute w-[40px] h-[40px] bg-green rounded-[13px] ml-[5px] mt-[5px] close">
                <div className="absolute top-[-0.5px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-45 rounded-full"></div>
                <div className="absolute top-[-0.5px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
            </button>
        </div>
    );
}

export default Skills;