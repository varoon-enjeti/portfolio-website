import React from "react";
import { blueProps, SetStateType } from '../types';

const Blueline: React.FC<blueProps> = ({ setContact }) => {
    return (
        <div className="relative">
            <div className="bg-blue w-[84px] lg:w-[calc(100%-50px-840px)] h-6 absolute top-[417px] left-[calc(100%-500px)] lg:left-[473px] tl-tr-br-bl sib"></div>
            <div className="bg-blue w-6 h-[112px] nb:h-[159px] absolute top-[417px] left-[calc(100%-500px)] lg:left-[473px] tl-tr-br-bl sil"></div>
            <div className="bg-blue h-6 w-[calc(100%-585px)] lg:w-[390px] absolute top-[505px] nb:top-[552px] left-[105px] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-[112px] w-6 absolute top-[417px] left-[calc(100%-440px)] lg:left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sir"></div>
            <div className="bg-blue h-6 w-[153px] absolute top-[505px] left-[calc(100%-440px)] lg:left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-6 w-[180px] absolute top-[561px] left-[calc(100%-333px)] lg:left-[calc(100%-50px-840px+449px+107px)] tl-tr-br-bl rotate-45 sibr">
                <button onClick={() => {setContact(true)}} type="button" className="open-btn" id="selection-contact">
                    <p className="selection-txt">Contact</p>
                </button>
            </div>
        </div>
    )
}

export default Blueline;