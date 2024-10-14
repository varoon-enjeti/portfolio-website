"use client";
import React, { useState, useEffect } from "react";
import { redProps, SetStateType } from "../../types";
import Projcard from "./projcard";
import ProjectsDesktop from "./projects-desktop";
import ProjectsMobile from "./projects-mobile";

const Projects: React.FC<redProps> = ({ setProject }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
			{windowWidth > 1058 ? (
				<ProjectsDesktop setProject={setProject} />
			) : (
				<ProjectsMobile setProject={setProject} />
			)}
		</div>
	);
};

export default Projects;
