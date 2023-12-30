import React from "react";
import { yellowProps, SetStateType } from '../types';

const Yellowline: React.FC<yellowProps> = ({ setAbout }) => {
    return (
        <div className="relative">
            <div className="bg-yellow h-6 w-[calc(100%-50px-580px)] absolute top-[369px] left-[282px] tl-tr-br-bl sib"></div>
            <div className="bg-yellow h-32 w-6 absolute top-[265px] left-[282px] tl-tr-br-bl sitl">
                <button onClick={() => {setAbout(true)}} type="button" className="open-btn">
                    <p className="selection-txt">About</p>
                </button>
            </div>
            <div className="bg-yellow h-[370px] w-6 absolute top-[72px] left-[calc(100%-50px-580px+382px)] rotate-45 tl-tr-br-bl sitr"></div>
        </div>
    );
}

export default Yellowline;