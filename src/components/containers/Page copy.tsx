import Subpage from '@UICOMPONENTS/containers/Subpage';
import Button from '@UICOMPONENTS/inputs/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { ElementType, useState } from 'react';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
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
			x: direction < 0 ? 1000 : -1000,
		};
	},
};

type PageType = {
	subPages: any;
	currentPage?: Boolean;
};

const Page = ({ subPages, currentPage }: PageType) => {
	const [page,  setPage] = useState<number>();
	const [ direction, setDirection] = useState<number>();

	const setCurrentSubpage = (newPage: number, direction: number) => {
		setPage(newPage);
		setDirection(direction);
	};

	const Header = subPages[!page ? 0 : page].header;
	const Content = subPages[!page ? 0 : page].content2;

	const content = 3;

	return (
		<>
			<div className={`grow flex flex-col overflow-auto bg-white 	${currentPage ? null : 'hidden'}`}>
				<Header setCurrentSubpage={setCurrentSubpage} />
				<AnimatePresence
					initial={false}
					mode="popLayout"
					custom={direction}
				>
					<motion.div
						className={`grow flex flex-col overflow-auto dark:bg-black
			`}
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'tween', duration: .5 },
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
