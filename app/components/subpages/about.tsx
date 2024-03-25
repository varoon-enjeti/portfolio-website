'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { yellowProps, SetStateType } from '../types';
import Expcard from '../tools/expcard';

const About: React.FC<yellowProps> = ({ setAbout }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
            {windowWidth > 1058 ?
            (
                <div className="h-full w-full flex flex-col">
                    <div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
                        <button onClick={() => {setAbout(false)}} className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-yellow rounded-[13px] close">
                            <div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
                            <div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
                        </button>
                        <div className="font-sans text-yellow font-bold tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-4 3xl:mt-1">About</div>
                    </div>
                    <div className="h-full w-full flex justify-center items-center gap-6 3xl:gap-10">
                        <div className="flex flex-col h-full gap-6 3xl:gap-10 items-center justify-center">
                            <div className="w-[512px] 3xl:w-[640px] h-[309px] 3xl:h-[379px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
                                <div className="w-full h-[100px] 3xl:h-[125px] flex mx-2 mt-2">
                                    <Image
                                        src="/headshot.jpg"
                                        alt='Profile Picture'
                                        width={500}
                                        height={500}
                                        className='h-[100px] w-[100px] 3xl:h-[125px] 3xl:w-[125px] rounded-[15px] border-darkgrey border-[3px] exp'
                                    />
                                    <div className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[20px] 3xl:text-[25px] ml-2 3xl:mr-2 text-wrap">Hi, I'm Varoon. Welcome to my website! I'm an avid coder, sailor, runner, and airplane enthusiast. As of lately, I've spent my freetime studying Korean, playing bass guitar, or</div>
                                </div>
                                <div className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[20px] 3xl:text-[25px] ml-2 mt-1 text-wrap">watching March Madness. I am also absolutely fascinated with transit maps, so I used it as inspiration to design this website. Coding is my form of creative expression, and it</div>
                                <div className="w-full h-[100px] 3xl:h-[125px] flex">
                                    <div className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[20px] 3xl:text-[25px] mx-2 text-wrap">allows me to bring my ideas to life! My coding journey began freshman year of college, evolving into a passion. I hope you learned a bit more about me- thanks for stopping by!</div>
                                    <Image
                                        src="/sail.jpg"
                                        alt='Profile Picture'
                                        width={500}
                                        height={500}
                                        className='h-[100px] w-[100px] 3xl:h-[125px] 3xl:w-[125px] rounded-[15px] border-darkgrey border-[3px] mt-1 mr-2 exp'
                                    />
                                </div>
                            </div>
                            <div className="w-[512px] 3xl:w-[640px] h-[180px] 3xl:h-[225px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col gap-[10px] 3xl:gap-[22px]">
                                <div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[45px] 3xl:text-[56px] mt-4 3xl:mt-[20px] ml-3 3xl:ml-[15px] h-[30px]">Education</div>
                                <div className="font-sans text-purple-900 tracking-[-0.04em] font-normal text-[25px] 3xl:text-[31px] ml-[14px] 3xl:ml-[17.5px] h-[25px]">Northwestern University</div>
                                <div className="font-sans text-darkgrey tracking-[-0.04em] font-normal text-[25px] 3xl:text-[31px] ml-[14px] 3xl:ml-[17.5px] h-[25px]">Bachelor of Arts - Computer Science</div>
                                <div className="font-sans text-darkgrey tracking-[-0.04em] font-normal text-[25px] 3xl:text-[31px] ml-[14px] 3xl:ml-[17.5px] h-[25px]">Class of 2025</div>
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <div className="w-[504px] 3xl:w-[630px] h-[513px] 3xl:h-[646px] border-4 bg-white border-darkgrey rounded-[15px] box">
                                <div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[45px] 3xl:text-[56px] mt-4 ml-3 h-[45px]">Experience</div>
                                <div className="w-full h-[calc(100%-61px)] flex items-center justify-center">
                                    <div className="w-6 h-[350px] 3xl:h-[437px] bg-yellow rounded-[30px] flex flex-col gap-16 3xl:gap-[80px] pt-[39px] 3xl:pt-[49px]">
                                        <div className="exp relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
                                            <Expcard
                                                role='Software Engineer Intern'
                                                company='Applied Materials'
                                                date='Summer 2024' 
                                                twcss='ml-8 -mt-7 3xl:ml-[40px] 3xl:-mt-[36px]'
                                            />
                                        </div>
                                        <div className="exp relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
                                            <Expcard
                                                role='Teaching Assistant'
                                                company='CS 348 : Artificial Intelligence'
                                                date='Aug. 2023 - Present' 
                                                twcss='-ml-[225px] -mt-7 3xl:-ml-[282px] 3xl:-mt-[36px]'
                                            />
                                        </div>
                                        <div className="exp relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
                                            <Expcard
                                                role='Data Analyst Intern'
                                                company='Kemper'
                                                date='June 2023 - Aug. 2023' 
                                                twcss='ml-8 -mt-7 3xl:ml-[40px] 3xl:-mt-[36px]'
                                            />
                                        </div>
                                        <div className="exp relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
                                            <Expcard
                                                role='Software Engineer Intern'
                                                company='Ruta Health'
                                                date='Jan. 2023 - May 2023' 
                                                twcss='-ml-[225px] -mt-7 3xl:-ml-[282px] 3xl:-mt-[36px]'
                                            />                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className="h-full w-full flex flex-col">
                    <div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
                        <button onClick={() => {setAbout(false)}} className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-yellow rounded-[13px] close">
                            <div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
                            <div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
                        </button>
                        <div className="font-sans text-yellow font-bold tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-4 3xl:mt-1">About</div>
                        <div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">About - Mobile View</div>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default About;