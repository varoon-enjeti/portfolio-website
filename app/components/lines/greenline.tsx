import React from "react";
import { greenProps, SetStateType } from '../types';

const Greenline: React.FC<greenProps> = ({ setSkills }) => {
    return (
        <div className="relative">
            <div className="bg-green h-6 w-[calc(100%-50px-472px)] absolute top-[393px] left-[218px] tl-tr-br-bl sit"></div>
            <div className="bg-green h-[220px] nb:h-[328px] w-6 absolute top-[393px] left-[218px] tl-tr-br-bl sil">
                <button onClick={() => {setSkills(true)}} type="button" className="open-btn top-[198px] nb:top-[306px]">
                    <p className="selection-txt">Skills</p>
                </button>
            </div>
            <div className="bg-green h-6 w-[90px] absolute top-[418px] left-[calc(100%-50px-472px+186px)] rotate-45 tl-tr-br-bl sibr"></div>
            <div className="bg-green h-6 w-[200px] top-[442px] left-[calc(100%-50px-472px+243px)] absolute tl-tr-br-bl sir"></div>
        </div>
    );
}

export default Greenline;