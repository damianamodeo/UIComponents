import Inputs from '@PAGES/Inputs';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/ButtonSimple';
import { useState } from 'react';
import { ReactComponent as BackArrow } from '@UICOMPONENTS/svgs/BackArrow.svg';
import { ReactComponent as ForwardArrow } from '@UICOMPONENTS/svgs/ForwardArrow.svg';
import { ReactComponent as Calendar } from '@UICOMPONENTS/svgs/Calendar.svg';
import { ReactComponent as Download } from '@UICOMPONENTS/svgs/Download.svg';
import { ReactComponent as Message } from '@UICOMPONENTS/svgs/Message.svg';
import { ReactComponent as Sort } from '@UICOMPONENTS/svgs/Sort.svg';
import { ReactComponent as User } from '@UICOMPONENTS/svgs/User.svg';
import { ReactComponent as ZoomIn } from '@UICOMPONENTS/svgs/ZoomIn.svg';
import { ReactComponent as ZoomOut } from '@UICOMPONENTS/svgs/ZoomOut.svg';
import { ReactComponent as Add } from '@UICOMPONENTS/svgs/Add.svg';
import { ReactComponent as Export } from '@UICOMPONENTS/svgs/Export.svg';
import { ReactComponent as Forward } from '@UICOMPONENTS/svgs/Forward.svg';
import { ReactComponent as Home } from '@UICOMPONENTS/svgs/Home.svg';
import { ReactComponent as Settings } from '@UICOMPONENTS/svgs/Settings.svg';
import { ReactComponent as Share } from '@UICOMPONENTS/svgs/Share.svg';
import { ReactComponent as Tag } from '@UICOMPONENTS/svgs/Tag.svg';
import { ReactComponent as Upload } from '@UICOMPONENTS/svgs/Upload.svg';
import { ReactComponent as Ministry } from '@UICOMPONENTS/svgs/Ministry.svg';
import { ReactComponent as Offline } from '@UICOMPONENTS/svgs/Offline.svg';
import { ReactComponent as Star } from '@UICOMPONENTS/svgs/Star.svg';

const SubPageOne = ({ currentSubpage, setCurrentSubpage }: any) => {
	const [modalState, setModalState] = useState(false);

	const header = (
		<Header
			headerLeft={
				<div
					className="flex"
					onClick={() => {
						setCurrentSubpage(0);
					}}
				>
					<div className="my-auto text-[2.1rem] ">
						<BackArrow />
					</div>
					<div className="my-auto">Back</div>
				</div>
			}
			title={'JW Library Icons'}
			headerRight={''}
		></Header>
	);

	const content = (
		<Content>
			<div className={`grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))]`}>
				<Add className="text-3xl hover:text-red-500 m-2" />
				<BackArrow className="text-3xl hover:text-red-500 m-2" />
				<Calendar className="text-3xl hover:text-red-500 m-2" />
				<Download className="text-3xl hover:text-red-500 m-2" />
				<Export className="text-3xl hover:text-red-500 m-2" />
				<Forward className="text-3xl hover:text-red-500 m-2" />
				<ForwardArrow className="text-3xl hover:text-red-500 m-2" />
				<Home className="text-3xl hover:text-red-500 m-2" />
				<Message className="text-3xl hover:text-red-500 m-2" />
				<Ministry className="text-3xl hover:text-red-500 m-2" />
				<Offline className="text-3xl hover:text-red-500 m-2" />
				<Settings className="text-3xl hover:text-red-500 m-2" />
				<Share className="text-3xl hover:text-red-500 m-2" />
				<Sort className="text-3xl hover:text-red-500 m-2" />
				<Star className="text-3xl hover:text-red-500 m-2" />
				<Tag className="text-3xl hover:text-red-500 m-2" />
				<Upload className="text-3xl hover:text-red-500 m-2" />
				<User className="text-3xl hover:text-red-500 m-2" />
				<ZoomIn className="text-3xl hover:text-red-500 m-2" />
				<ZoomOut className="text-3xl hover:text-red-500 m-2" />
			</div>
		</Content>
	);
	return (
		<>
			{header}
			{content}
		</>
	);
};

export default SubPageOne;
