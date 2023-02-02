import Error from './Error';
import { ErrorMessage, Field } from 'formik';
import style from './style';

type PasswordType = {
	label: string;
	name: string;
};

const Password = ({ label, name, ...rest }: PasswordType) => {
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
								type="password"
								value={field.value}
								{...field}
								className={style.input}
								placeholder=" "
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

export default Password;
