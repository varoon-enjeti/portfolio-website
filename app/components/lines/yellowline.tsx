import React from "react";
import { yellowProps, SetStateType } from '../types';

const Yellowline: React.FC<yellowProps> = ({ setAbout }) => {
    return (
        <div className="relative">
            <div className="bg-yellow h-3 md:h-6 w-[calc(100%-45px)] md:w-[calc(100%-50px-580px)] absolute top-[234px] md:top-[369px] left-[4px] md:left-[282px] tl-tr-br-bl sib"></div>
            <div className="bg-yellow h-[85px] md:h-32 w-3 md:w-6 absolute top-[161px] md:top-[265px] left-[4px] md:left-[282px] tl-tr-br-bl sitl">
                <button onClick={() => {setAbout(true)}} type="button" className="open-btn relative left-[1px] md:left-[2px] w-[10px] md:w-5 h-[10px] md:h-5 bg-darkgrey border-[1px] md:border-2 border-lightgrey rounded-full -top-[3px] md:top-[2px]">
                    <p className="font-sans text-[15px] md:text-[30px] text-darkgrey font-semibold relative left-[15px] md:left-[23px] -top-[12px] md:-top-[9px] tracking-[-0.04em]">About</p>
                </button>
            </div>
            <div className="bg-yellow h-[70px] md:h-[370px] w-3 md:w-6 absolute top-[184px] md:top-[72px] left-[calc(100%-30px)] md:left-[calc(100%-50px-580px+382px)] rotate-45 tl-tr-br-bl sitr"></div>
        </div>
    );
}

export default Yellowline;