import { ReactNode } from "react";

type NavbarItemType = {
	icon: ReactNode | string;
	active?: Boolean;
	label: string;
};

const NavbarItem = ({ icon, active, label }: NavbarItemType) => {
	return (
		<div
			className={`${
				active ? 'text-secondary-500 dark:text-secondary-200' : null
			} flex flex-col landscape:flex-row landscape:justify-center `}
		>
			<div className={`mx-auto landscape:mx-0`}>{icon}</div>
			<div className={` landscape:w-2`}></div>
			<div className={`my-auto landscape:mx-0 text-[0.65rem]`}>{label}</div>
		</div>
	);
};

export default NavbarItem;
