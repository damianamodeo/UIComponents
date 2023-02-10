import Text from './Text';
import Password from './Password';
import TextArea from './TextArea';
import Number from './Number';
import Email from './Email';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Switch from './Switch';
import Autocomplete from './Autocomplete';

type InputType = {
	inputType: 'text' | 'number' | 'email' |  'password' | 'textarea' | 'select' | 'autocomplete' | 'radio' | 'checkbox' | 'switch' ;
	label: string;
	name: string;
	placeholder?: string;
	options?: { key: string | number; value: string | number }[];
};

const Input = ({ inputType, ...rest }: InputType) => {
	const input: any = {
		text: <Text {...rest} />,
		password: <Password {...rest} />,
		number: <Number {...rest} />,
		email: <Email {...rest} />,
		textarea: <TextArea {...rest} />,
		select: <Select {...rest} />,
		autocomplete: <Autocomplete {...rest} />,
		radio: <Radio {...rest} />,
		checkbox: <Checkbox {...rest} />,
		switch: <Switch {...rest} />,
	};

	return input[inputType];
};
export default Input;
