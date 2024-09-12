"use client";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { blueProps, SetStateType } from "../types";

const Contact: React.FC = ({ setContact }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Handle input change
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(formData);

		// EmailJS config
		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

		// Send email
		emailjs.send(serviceID, templateID, formData, userID).then(
			(result) => {
				alert("Message successfully sent!");
			},
			(error) => {
				console.error(error.text);
				alert("Failed to send the message, please try again.");
			}
		);

		// Clear the form
		setFormData({
			name: "",
			email: "",
			message: "",
		});
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
					<div className="absolute w-full h-[calc(100%-50px)] top-[50px] flex flex-col gap-5 justify-center items-center text-darkgrey">
						<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
							<input
								className="w-[480px] h-[50px] rounded-[15px] border-[4px] border-darkgrey text-[1.25rem] font-light text-darkgrey px-[10px] bg-white"
								type="text"
								id="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								className="w-[480px] h-[50px] rounded-[15px] border-[4px] border-darkgrey text-[1.25rem] font-light text-darkgrey px-[10px] bg-white"
								type="email"
								id="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<textarea
								className="w-[480px] h-[250px] rounded-[15px] border-[4px] border-darkgrey text-[1.25rem] font-light text-darkgrey px-[10px] bg-white"
								id="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<button
								className="w-[480px] h-[50px] rounded-[15px] border-[4px] border-darkgrey text-[1.25rem] font-medium text-white px-[10px] bg-blue exp"
								id="submit-btn"
								type="submit"
							>
								Contact Me!
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
