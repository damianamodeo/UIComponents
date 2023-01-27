import NavbarItem from '@UICOMPONENTS/containers/NavbarItem';
import { ReactNode } from 'react';

type NavbarItemType = { icon: ReactNode; label: string };

type NavbarType = {
	action: (pageNumber: number) => void;
	navbarItems: NavbarItemType[];
	currentPage: number;
};

const Navbar = ({ action, navbarItems, currentPage }: NavbarType) => {
	return (
		<ul
			className={`bg-lightGrey-300 dark:bg-darkGrey-700 h-16d landscape:h-min-xx flex`}
		>
			{navbarItems?.map((item: NavbarItemType, key: number) => {
				return (
					<li
						key={key}
						className={`${
							currentPage === key
								? 'text-secondary-500 dark:text-secondary-200'
								: null
						} flex-auto h-[3.1rem] 
							grid place-items-center 
							landscape:h-12 
							xl:hover:bg-lightGrey-400 xl:hover:text-secondary-500 
							dark:xl:hover:bg-grey-700 dark:xl:hover:text-secondary-200 
							`}
						onClick={() => {
							action(key);
						}}
					>
						{currentPage === key ? (
							<>
								<NavbarItem
									icon={navbarItems[key].icon}
									label={navbarItems[key].label}
									active
								/>
							</>
						) : (
							<>
								<NavbarItem
									icon={navbarItems[key].icon}
									label={navbarItems[key].label}
								/>
							</>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default Navbar;
