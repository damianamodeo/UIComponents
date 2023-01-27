import { ElementType } from 'react';

type SubPageType = {
	subPage: ElementType;
	currentSubpage: number;
	setCurrentSubpage: (subPageNumber: number) => void;
};

const Subpage = ({
	subPage: CurrentSubPage,
	currentSubpage,
	setCurrentSubpage,
}: SubPageType) => {
	return (
		<div className={`grow flex flex-col overflow-auto bg-white`}>
			<CurrentSubPage
				currentSubpage={currentSubpage}
				setCurrentSubpage={setCurrentSubpage}
			/>
		</div>
	);
};

export default Subpage;
