import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';

type TextType = {
	label: string;
	name: string;
};

const Email = ({ label, name, ...rest }: TextType) => {
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
							type="email"
							value={field.value}
							{...field}
							className={style.input}
							placeholder=" "
							autoComplete="off"
						/>
						<label
							htmlFor={label}
							className={style.label}
						>
							{label}
						</label>
					</div>
				</>
			);
		}}
	</Field>
	);
};

export default Email
