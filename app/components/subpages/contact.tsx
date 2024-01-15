'use client'
import React, { useState, useEffect } from 'react';
import { blueProps, SetStateType } from '../types';

const Contact: React.FC<blueProps> = ({ setContact }) => {
    return (
        <div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
            <button onClick={() => {setContact(false)}} className="absolute w-[40px] h-[40px] bg-blue rounded-[13px] ml-[5px] mt-[5px] close">
                <div className="absolute top-[-0.5px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-45 rounded-full"></div>
                <div className="absolute top-[-0.5px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
            </button>
            <div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">Coming Soon!</div>
        </div>
    );
}

export default Contact;