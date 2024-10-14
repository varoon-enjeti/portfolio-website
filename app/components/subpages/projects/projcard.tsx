import { projcardProps } from "../../types";
import Image from "next/image";

const Projcard: React.FC<projcardProps> = ({
	title,
	description,
	ghlink,
	image,
	styling,
	image_styling,
}) => {
	return (
		<div
			className={`w-[290px] h-[227px] -ml-[135px] bg-white rounded-[20px] border-darkgrey border-[3px] exp flex flex-col p-3 gap-3 ${styling}`}
		>
			<div className="h-[60px] w-[60px] overflow-hidden rounded-full border-darkgrey border-[3px] exp">
				<Image
					src={image}
					alt="Experience Image"
					width={500}
					height={500}
					className={`h-full w-full rounded-full ${image_styling}`}
				/>
			</div>
			<div className="flex flex-col gap-[6px]">
				<div className="font-sans text-lg leading-6 font-bold">{title}</div>
				<div className="font-sans text-sm font-light">{description}</div>
				<a
					href={ghlink}
					target="_blank"
					className="flex gap-2 items-center h-[24px] group"
				>
					<Image
						src="/link.png"
						alt="Github Link Icon"
						width={500}
						height={500}
						className="h-[16px] w-[16px] group-hover:opacity-0 transition duration-300"
					/>
					<Image
						src="/link - blue.png"
						alt="Github Link Icon (Blue)"
						width={500}
						height={500}
						className="h-[16px] w-[16px] absolute opacity-0 group-hover:opacity-100 transition duration-300"
					/>
					<div className="font-sans text-[16px] font-light text-black group-hover:text-sky-600 transition duration-300">
						github.com
					</div>
				</a>
			</div>
		</div>
	);
};

export default Projcard;
