import { ReactNode } from "react";

type ModalType = {
  children?: ReactNode;
};

const Modal = ({ children }: ModalType) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-screen z-50 h-screen backdrop-blur-sm py-16 px-4
        `}
    >
      <div
        className={`
          text-center bg-white m-auto rounded-xl 
          h-full w-full overflow-auto drop-shadow-lg
          border-[.5px] border-grey-200 
          dark:bg-darkGrey-700 dark:border-darkGrey-300 
          `}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
