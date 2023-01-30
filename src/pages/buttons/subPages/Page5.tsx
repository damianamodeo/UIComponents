import Inputs from '@PAGES/Inputs';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/ButtonSimple';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const IconsSubPageOne = ({ currentSubpage, setCurrentSubpage }: any) => {
	const [modalState, setModalState] = useState(false);

	const header = (
		<Header
			headerLeft={null}
			title={'5'}
			headerRight={null}
		></Header>
	);

	const content = (
		<AnimatePresence>
		<motion.div
			key="five"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
		>
			<Content>
				<div className="m-6 hideScrollbar">
					<Button
						color="primary"
						action={() => {
							setCurrentSubpage(0);
						}}
					>
					Five
					</Button>
				</div>
			</Content>
		</motion.div>
	</AnimatePresence>
	);
	return (
		<>
			{header}
			{content}
		</>
	);
};

export default IconsSubPageOne; 
