import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';

type SelectType = {
	label: string;
	name: string;
	options?: any;
};

const Select = ({ label, name, options, ...rest }: SelectType) => {
	return (
		<>
			<div className="relative">
				<label
					htmlFor={label}
					className={style.label}
				>
					{label}
				</label>
				<Field
					className={style.input}
					name={name}
					as="select"
					{...rest}
				>
					{options.map((option: any, index: number) => {
						return (
							<option
								key={index}
								value={option.value}
							>
								{option.key}
							</option>
						);
					})}
				</Field>
				<ErrorMessage
					name={name}
					component={Error}
				></ErrorMessage>
			</div>
		</>
	);
};

export default Select;
