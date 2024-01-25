'use client'
import React, { useState, useEffect } from 'react';
import { greenProps, SetStateType } from '../types';

const Skills: React.FC<greenProps> = ({ setSkills }) => {
    return (
        <div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
            <div className="flex h-full w-full">
                <div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
                    <button onClick={() => {setSkills(false)}} className="w-[40px] h-[40px] bg-green rounded-[13px] close">
                        <div className="relative top-[-1px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-45 rounded-full"></div>
                        <div className="relative top-[-36px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
                    </button>
                    <div className="font-sans text-green font-bold track tracking-[-0.04em] text-[45px] subptext">Skills</div>
                    <div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">Renovations...</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;