import { ReactNode } from 'react';

type ContentType = {
	background?: Boolean | string;
	children?: ReactNode;

	setPageToShow?: any;
};

const Content = ({ children, background, setPageToShow }: ContentType) => {
	return (
		<div
			className={`grow flex flex-col overflow-auto
			${background === true ? 'bg-grey-100' : background} dark:bg-black`}
		>
			{children}
		</div>
	);
};

export default Content;
