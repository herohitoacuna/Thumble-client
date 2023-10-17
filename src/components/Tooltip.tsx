type TooltipProps = {
	children: React.ReactNode;
	text: string;
	className?: string;
};

export const Tooltip = (props: TooltipProps) => {
	const { children, text } = props;

	return (
		<div className="peer">
			{children}
			<div className="absolute invisible peer-hover:visible -bottom-[3rem] translate-x-[50%] right-[50%] bg-gray-200 p-2 rounded-md text-gray-700 text-xs w-fit whitespace-nowrap min-w-[50px]">
				{text}
			</div>
		</div>
	);
};
