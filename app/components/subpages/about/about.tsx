"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { yellowProps, SetStateType } from "../../types";
import Expcard from "./expcard";
import AboutDesktop from "./about-desktop";
import AboutMobile from "./about-mobile";

const About: React.FC<yellowProps> = ({ setAbout }) => {
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
				<AboutDesktop setAbout={setAbout} />
			) : (
				<AboutMobile setAbout={setAbout} />
			)}
		</div>
	);
};

export default About;
