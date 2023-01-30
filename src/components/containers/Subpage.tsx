import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
	enter: (direction: 'forward' | 'back') => {
		return {
			x: direction === 'forward' ? 1000 : -1000,
			// opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: 'forward' | 'back') => {
		return {
			zIndex: 0,
			x: direction === 'forward' ? 1000 : -1000,
			// opacity: 0,
		};
	},
};

type SubPageType = {
	subPage: any;
	currentSubpage: number;
	direction: 'forward' | 'back';
	setCurrentSubpage: (pageAndDirection: [number, 'forward' | 'back']) => void;
};

const Subpage = ({
	subPage,
	currentSubpage,
	direction,
	setCurrentSubpage,
}: SubPageType) => {
	// const [[page, direction], setPage] = useState([0, 0]);

	// const paginate = (newDirection: number) => {
	// 	setPage([page + newDirection, newDirection]);
	// };

	const Header = subPage.header;
	const Content = subPage.content;
	return (
		<AnimatePresence
			initial={false}
			// mode="popLayout"
			custom={direction}
		>
			<div className={`grow flex flex-col overflow-auto bg-white`}>
				<Header
					currentSubpage={currentSubpage}
					setCurrentSubpage={setCurrentSubpage}
				/>
				<motion.div
					className={`grow flex flex-col overflow-auto bg-black
			`}
					key={currentSubpage}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'tween', duration: 2 },
						opacity: { duration: 2 },
					}}
				>
					<Content
						currentSubpage={currentSubpage}
						setCurrentSubpage={setCurrentSubpage}
					/>
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default Subpage;
