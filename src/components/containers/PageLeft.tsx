import { Transition } from '@headlessui/react';
import { useState } from 'react';

type PageLeftType = { children: any; showing: boolean };

const PageLeft = ({ children, showing }: PageLeftType) => {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<Transition
			className={`grow flex flex-col overflow-auto bg-white marker:`}
			show={showing}
			enter="transition-all duration-300"
			enterFrom="opacity-0-xxx translate-x-36"
			enterTo="opacity-100-xxx translate-x-0"
			leave="transition-all duration-500"
			leaveFrom="opacity-100-xxx translate-x-0"
			leaveTo="opacity-0-xxx translate-x-36"
			unmount={false}
      appear={true}
		>
			{children}
		</Transition>
	);
};

export default PageLeft;
