import { ReactNode } from "react";

type ContentType = {
	background?: Boolean | string;
	children?: ReactNode;
};

const Content = ({ children, background }: ContentType) => {

	return (
		<div
			className={`grow flex flex-col overflow-auto
			${(background === true) ? 'bg-grey-100' : background} dark:bg-black`}
		>
			{children}
		</div>
	);
};

export default Content;
