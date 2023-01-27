import Subpage from '@UICOMPONENTS/containers/Subpage';
import { ElementType, useState } from 'react';

type PageType = {
	subPages: ElementType[];
	currentPage?: Boolean;
};

const Page = ({ subPages, currentPage }: PageType) => {
	const [currentSubpage, setCurrentSubpage] = useState(0);

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
					setCurrentSubpage={setCurrentSubpage}
				/>
			}
		</div>
	);
};

export default Page;
