import Inputs from '@PAGES/Inputs';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/ButtonSimple';
import { useState } from 'react';

const IconsSubPageOne = ({ currentSubpage, setCurrentSubpage }: any) => {
	const [modalState, setModalState] = useState(false);

	const header = (
		<Header
			headerLeft={null}
			title={'Icons'}
			headerRight={null}
		></Header>
	);

	const content = (
		<Content>
			<div className="m-6">
				<Button
					color="primary"
					action={() => {
						setCurrentSubpage(1);
					}}
				>
					JW Library Icons
				</Button>
			</div>
			{/* <Carousel
				carouselItems={[
					{
						title: 'Buttons',
						content: (
							<div className={`p-8`}>
								<Button
									action={() => setModalState(true)}
									color="primary"
								>
									Open a Modal Window
								</Button>
								{modalState ? (
									<Modal hide={() => setModalState(false)}></Modal>
								) : null}
							</div>
						),
					},
					{
						title: 'Inputs',
						content: <Inputs></Inputs>,
					},
					{
						title: 'Other',
						content: (
							<div className="p-8">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
								voluptatem sapiente! Fugiat modi qui perspiciatis, quos
								excepturi magnam sed, reprehenderit ipsa provident repellendus
								libero. Omnis velit possimus dolores vero at exercitationem
								minima totam beatae soluta ipsum. Eveniet iure corporis
								praesentium? Quis exercitationem neque, corporis fugit harum
								dolor hic expedita perspiciatis aliquid distinctio possimus
								maiores ex! Voluptas doloribus nihil commodi dolore vitae,
								cumque quasi quam excepturi corrupti perspiciatis quis libero,
								quae accusantium adipisci rerum, ut repellendus. Nemo dicta ut
								maxime dolorem praesentium, illo repellendus odio omnis sapiente
								culpa ex velit veniam alias nihil eius magnam, perspiciatis eum
								dolore corrupti expedita aliquid fugit. Expedita dignissimos
								architecto officia at reprehenderit facilis voluptate eaque
								doloribus. Quam consequuntur dolore dolor magnam quas. Beatae
								quasi dicta officia porro, cum possimus cupiditate voluptatem
								magni temporibus libero culpa expedita delectus earum quia
								laborum aperiam nobis excepturi aliquid nam repellendus, dolore
								quod optio? Magnam esse aliquid voluptatem cupiditate sapiente
								ipsum voluptates fuga et labore adipisci, eius consequatur sint
								soluta iusto, voluptatibus aspernatur autem minus ducimus nihil
								odit quae nesciunt. Voluptate consequuntur culpa quasi aut eius
								laboriosam. Pariatur, aperiam? Corporis laudantium voluptatum,
								doloribus consequatur incidunt velit minima blanditiis suscipit
								repellat praesentium inventore reprehenderit ipsam vitae,
								distinctio voluptates veniam. Quibusdam ex minima maxime unde
								consequatur. Voluptas a quas ea quae! Vero adipisci dignissimos
								velit saepe nulla optio repellendus ad ab sint. Consectetur,
								inventore! Quibusdam, natus. Nam ducimus doloribus nihil
								distinctio vero ex in non necessitatibus esse impedit velit,
								quaerat, obcaecati tenetur earum soluta minus atque sint enim!
								Facilis asperiores error deleniti, quam omnis exercitationem
								quae molestiae harum nostrum facere ab minus suscipit? Atque
								aliquid porro similique temporibus quas deserunt vel nostrum
								totam quis itaque sed quam aliquam necessitatibus, repellendus
								est quisquam fugit sint sapiente possimus reprehenderit
								pariatur. Aliquam, voluptatem! Nam quaerat molestias, qui animi
								architecto saepe voluptatum officiis impedit laboriosam quas.
								Ratione ipsum nulla corrupti dolorem aliquid assumenda sunt.
								Animi quam maxime odit nihil officia et? Itaque, reiciendis sit
								dignissimos magni commodi maxime assumenda, provident dolore
								incidunt debitis recusandae odio, quo eum dolores? Architecto id
								sint maiores voluptates animi sed cupiditate ipsam dolor
								perspiciatis, voluptatibus repellendus sunt atque dignissimos
								facilis ut, deleniti quo quibusdam nesciunt quasi dicta odio
								quas ipsum sequi. Ratione, expedita officia! Ab architecto
								dolore libero. Commodi eligendi earum ratione quod. Autem alias
								perspiciatis veritatis velit expedita sint doloremque possimus
								dolorum quasi maxime. Eveniet, laborum? Veniam neque magnam
								mollitia aspernatur cumque minus quisquam, sint natus tempore
								nemo autem iusto.
							</div>
						),
					},
				]}
			></Carousel> */}
		</Content>
	);
	return (
		<>
			{header}
			{content}
		</>
	);
};

export default IconsSubPageOne;
