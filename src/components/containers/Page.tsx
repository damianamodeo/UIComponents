import Modal from '@UICOMPONENTS/containers/Modal';
import Subpage from '@UICOMPONENTS/containers/Subpage';
import Button from '@UICOMPONENTS/inputs/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { ElementType, useState } from 'react';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? '100%' : '-100%',
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? '100%' : '-100%',
		};
	},
};

type PageType = {
	subPages: any;
	currentPage?: Boolean;
};

const Page = ({ subPages, currentPage }: PageType) => {
	const [page, setPage] = useState<number>();
	const [direction, setDirection] = useState<number>();
	const [modal, setModal] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<any>();

	const setCurrentSubpage = (
		newPage: number,
		direction: number,
		modal: boolean,
		modalContent: any
	) => {
		newPage && setPage(newPage);
		direction && setDirection(direction);
		modal !== undefined && setModal(modal);
		modalContent && setModalContent(modalContent);
	};

	const Header = subPages[!page ? 0 : page].headerComponent;
	const Content = subPages[!page ? 0 : page].contentComponent;

	const content = 3;

	return (
		<>
			{modal && <Modal>{modalContent}</Modal>}
			<div
				className={`grow flex flex-col overflow-auto bg-white ${
					currentPage ? null : 'hidden'
				}`}
			>
				<Header setCurrentSubpage={setCurrentSubpage} />
				<AnimatePresence
					initial={false}
					mode="popLayout"
					custom={direction}
				>
					<motion.div
						className={`grow flex flex-col overflow-auto  dark:bg-black
			`}
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'tween', duration: 0.2 },
							opacity: { duration: 0.2 },
						}}
					>
						<Content
							currentSubpage={page}
							setCurrentSubpage={setCurrentSubpage}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
};

export default Page;
