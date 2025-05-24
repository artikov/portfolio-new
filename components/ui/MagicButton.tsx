import React from "react";

const MagicButton = ({
	title,
	icon,
	position,
	handleClick,
	type,
	href,
	otherClasses,
}: {
	title: string;
	icon: React.ReactNode;
	position: string;
	handleClick?: () => void;
	otherClasses?: string;
	type?: string;
	href?: string;
}) => {
	const Tag = href ? "a" : "button";
	return (
		<Tag
			href={href}
			className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(226,203,255,0.3)] transition-all duration-300 ease-in-out"
			onClick={handleClick}
		>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
			<span
				className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm backdrop-blur-3xl gap-2 font-bold ${otherClasses} ${
					type == "dark" ? "bg-slate-950 text-white" : "text-black"
				}`}
			>
				{position === "left" && icon}
				{title}
				{position === "right" && icon}
			</span>
		</Tag>
	);
};

export default MagicButton;
