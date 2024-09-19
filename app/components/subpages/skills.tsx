"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { greenProps, SetStateType } from "../types";

const Skills: React.FC<greenProps> = ({ setSkills }) => {
	return (
		<div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-4 md:border-4 border-darkgrey rounded-t-[15px]">
			<div className="flex flex-col h-full w-full">
				<div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
					<button
						onClick={() => {
							setSkills(false);
						}}
						className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-green rounded-[13px] close"
					>
						<div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
						<div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
					</button>
					<div className="font-sans text-green font-bold track tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-3 3xl:mt-1">
						Skills
					</div>
				</div>
				<div className="flex flex-col alg:flex-row justify-center items-center h-full w-full gap-4 alg:gap-6">
					<div className="w-[350px] alg:w-[545px] h-[205px] alg:h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[25px] alg:text-[38px] mt-1 alg:mt-2 ml-2 h-[31px] alg:h-[45px]">
							Technical Skills
						</div>
						<div className="flex flex-col h-full w-full">
							<div className="flex w-full h-1/2 items-center justify-center gap-5">
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/python.png"
										alt="Python"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										Python
									</div>
								</div>
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/cpp.png"
										alt="C/C++"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										C/C++
									</div>
								</div>
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/java.png"
										alt="Java"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										Java
									</div>
								</div>
							</div>
							<div className="flex w-full h-1/2 items-center justify-center gap-5 -mt-[2px] alg:-mt-0">
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/ts.png"
										alt="TypeScript"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										TypeScript
									</div>
								</div>
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/node.png"
										alt="Node.js"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										Node.js
									</div>
								</div>
								<div className="w-[95px] alg:w-[155px] h-[75px] alg:h-[155px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box flex flex-col items-center justify-center gap-1 alg:gap-2">
									<Image
										src="/react.png"
										alt="React"
										width={500}
										height={500}
										className="h-[30px] alg:h-[60px] w-[30px] alg:w-[60px] rounded-full border-darkgrey border-[2px] alg:border-[3px] exp"
									/>
									<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[25px] h-[21px] alg:h-[38px] flex items-center justify-center">
										React
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[350px] alg:w-[230px] h-[155px] alg:h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[25px] alg:text-[38px] mt-1 alg:mt-2 ml-2 h-[45px]">
							Languages
						</div>
						<div className="flex alg:flex-col h-full w-full justify-center items-center gap-[10px]">
							<div className="flex flex-col justify-center items-center w-[70px] alg:w-[210px] h-[85px] alg:h-[75px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/usa.png"
									alt="USA Flag"
									width={500}
									height={500}
									className="h-[30px] alg:h-[36px] w-[30px] alg:w-[36px] rounded-full border-darkgrey border-[3px] alg:border-[3px] exp mt-2"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] -mt-1">
									English
								</div>
							</div>
							<div className="flex flex-col justify-center items-center w-[70px] alg:w-[210px] h-[85px] alg:h-[75px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/ind.png"
									alt="India Flag"
									width={500}
									height={500}
									className="h-[30px] alg:h-[36px] w-[30px] alg:w-[36px] rounded-full border-darkgrey border-[3px] alg:border-[3px] exp mt-2"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] -mt-1">
									Telugu
								</div>
							</div>
							<div className="flex flex-col justify-center items-center w-[70px] alg:w-[210px] h-[85px] alg:h-[75px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/sk.png"
									alt="South Korea Flag"
									width={500}
									height={500}
									className="h-[30px] alg:h-[36px] w-[30px] alg:w-[36px] rounded-full border-darkgrey border-[3px] alg:border-[3px] exp mt-2"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] -mt-1">
									Korean
								</div>
							</div>
							<div className="flex flex-col justify-center items-center w-[70px] alg:w-[210px] h-[85px] alg:h-[75px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/esp.png"
									alt="Spain Flag"
									width={500}
									height={500}
									className="h-[30px] alg:h-[36px] w-[30px] alg:w-[36px] rounded-full border-darkgrey border-[3px] alg:border-[3px] exp mt-2"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] -mt-1">
									Spanish
								</div>
							</div>
						</div>
					</div>
					<div className="w-[350px] alg:w-[230px] h-[155px] alg:h-[400px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[25px] alg:text-[38px] mt-1 alg:mt-2 ml-2 h-[45px]">
							Other
						</div>
						<div className="flex alg:flex-col h-full w-full justify-center items-center gap-[10px]">
							<div className="flex flex-col gap-[6px] alg:gap-2 justify-center items-center w-[150px] alg:w-[210px] h-[85px] alg:h-[160px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/sail.png"
									alt="Sailing Icon"
									width={500}
									height={500}
									className="h-[35px] alg:h-[55px] w-[40px] alg:w-[63px] exp"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] h-[20px] alg:h-[38px] flex items-center justify-center">
									Sailing
								</div>
							</div>
							<div className="flex flex-col gap-[6px] alg:gap-2 justify-center items-center w-[150px] alg:w-[210px] h-[85px] alg:h-[160px] bg-lightergrey border-darkgrey border-[3px] alg:border-[3.5px] rounded-[15px] box">
								<Image
									src="/drums.png"
									alt="Drum Set Icon"
									width={500}
									height={500}
									className="h-[35px] alg:h-[55px] w-[40px] alg:w-[63px] exp"
								/>
								<div className="font-sans font-bold text-darkgrey tracking-[-0.04em] text-[15px] alg:text-[20px] h-[20px] alg:h-[38px] flex items-center justify-center">
									Drum Set
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
