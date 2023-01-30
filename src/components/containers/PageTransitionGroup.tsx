import { Transition } from '@headlessui/react';
import { useState } from 'react';

type PageTransitionType = {
	// children: any;
	pages: { header: any; content: any }[];
};

const PageTransition = ({ pages }: PageTransitionType) => {
	const [isShowing, setIsShowing] = useState(false);
	const [pageToShow, setPageToShow] = useState(0);

	return (
		<>
			{pages.map((page, key) => {
				const Header = page.header
				const Content = page.content
			
				return (
					<Transition
						className={`grow flex flex-col overflow-auto bg-white marker:`}
						show={pageToShow === key}
						key={key}
					>
						<Transition.Child
							enter="transition-all delay-500 duration-300"
							enterFrom="opacity-0-xxx translate-x-full"
							enterTo="opacity-100-xxx translate-x-0"
							leave="transition-all duration-500"
							leaveFrom="opacity-100-xxx translate-x-0"
							leaveTo="opacity-0-xxx -translate-x-full"
							unmount={true}
						>
							<Header setPageToShow={setPageToShow}></Header>
						</Transition.Child>
						<Transition.Child
							enter="transition-all delay-500 duration-300"
							enterFrom="opacity-0-xxx translate-x-full"
							enterTo="opacity-100-xxx translate-x-0"
							leave="transition-all duration-500"
							leaveFrom="opacity-100-xxx translate-x-0"
							leaveTo="opacity-0-xxx -translate-x-full"
							unmount={true}
							// appear="true"
						>
							<Content setPageToShow={setPageToShow}></Content>
						</Transition.Child>
					</Transition>
				);
			})}
		</>
	);
};

export default PageTransition;
