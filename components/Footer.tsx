/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
			<div className="w-full absolute left-0 bottom-0 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50"
				/>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to elevate <span className="text-purple">your business</span>{" "}
					with a high-impact website?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Let&apos;s collaborate to craft a digital experience that drives
					growth, builds trust, and delivers results.
				</p>
				<a href="mailto:artikov.dev@gmail.com">
					<MagicButton
						title="Let's Talk"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright &copy; {currentYear} <strong>Artikov Tech</strong>
				</p>
				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map(({ id, img }) => (
						<div
							key={id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={img} alt={img} width={20} height={20} />
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
