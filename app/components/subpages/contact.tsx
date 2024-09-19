"use client";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { blueProps, SetStateType } from "../types";

const Contact: React.FC<blueProps> = ({ setContact }) => {
	const [sent, setSent] = useState(0);

	const [buttonText, setButtonText] = useState("Contact Me!");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
		const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
		const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";

		setButtonText("Sending your message...");

		emailjs.send(serviceID, templateID, formData, userID).then(
			(result) => {
				setSent(1);
			},
			(error) => {
				setSent(2);
			}
		);
	};

	return (
		<div className="w-full h-[calc(100%-49px)] md:h-[calc(100%-108px)] bg-[#DEDEDE] absolute top-[49px] md:top-[108px] left-0 z-10 border-[3px] md:border-4 border-darkgrey rounded-t-[15px]">
			<div className="flex h-full w-full">
				<div className="flex h-10 w-full justify-between mx-[6px] my-[6px]">
					<button
						onClick={() => {
							setContact(false);
						}}
						className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] bg-blue rounded-[13px] close"
					>
						<div className="relative top-[-1px] 3xl:top-[0px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-45 rounded-full"></div>
						<div className="relative top-[-36px] 3xl:top-[-43px] left-[15px] 3xl:left-[20px] w-1 3xl:w-[5px] h-[35px] 3xl:h-[43.75px] bg-darkgrey rotate-[-45deg] rounded-full"></div>
					</button>
					<div className="font-sans text-blue font-bold track tracking-[-0.04em] text-[45px] 3xl:text-[56px] subptext mr-1 3xl:mt-1">
						Contact
					</div>
					{sent === 0 ? (
						<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex flex-col gap-5 justify-center items-center text-darkgrey">
							<form
								className="w-full flex flex-col gap-5 justify-center items-center"
								onSubmit={handleSubmit}
							>
								<input
									className="w-3/4 alg:w-[480px] max-w-[480px] h-[45px] alg:h-[50px] rounded-[15px] border-[3px] alg:border-[4px] border-darkgrey text-[15px] alg:text-[1.25rem] font-light text-darkgrey px-[10px] bg-white"
									type="text"
									id="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
								<input
									className="w-3/4 alg:w-[480px] max-w-[480px] h-[45px] alg:h-[50px] rounded-[15px] border-[3px] alg:border-[4px] border-darkgrey text-[15px] alg:text-[1.25rem] font-light text-darkgrey px-[10px] bg-white"
									type="email"
									id="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<textarea
									className="w-3/4 alg:w-[480px] max-w-[480px] h-[250px] rounded-[15px] border-[3px] alg:border-[4px] border-darkgrey text-[15px] alg:text-[1.25rem] font-light text-darkgrey px-[10px] resize-none bg-white"
									id="message"
									placeholder="Message"
									value={formData.message}
									onChange={handleChange}
									required
								/>
								<button
									className="w-3/4 alg:w-[480px] max-w-[480px] h-[45px] alg:h-[50px] rounded-[15px] border-[3px] alg:border-[4px] border-darkgrey text-[15px] alg:text-[1.25rem] font-medium text-white px-[10px] bg-blue exp"
									id="submit-btn"
									type="submit"
								>
									{buttonText}
								</button>
							</form>
							<div className="flex gap-5">
								<a
									href="https://www.linkedin.com/in/varoonenjeti/"
									target="_blank"
									className=""
								>
									<Image
										src="/linkedin.png"
										alt="Linkedin Logo"
										width={500}
										height={500}
										className="h-[30px] alg:h-[38px] w-[30px] alg:w-[38px] exp"
									/>
								</a>
								<a
									href="mailto:varoon.enjeti@gmail.com?subject=Let's Connect!"
									target="_blank"
									className=""
								>
									<Image
										src="/mail.png"
										alt="Mail Logo"
										width={500}
										height={500}
										className="h-[30px] alg:h-[38px] w-[40px] alg:w-[48px] exp"
									/>
								</a>
								<a
									href="https://github.com/varoon-enjeti"
									target="_blank"
									className=""
								>
									<Image
										src="/ghlogo.png"
										alt="GitHub Logo"
										width={500}
										height={500}
										className="h-[30px] alg:h-[38px] w-[30px] alg:w-[38px] exp"
									/>
								</a>
							</div>
						</div>
					) : sent === 1 ? (
						<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex flex-col gap-5 justify-center items-center text-darkgrey">
							<div className="w-1/2 flex flex-col gap-8 justify-center items-center text-center sent">
								<Image
									src="/sent.png"
									alt="Check Icon"
									width={500}
									height={500}
									className="h-[75px] alg:h-[100px] w-[75px] alg:w-[100px]"
									priority
								/>
								<div className="text-2xl alg:text-3xl font-sans text-blue font-bold track tracking-[-0.04em]">
									Thank you!
								</div>
								<div className="text-xl alg:text-2xl font-sans track tracking-[-0.04em] -mt-7">
									I look forward to reading your message.
								</div>
							</div>
						</div>
					) : (
						<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex flex-col gap-5 justify-center items-center text-darkgrey">
							<div className="w-2/3 lg:w-1/2 flex flex-col gap-8 justify-center items-center text-center sent">
								<Image
									src="/error.png"
									alt="Error Icon"
									width={500}
									height={500}
									className="h-[140px] alg:h-[175px] w-[140px] alg:w-[175px]"
									priority
								/>
								<div className="text-2xl alg:text-3xl font-sans text-red font-bold track tracking-[-0.04em] -mt-4">
									Error Sending Message!
								</div>
								<div className="text-xl alg:text-2xl font-sans track tracking-[-0.04em] -mt-7">
									It seems like there is an issue on my end. In the meantime,
									please feel free to email me.
								</div>
								<a
									href="mailto:varoon.enjeti@gmail.com?subject=Let's Connect!"
									target="_blank"
									className="text-xl alg:text-2xl font-sans track tracking-[-0.04em] text-blue underline exp"
								>
									varoon.enjeti@gmail.com
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Contact;
