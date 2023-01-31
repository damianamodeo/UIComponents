import Container from '@UICOMPONENTS/containers/Container';
import { ReactNode, useEffect, useRef, useState } from 'react';

type carouselItemsType = {
	title: string;
	content: ReactNode;
};

type CarouselType = { carouselItems: carouselItemsType[] };

const Carousel = ({ carouselItems }: CarouselType) => {
	const handleClick = (e: any, key: number) => {
		contentRefs[key].current?.scrollIntoView();
	};

	const markerRef = useRef(document.createElement('div'));

	const contentRefs = carouselItems.map(() => {
		return useRef(document.createElement('div'));
	});

	const tabRefs = carouselItems.map(() => {
		return useRef(document.createElement('div'));
	});

	

	const [active, setActive] = useState(
		carouselItems.map(() => {
			return false;
		})
	);

	useEffect(() => {
		tabRefs.forEach((ref: any, key: number) => {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setActive(
							active.map((item: any, index: number) => {
								if (index === key) {
									return true;
								}
								return false;
							})
						);
						tabRefs[key].current?.scrollIntoView();
						if (null != tabRefs[key].current) {
							markerRef.current.style.left =
								tabRefs[key].current.offsetLeft - 5 + 'px';
							markerRef.current.style.width =
								tabRefs[key].current.offsetWidth + 10 + 'px';
						}
					}
				},
				{ threshold: 0.8 }
			);
			observer.observe(contentRefs[key].current);
		});
	}, []);

	useEffect(() => {
		const changeScroll = (e: any) => {
			e.preventDefault();
			tabbar.scrollLeft += e.deltaY / 5;
		};

		const tabbar: any = document.querySelector('.tabbar');
		tabbar.addEventListener('wheel', changeScroll);

		return () => {
			tabbar?.removeEventListener('wheel', changeScroll);
		};
	});

	return (
		<>
			<div
				className={`hideScollbar tabbar relative flex bg-white dark:bg-darkGrey-1000 
				overflow-x-auto overflow-y-hidden border border-x-0 border-t-0 border-b-[1.25px] border-y-lightGrey-500 dark:border-y-darkGrey-500`}
			>
				{carouselItems.map((item: any, key: number) => {
					return (
						<div
							key={key}
							ref={tabRefs[key]}
							onClick={(e) => handleClick(e, key)}
							className={`uppercase mx-3 ${
								active[key]
									? 'font-extrabold text-secondary-500 dark:text-secondary-200'
									: ''
							}`}
						>
							<div className="my-2">{item.title}</div>
							<div className="-z-1 h-0 font-extrabold invisible">
								{item.title}
							</div>
						</div>
					);
				})}
				<div
					className="absolute left-0 bottom-0 h-[2px] bg-secondary-500 dark:bg-secondary-200 transition-all duration-300"
					ref={markerRef}
				></div>
			</div>

			<Container>
				<div
					className={`hideScollbar h-full pb-2-xx grid grid-flow-col auto-cols-[100%] overflow-x-auto snap-x snap-mandatory snap-always overflow-y-auto `}
				>
					{carouselItems.map((item: any, key: number) => {
						return (
							<div
								key={key}
								ref={contentRefs[key]}
								className={`snap-start overflow-y-auto h-full overscroll-x-none`}
							>
								<div className={``}>{item.content}</div>
							</div>
						);
					})}
				</div>
			</Container>
		</>
	);
};

export default Carousel;
