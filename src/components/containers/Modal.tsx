import { ReactNode } from "react";

type ModalType = {
	children?: ReactNode;
};

const Modal = ({ children,  }: ModalType) => {
	return (
		<div
			className={`fixed top-0 left-0 w-screen h-screen flex justify-center 
      items-center backdrop-blur-sm backdrop-brightness-90 
			backdrop-contrast-75 backdrop-opacity-90`}
		>
			<div
				className={`text-center bg-lightGrey-100 dark:bg-darkGrey-700 border-[.5px] border-grey-200 dark:border-darkGrey-300 
        h-5/6 w-5/6 m-10 overflow-auto drop-shadow-lg p-2`}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
