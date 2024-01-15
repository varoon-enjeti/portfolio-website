import React from "react";
import { blueProps, SetStateType } from '../types';

const Blueline: React.FC<blueProps> = ({ setContact }) => {
    return (
        <div className="relative">
            <div className="bg-blue w-[calc(100%-200px)] md:w-[84px] lg:w-[calc(100%-50px-840px)] h-3 md:h-6 absolute top-[258px] md:top-[417px] left-[96px] md:left-[calc(100%-500px)] lg:left-[473px] tl-tr-br-bl sib"></div>
            <div className="bg-blue w-3 md:w-6 h-[112px] nb:h-[159px] absolute top-[258px] md:top-[417px] left-[96px] md:left-[calc(100%-500px)] lg:left-[473px] tl-tr-br-bl sil"></div>
            <div className="bg-blue h-3 md:h-6 w-[100px] md:w-[calc(100%-585px)] lg:w-[390px] absolute top-[358px] md:top-[505px] nb:top-[552px] left-[4px] md:left-[105px] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-[140px] md:h-[112px] w-3 md:w-6 absolute top-[258px] md:top-[417px] left-[calc(100%-115px)] md:left-[calc(100%-440px)] lg:left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sir"></div>
            <div className="bg-blue h-0 md:h-6 w-0 md:w-[153px] absolute top-[505px] left-[calc(100%-440px)] lg:left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-3 md:h-6 w-[80px] md:w-[140px] absolute top-[410px] md:top-[547px] left-[calc(100%-125px)] md:left-[calc(100%-327px)] lg:left-[calc(100%-50px-840px+449px+113px)] tl-tr-br-bl rotate-45 sibr">
                <button onClick={() => {setContact(true)}} type="button" className="open-btn relative left-[69px] md:left-[118px] -top-[3px] md:top-[2px] w-[10px] md:w-5 h-[10px] md:h-5 bg-darkgrey border-[1px] md:border-2 border-lightgrey rounded-full" id="selection-contact">
                    <p className="font-sans text-[15px] md:text-[30px] text-darkgrey font-semibold relative left-[15px] md:left-[23px] -top-[12px] md:-top-[9px] tracking-[-0.04em]">Contact</p>
                </button>
            </div>
        </div>
    )
}

export default Blueline;