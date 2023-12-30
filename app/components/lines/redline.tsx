import React from "react";
import { redProps, SetStateType } from '../types';

const Redline: React.FC<redProps> = ({ setProject }) => {
    return (
        <div className="relative">
            <div className="bg-red h-6 w-[calc(100%-50px-760px)] absolute top-[345px] left-[314px] tl-tr-br-bl sit"></div>
            <div className="bg-red h-[310px] w-6 absolute top-[345px] left-[314px] tl-tr-br-bl sir"></div>
            <div className="bg-red h-[247px] w-6 absolute top-[122px] left-[calc(100%-50px-760px+290px)] tl-tr-br-bl sir">
                <button onClick={() => {setProject(true)}} type="button" className="open-btn">
                    <p className="selection-txt">Projects</p>
                </button>
            </div>
        </div>
    );
}

export default Redline;
