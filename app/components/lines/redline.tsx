import React from "react";
import { redProps, SetStateType } from '../types';

const Redline: React.FC<redProps> = ({ setProject }) => {
    return (
        <div className="relative">
            <div className="bg-red h-3 md:h-6 w-[calc(100%-84px)] md:w-[164px] lg:w-[calc(100%-50px-760px)] absolute top-[222px] md:top-[345px] left-[31px] md:left-[314px] tl-tr-br-bl sit"></div>
            <div className="bg-red h-[280px] md:h-[140px] nb:h-[310px] w-3 md:w-6 absolute top-[222px] md:top-[345px] left-[31px] md:left-[314px] tl-tr-br-bl sir"></div>
            <div className="bg-red h-[115px] md:h-[247px] w-3 md:w-6 absolute top-[118px] md:top-[122px] left-[calc(100%-64px)] md:left-[454px] lg:left-[calc(100%-50px-760px+290px)] tl-tr-br-bl sir">
                <button onClick={() => {setProject(true)}} type="button" className="open-btn relative left-[1px] md:left-[2px] w-[10px] md:w-5 h-[10px] md:h-5 bg-darkgrey border-[1px] md:border-2 border-lightgrey rounded-full -top-[3px] md:top-[2px]">
                    <p className="font-sans text-[15px] md:text-[30px] text-darkgrey font-semibold relative left-[15px] md:left-[23px] -top-[12px] md:-top-[9px] tracking-[-0.04em]">Projects</p>
                </button>
            </div>
        </div>
    );
}

export default Redline;
