type ButtonType = {
	children: string;
	action: () => void;
	submit?: Boolean;
	color:
		| 'primary'
		| 'secondary'
		| 'grey'
		| 'error'
		| 'warning'
		| 'success'
		| any;
};

const ButtonSimple = ({ children, action, color, submit }: ButtonType) => {
	const colors: any = {
		primary: `bg-primary-500 hover:bg-primary-400 dark:bg-primary-400 dark:hover:bg-primary-400 `,
		secondary: `bg-secondary-500 hover:bg-secondary-400 dark:bg-secondary-300 dark:hover:bg-secondary-400 `,
		grey: `bg-grey-500 hover:bg-grey-400 dark:bg-grey-300 dark:hover:bg-grey-400 `,
		error: `bg-error-500 hover:bg-error-400 dark:bg-error-300 dark:hover:bg-error-400 `,
		warning: `bg-warning-500 hover:bg-warning-400 dark:bg-warning-300 dark:hover:bg-warning-400 `,
	};

	return (
		<button
			type={submit ? 'submit' : 'button'}
			className={`${colors[color]} text-white font-medium text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:text-black`}
			onClick={action}
		>
			{children}
		</button>
	);
};

export default ButtonSimple;
