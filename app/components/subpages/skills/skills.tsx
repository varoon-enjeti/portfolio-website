"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { greenProps, SetStateType } from "../../types";
import SkillsDesktop from "./skills-desktop";
import SkillsMobile from "./skills-mobile";

const Skills: React.FC<greenProps> = ({ setSkills }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-4 md:border-4 border-darkgrey rounded-t-[15px]">
			{windowWidth > 1058 ? (
				<SkillsDesktop setSkills={setSkills} />
			) : (
				<SkillsMobile setSkills={setSkills} />
			)}
		</div>
	);
};

export default Skills;
