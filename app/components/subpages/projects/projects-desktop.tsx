import { redProps } from "../../types";
import Projcard from "./projcard";

const ProjeectDesktop: React.FC<redProps> = ({ setProject }) => {
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
					<div className="h-0 alg:h-6 min-w-[1025px] w-[80%] bg-red rounded-[30px] flex items-center justify-center gap-[340px]">
						<div className="relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
							<Projcard
								title="Bluetooth File Transfer Application"
								description="Wireless file transfer application for sending and receiving files on Windows."
								ghlink="https://github.com/varoon-enjeti"
								image="/bluetooth.webp"
								styling="-mt-[247px]"
								image_styling="scale-[1.45] translate-y-[1px]"
							/>
							<Projcard
								title="Northwestern AI - Website"
								description="Source code for the Northwestern AI Club website featuring user sign-ups."
								ghlink="https://github.com/varoon-enjeti/northwestern-ai-club"
								image="/nuai.jpeg"
								styling="mt-[55px]"
								image_styling="scale-[1.53] translate-y-[-0.5px]"
							/>
						</div>
						<div className="relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
							<Projcard
								title="MDP Reinforcement Learning Algorithm"
								description="Markov Decision Process algorithm for an autonomous drone."
								ghlink="https://github.com/varoon-enjeti/mdp-pathfinder"
								image="/mdp.webp"
								styling="-mt-[247px]"
								image_styling="scale-[1.4]"
							/>
							<Projcard
								title="Portfolio Website"
								description="Source code for this website, written using TypeScript, React, & Node.js."
								ghlink="https://github.com/varoon-enjeti/portfolio-website"
								image="/pfp.png"
								styling="mt-[55px]"
								image_styling=""
							/>
						</div>
						<div className="relative left-[2px] w-5 h-5 bg-darkgrey border-2 border-lightgrey rounded-full">
							<Projcard
								title="Mixed-Language Interpreting Speech-to-Text API"
								description="Speech-to-Text API capable of transcribing mixed-language inputs."
								ghlink="https://github.com/varoon-enjeti/mli-stt-api"
								image="/mlt.webp"
								styling="-mt-[247px]"
								image_styling="scale-[1.78] translate-y-[7px]"
							/>
							<Projcard
								title="Pac-Man++"
								description="Fully functional Pac-Man game written in C++, utilizing the GE211 engine."
								ghlink="https://github.com/varoon-enjeti/Pac-Man/tree/main"
								image="/pacman.png"
								styling="mt-[55px]"
								image_styling="scale-[1.6] rounded-none"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjeectDesktop;
