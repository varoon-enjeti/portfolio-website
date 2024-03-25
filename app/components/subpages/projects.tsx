'use client'
import React, { useState, useEffect } from 'react';
import { redProps, SetStateType } from '../types';

const Projects: React.FC<redProps> = ({ setProject }) => {
    return (
        <div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
            <div className="flex h-full w-full">
                <div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
                    <button onClick={() => {setProject(false)}} className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-red rounded-[13px] close">
                        <div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
                        <div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
                    </button>
                    <div className="font-sans text-red font-bold track tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-1 3xl:mt-1">Projects</div>
                    <div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">Renovations...</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;