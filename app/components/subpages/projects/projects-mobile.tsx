import { redProps } from "../../types";

const ProjectsMobile: React.FC<redProps> = ({ setProject }) => {
	return (
		<div className="flex h-full w-full">
			<div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
				<button
					onClick={() => {
						setProject(false);
					}}
					className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-red rounded-[13px] close"
				>
					<div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
					<div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
				</button>
				<div className="font-sans text-red font-bold track tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-1 3xl:mt-1">
					Projects
				</div>
				<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex justify-center items-center text-darkgrey">
					Projects - Mobile (Coming Soon...)
				</div>
			</div>
		</div>
	);
};

export default ProjectsMobile;
