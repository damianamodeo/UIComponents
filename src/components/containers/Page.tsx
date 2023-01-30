import Subpage from '@UICOMPONENTS/containers/Subpage';
import { AnimatePresence } from 'framer-motion';
import { ElementType, useState } from 'react';

type PageType = {
	subPages: any;
	currentPage?: Boolean;
};

const Page = ({ subPages, currentPage }: PageType) => {
	const [[currentSubpage, direction], setCurrentSubpage] = useState<
		[number, 'forward' | 'back']
	>([0, 'forward']);

	return (
		<div
			className={`${
				currentPage ? null : 'hidden'
			} grow flex flex-col overflow-auto bg-white dark:bg-black`}
		>
			{
				<Subpage
					subPage={subPages[currentSubpage]}
					currentSubpage={currentSubpage}
					direction={direction}
					setCurrentSubpage={setCurrentSubpage}
				/>
			}
		</div>
	);
};

export default Page;
