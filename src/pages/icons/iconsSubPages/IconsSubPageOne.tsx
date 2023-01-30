import Inputs from '@PAGES/Inputs';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/ButtonSimple';
import { useState } from 'react';

const IconsSubPageOne = ({ currentSubpage, setCurrentSubpage }: any) => {
	const [modalState, setModalState] = useState(false);

	const header = (
		<Header
			headerLeft={null}
			title={'Icons'}
			headerRight={null}
		></Header>
	);

	const content = (
		<Content>
			<div className="m-6">
				<Button
					color="primary"
					action={() => {
						setCurrentSubpage(1);
					}}
				>
					JW Library Icons
				</Button>
			</div>
			
		</Content>
	);
	return (
		<>
			{header}
			{content}
		</>
	);
};

export default IconsSubPageOne;
