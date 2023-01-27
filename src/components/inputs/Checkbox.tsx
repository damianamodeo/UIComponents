import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';
import React from 'react';

type CheckboxType = {
	label: string;
	name: string;
	options?: any;
};

const Checkbox = ({ label, name, options, ...rest }: CheckboxType) => {
	return (
		<>
			<div className="relative">
				<label
					htmlFor={label}
					className={style.label}
				>
					{label}
				</label>
				<br />
				<Field
					className={style.input}
					name={name}
					{...rest}
				>
					{({ field }: any) => {
						return options.map((option: any) => {
							return (
								<React.Fragment key={option.key}>
									<input
										type="checkbox"
										id={option.value}
										{...field}
										value={option.value}
										// checked={field.value === option.value}
									/>
									<label
										htmlFor={option.value}
										className={`mx-2`}
									>
										{option.key}
									</label>
								</React.Fragment>
							);
						});
					}}
				</Field>
				<ErrorMessage
					name={name}
					component={Error}
				></ErrorMessage>
			</div>
		</>
	);
};

export default Checkbox;
