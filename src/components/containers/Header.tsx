import { ReactNode } from "react";

type HeaderType = {
	headerLeft?: ReactNode | string;
	title: ReactNode | string;
	headerRight?: ReactNode | string;
};

const Header = ({ headerLeft, title, headerRight }: HeaderType) => {
	return (
		<div>
			<div className="flex place-items-center h-12 bg-lightGrey-300 dark:bg-darkGrey-700 border border-x-0 border-t-0 border-b-[.75px] border-y-lightGrey-500 dark:border-y-darkGrey-500">
				<div className="text-secondary-500 dark:text-secondary-200">{headerLeft}</div>
				<div className="m-auto font-bold truncate">{title}</div>
				<div className="mx-4 text-secondary-500 dark:text-secondary-200">{headerRight}</div>
			</div>
		</div>
	);
};

export default Header;
