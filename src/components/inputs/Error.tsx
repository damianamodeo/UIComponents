type ErrorType = {
	children?: any;
};

const Error = ({ children }: ErrorType) => {
	return (
		<div className={`text-red-600 font-bold text-[.7rem]`}>* {children}</div>
	);
};

export default Error;
