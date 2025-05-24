import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDraftingCompass, FaEnvelopeOpen } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			{/* Background grids */}
			<div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
				<div
					className={cn(
						"absolute inset-0",
						"[background-size:40px_40px]",
						"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
						"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
					)}
				/>
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						We Turn Ideas into Fast, Scalable & Stunning Digital Products
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Artikov Tech — Building the Future of the Web"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						High-converting websites tailored for businesses ready to grow,
						stand out, and win online
					</p>

					<div className="flex gap-8">
						<MagicButton
							title="Explore Our Work"
							icon={<FaDraftingCompass />}
							position="right"
							type="dark"
							href="#about"
						/>

						<MagicButton
							title="Contact Us"
							icon={<FaEnvelopeOpen />}
							position="right"
							type="light"
							href="mailto:artikov.dev@gmail.com"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
