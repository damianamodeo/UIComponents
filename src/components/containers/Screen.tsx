import Page from '@UICOMPONENTS/containers/Page';
import { ComponentType, ReactNode } from 'react';

type ScreenType = {
	pages: any;
	currentPage: number;
	navbar: ReactNode;
};

const Screen = ({ pages, currentPage, navbar }: ScreenType) => {
	return (
		<div
			className={`flex flex-col fixed h-screen w-screen bg-lightGrey-300 dark:bg-darkGrey-300 dark:text-white`}
		>
			{pages.map((page: any, key: number) => {
				if (currentPage === key) {
					return (
						<Page
							key={key}
							currentPage
							subPages={page}
						></Page>
					);
				}
				return (
					<Page
						key={key}
						subPages={page}
					></Page>
				);
			})}
			{navbar}
		</div>
	);
};

export default Screen;
