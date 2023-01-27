type BackArrowType = {
	children?: any;
};

const BackArrow = ({ children }: BackArrowType) => {
	return (
		<>
			<svg
				height="512px"
				id="Layer_1"
				// style="enable-background:new 0 0 512 512;"
				version="1.1"
				viewBox="0 0 512 512"
				width="512px"
				// xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				// xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
			</svg>
		</>
	);
};

export default BackArrow;
