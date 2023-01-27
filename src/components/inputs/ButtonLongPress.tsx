import { useLongPress } from './useLongPress';
import Button from './ButtonSimple';

export const ButtonLongPress = ({ action, children }: any) => {
	const onLongPress = () => {
		action();
	};

	const onClick = () => {
		console.log('click is triggered');
	};

	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 500,
	};
	const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
	
	return (
		<div {...longPressEvent}>
			<Button
				action={() => {
					return;
				}}
				color=""
			>
				{children}
			</Button>
		</div>
	);
};
