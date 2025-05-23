/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { techStack } from "@/data";
import { InfiniteVerticalCards } from "./InfiniteVerticalScroll";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-rows-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	id?: number;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("artikov.dev@gmail.com");
		setCopied(true);
	};

	return (
		<div
			className={cn(
				"group/bento shadow-input row-span-1 overflow-hidden flex flex-col justify-between space-y-4 relative rounded-3xl border border-neutral-200 transition duration-200 hover:shadow-xl dark:border-white/[0.1]  dark:shadow-none ",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(81, 142, 196, 1) 79%, rgba(6, 22, 54, 1) 100%)",
			}}
		>
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center")}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					}`}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className={cn(imgClassName, "object-cover object-center")}
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
					</BackgroundGradientAnimation>
				)}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
						{description}
					</div>
					<div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
						{title}
					</div>

					{id === 2 && <GlobeDemo />}

					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							<InfiniteVerticalCards
								items={techStack}
								speed="slow"
								pauseOnHover={true}
							/>
							<InfiniteVerticalCards
								items={techStack}
								direction="down"
								speed="slow"
								pauseOnHover={true}
							/>
						</div>
					)}

					{id === 6 && (
						<div className="mt-5 relative">
							<div className={`absolute -bottom-5 right-0`}>
								<Lottie
									options={{
										loop: copied,
										autoplay: copied,
										animationData: animationData,
										rendererSettings: {
											preserveAspectRatio: "xMidYMid slice",
										},
									}}
								/>
							</div>
							<MagicButton
								title={copied ? "Email Copied!" : "Copy Email"}
								icon={<IoCopyOutline />}
								position="left"
								otherClasses="!bg-[#161a31]"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
