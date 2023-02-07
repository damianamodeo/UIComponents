import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';

type TextType = {
	label: string;
	name: string;
	options?: any;
};

const Autocomplete = ({ label, name, options, ...rest }: TextType) => {
	return (
		<Field
			className={style.input}
			name={name}
			{...rest}
		>
			{({ field }: any) => {
				return (
					<>
						<div className="relative z-0">
							<input
								type="text"
								value={field.value}
								{...field}
								className={style.input}
								placeholder=" "
                list="options"
                autoComplete='off'
							/>
							<label
								htmlFor={label}
								className={style.label}
							>
								{label}
							</label>
							<datalist id="options">
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
							</datalist>
						</div>
					</>
				);
			}}
		</Field>
	);
};

export default Autocomplete;
