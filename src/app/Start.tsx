import ButtonsPage from '../pages/buttons/buttons';
import Navbar from '../components/containers/Navbar';
import Screen from '../components/containers/Screen';
import { useState } from 'react';
import { ReactComponent as Home } from '../components/svgs/Home.svg';
import { ReactComponent as Settings } from '../components/svgs/Settings.svg';

const Start = () => {
	const HomeNavbarItem = {
		icon: <Home className="text-[1.4rem]" />,
		label: 'Home',
	};

	const SettingsNavbarItem = {
		icon: <Settings className="text-[1.4rem]" />,
		label: 'Settings',
	};

	const [currentPage, setCurrentPage] = useState<number>(0);
	const pages = [ButtonsPage, ButtonsPage];
	const navbarItems = [HomeNavbarItem, SettingsNavbarItem];

	return (
		<Screen
			pages={pages}
			currentPage={currentPage}
			navbar={
				<Navbar
					currentPage={currentPage}
					action={setCurrentPage}
					navbarItems={navbarItems}
				/>
			}
		></Screen>
	);
};

export default Start;
