import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';
import React from 'react';

type SwitchType = {
	label: string;
	name: string;
	options?: any;
};

const Switch = ({ label, name, options, ...rest }: SwitchType) => {
	return (
		<>
			<Field
				className={style.input}
				name={name}
				type="checkbox"
				{...rest}
			>
				{({ field }: any) => {
					return (
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value={field.value}
								{...field}
								className="sr-only peer"
							/>
							<div
								className="w-11 h-6 bg-gray-400 
								peer-focus-xxx-:outline-none peer-focus-xxx-:ring-4
								peer-focus-xxx-:ring-success-300 dark:peer-focus-xxx-:ring-success-800 rounded-full peer 
								dark:bg-gray-700 peer-checked:after:translate-x-full 
								peer-checked:after:border-white after:content-[''] after:absolute 
								after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
								after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
								dark:border-gray-600 peer-checked:bg-success-600
								peer-checked:ring-success-600"
							></div>
							<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								{label}
							</span>
						</label>
					);
				}}
			</Field>
		</>
	);
};

export default Switch;
