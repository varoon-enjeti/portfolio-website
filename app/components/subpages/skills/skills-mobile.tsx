import Image from "next/image";
import React, { useState, useEffect } from "react";
import { greenProps, SetStateType } from "../../types";

const SkillsMobile: React.FC<greenProps> = ({ setSkills }) => {
	return (
		<div className="h-full w-full flex flex-col">
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
				<div className="font-sans text-green font-bold tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-4 3xl:mt-1">
					Skills
				</div>
				<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">
					Skills - Mobile View
				</div>
			</div>
		</div>
	);
};

export default SkillsMobile;
