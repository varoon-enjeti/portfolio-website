"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { yellowProps, SetStateType } from "../../types";
import Expcard from "./expcard";

const AboutMobile: React.FC<yellowProps> = ({ setAbout }) => {
	return (
		<div className="h-full w-full flex flex-col">
			<div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
				<button
					onClick={() => {
						setAbout(false);
					}}
					className="w-[40px] h-[40px] bg-yellow rounded-[13px] close"
				>
					<div className="relative top-[-1px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-45 rounded-full"></div>
					<div className="relative top-[-36px] left-[15px] w-1 h-[35px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
				</button>
				<div className="font-sans text-yellow font-bold tracking-[-0.04em] text-[45px] subptext mr-4">
					About
				</div>
				<div className="-ml-[6px] absolute w-full h-[calc(100%-50px)] top-[50px] flex gap-3 flex-col justify-center items-center text-darkgrey">
					<div className="flex gap-3 justify-center align-middle">
						<div className="w-[185px] h-[367px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col">
							<div className="w-full h-[77px] flex mx-1 mt-1">
								<Image
									src="/headshot.jpg"
									alt="Profile Picture"
									width={500}
									height={500}
									className="h-[75px] w-[75px] rounded-[15px] border-darkgrey border-[3px] exp"
								/>
								<div className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[12px] ml-1 mr-1 text-wrap">{`Hi, I'm Varoon. Thanks for stopping by- I'm a senior studying CS at Northwestern`}</div>
							</div>
							<div className="w-full h-[192px] flex flex-col">
								<div className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[12px] mx-1 text-wrap">
									{`University with interests in embedded systems, IoT, and autonomous systems. My coursework focuses on the intersection of software and hardware, and I'm hoping to create code that interacts with our physical world. I am also absolutely fascinated with transit maps, so I used them as inspiration to design this website! Outside of CS, I am an avid `}
									<a
										href="https://www.strava.com/athletes/117919395"
										target="_blank"
										className="inline-block font-sans font-normal text-orange-500 tracking-[-0.04em] text-[12px] text-wrap underline runner"
									>
										runner
									</a>
									<a className="font-sans font-normal text-darkgrey tracking-[-0.04em] text-[12px]">{` sailor, and airplane enthusiast.`}</a>
								</div>
							</div>
							<div className="w-full h-[80px] flex mt-[3px]">
								<div className="ml-1 text-wrap font-sans font-normal text-darkgrey tracking-[-0.04em] text-[12px]">{`Also, I'm originally from Kansas, but I'm now plagued with constantly moving.`}</div>
								<Image
									src="/sail.jpg"
									alt="Profile Picture"
									width={500}
									height={500}
									className="h-[75px] w-[75px] rounded-[15px] border-darkgrey border-[3px] mr-1 my-1 exp"
								/>
							</div>
						</div>
						<div className="w-[150px] h-[367px] border-4 bg-white border-darkgrey rounded-[15px] box flex flex-col gap-4">
							<div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[25px] ml-2 mt-[1px] h-[27px]">
								Experience
							</div>
							<div className="w-4 h-[300px] rounded-[30px] bg-yellow ml-[10px] flex flex-col gap-16 justify-center items-center">
								<div className="exp relative w-[10px] h-[10px] bg-darkgrey border-[1px] border-lightgrey rounded-full">
									<Expcard
										role="Software Engineer Intern"
										company="Applied Materials"
										date="June 2024 - Present"
										twcss="ml-4 -my-[17px]"
									/>
								</div>
								<div className="exp relative w-[10px] h-[10px] bg-darkgrey border-[1px] border-lightgrey rounded-full">
									<Expcard
										role="Teaching Assistant"
										company="CS348:Artificial Intelligence"
										date="Aug. 2023 - June 2024"
										twcss="ml-4 -my-[17px]"
									/>
								</div>
								<div className="exp relative w-[10px] h-[10px] bg-darkgrey border-[1px] border-lightgrey rounded-full">
									<Expcard
										role="Data Analyst Intern"
										company="Kemper"
										date="June 2023 - Aug. 2023"
										twcss="ml-4 -my-[17px]"
									/>
								</div>
								<div className="exp relative w-[10px] h-[10px] bg-darkgrey border-[1px] border-lightgrey rounded-full items-center justify-center">
									<Expcard
										role="Software Engineer Intern"
										company="Ruta Health"
										date="Jan. 2023 - May 2023"
										twcss="ml-4 -my-[17px]"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[347px] h-[130px] border-4 bg-white border-darkgrey rounded-[15px] box">
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-bold text-[25px] ml-3 mt-[6px] h-[27px]">
							Education
						</div>
						<div className="font-sans text-purple-900 tracking-[-0.04em] font-normal text-[18px] ml-[13px] h-[25px]">
							Northwestern University
						</div>
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-normal text-[18px] ml-[13px] h-[25px]">
							Bachelor of Arts - Computer Science
						</div>
						<div className="font-sans text-darkgrey tracking-[-0.04em] font-normal text-[18px] ml-[13px] h-[25px]">
							Class of 2025
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMobile;
