'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { greenProps, SetStateType } from '../types';

const Skills: React.FC<greenProps> = ({ setSkills }) => {
    return (
        <div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-4 md:border-4 border-darkgrey rounded-t-[15px]">
            <div className="flex flex-col h-full w-full">
                <div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
                    <button onClick={() => {setSkills(false)}} className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-green rounded-[13px] close">
                        <div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
                        <div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
                    </button>
                    <div className="font-sans text-green font-bold track tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-3 3xl:mt-1">Skills</div>
                    {/* <div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">Renovations...</div> */}
                </div>
                <div className="flex justify-center items-center h-full w-full gap-6">
                    <div className="alg:w-[545px] h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
                        <div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[38px] mt-2 ml-2 h-[45px]">Technical Skills</div>
                        <div className="flex flex-col h-full w-full">
                            <div className="flex w-full h-1/2 items-center justify-center gap-5">
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/python.png"
                                        alt='Python'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">Python</div>
                                </div>
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/cpp.png"
                                        alt='C/C++'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">C/C++</div>
                                </div>
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/java.png"
                                        alt='Java'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">Java</div>
                                </div>
                            </div>
                            <div className="flex w-full h-1/2 items-center justify-center gap-5">
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/ts.png"
                                        alt='TypeScript'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">TypeScript</div>
                                </div>
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/node.png"
                                        alt='Node.js'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">Node.js</div>
                                </div>
                                <div className="w-[155px] h-[155px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src="/react.png"
                                        alt='React'
                                        width={500}
                                        height={500}
                                        className='h-[60px] w-[60px] rounded-full border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[25px]">React</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alg:w-[230px] h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
                        <div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[38px] mt-2 ml-2 h-[45px]">Languages</div>
                        <div className="flex flex-col h-full w-full justify-center items-center gap-[10px]">
                            <div className="w-[210px] h-[75px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                            <div className="w-[210px] h-[75px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                            <div className="w-[210px] h-[75px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                            <div className="w-[210px] h-[75px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                        </div>
                    </div>
                    <div className="alg:w-[230px] h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
                        <div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[38px] mt-2 ml-2 h-[45px]">Other</div>
                        <div className="flex flex-col h-full w-full justify-center items-center gap-[10px]">
                            <div className="w-[210px] h-[160px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                            <div className="w-[210px] h-[160px] bg-lightergrey border-darkgrey border-[3.5px] rounded-[15px] box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;