import { expcardProps } from "../../types";

const Expcard: React.FC<expcardProps> = ({ role, company, date, twcss }) => {
	return (
		<div
			className={`h-[43px] alg:h-[73px] 3xl:h-[91px] w-[108px] alg:w-[210px] 3xl:w-[262px] bg-[#DEDEDE] border-darkgrey border-[2px] alg:border-[3px] rounded-[7px] alg:rounded-[10px] flex flex-col gap-[3px] alg:gap-1 3xl:gap-[8px] ${twcss}`}
		>
			<div className="font-sans text-darkgrey text-[8px] alg:text-[15px] 3xl:text-[18px] h-[8px] alg:h-[15px] 3xl:h-[18px] font-bold ml-[3px] alg:mx-1 -mt-[10px] alg:-mt-1 3xl:mt-[-2px] 3xl:mx-[6px]">
				{role}
			</div>
			<div className="font-sans text-darkgrey text-[8px] alg:text-[15px] 3xl:text-[18px] h-[8px] alg:h-[15px] 3xl:h-[18px] ml-[3px] alg:mx-1 3xl:mt-0 3xl:mx-[6px]">
				{company}
			</div>
			<div className="font-sans text-darkgrey text-[8px] alg:text-[15px] 3xl:text-[18px] h-[8px] alg:h-[15px] 3xl:h-[18px] font-light ml-[3px] alg:mx-1 3xl:mt-0 3xl:mx-[6px]">
				{date}
			</div>
		</div>
	);
};

export default Expcard;
