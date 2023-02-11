import { ReactNode } from 'react';

type ModalType = {
	children?: ReactNode;
};

const Modal = ({ children }: ModalType) => {
	return (
		<div
			className={`fixed top-0 left-0 w-screen z-50 h-screen backdrop-blur-sm p-16`}
		>
			<div
				className={`text-center bg-white m-auto rounded-xl dark:bg-darkGrey-700 border-[.5px] border-grey-200 dark:border-darkGrey-300 
        h-full w-full overflow-auto drop-shadow-lg`}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
