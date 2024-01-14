import React from "react";
import { greenProps, SetStateType } from '../types';

const Greenline: React.FC<greenProps> = ({ setSkills }) => {
    return (
        <div className="relative">
            <div className="bg-green h-3 md:h-6 w-[calc(100%-45px)] md:w-[calc(100%-50px-472px)] absolute top-[246px] md:top-[393px] left-[4px] md:left-[218px] tl-tr-br-bl sit"></div>
            <div className="bg-green h-[300px] md:h-[220px] nb:h-[328px] w-3 md:w-6 absolute top-[246px] md:top-[393px] left-[4px] md:left-[218px] tl-tr-br-bl sil">
                <button onClick={() => {setSkills(true)}} type="button" className="open-btn relative left-[1px] md:left-[2px] w-[10px] md:w-5 h-[10px] md:h-5 bg-darkgrey border-[1px] md:border-2 border-lightgrey rounded-full top-[calc(100%-15px)] md:top-[198px] nb:top-[306px]">
                    <p className="font-sans text-[15px] md:text-[30px] text-darkgrey font-semibold relative left-[15px] md:left-[23px] -top-[12px] md:-top-[9px] tracking-[-0.04em]">Skills</p>
                </button>
            </div>
            <div className="bg-green h-3 md:h-6 w-[65px] md:w-[90px] absolute top-[265px] md:top-[418px] left-[calc(100%-60px)] md:left-[calc(100%-50px-472px+186px)] rotate-45 tl-tr-br-bl sibr"></div>
            <div className="bg-green h-3 md:h-6 w-[160px] md:w-[200px] top-[353px] md:top-[442px] left-[calc(100%-162px)] md:left-[calc(100%-50px-472px+243px)] absolute tl-tr-br-bl sir"></div>
            <div className="bg-green h-[80px] md:h-0 w-3 md:w-0 absolute left-[calc(100%-14px)] top-[285px] tl-tr-br-bl sir"></div>
            <div className="bg-green h-[120px] md:h-0 w-3 md:w-0 absolute left-[calc(100%-162px)] top-[356px] tl-tr-br-bl sir"></div>
        </div>
    );
}

export default Greenline;