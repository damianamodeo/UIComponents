import Input from '@UICOMPONENTS/inputs/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

type FormikFormType = {
	children?: any;
	initialValues: any;
	onSubmit: any;
	validationSchema?: any;
	validateOnChange?: Boolean
	validateOnBlur?: Boolean
};

const FormikForm = ({
	children,
	initialValues,
	onSubmit,
	validationSchema,
	validateOnChange,
	validateOnBlur
}: FormikFormType) => {
	return (
		<div className={``}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				validateOnChange={!validateOnChange} validateOnBlur={!validateOnBlur}
			>
				{(formik) => <Form>{children}</Form>}
			</Formik>
		</div>
	);
};

export default FormikForm;
