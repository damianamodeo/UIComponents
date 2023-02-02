import Button from '@UICOMPONENTS/inputs/Button';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import * as Yup from 'yup';

type InputsType = {
	children?: any;
};

const Inputs = ({ children }: InputsType) => {
	const validationSchema = Yup.object({
		// textInput: Yup.string().required('Required'),
		// numberInput: Yup.string().required('Required'),
		// emailInput: Yup.string().required('Required'),
		// textAreaInput: Yup.string().required('Required'),
		// selectInput: Yup.string().required('Required'),
		// radioInput: Yup.string().required('Required'),
		// checkbox: Yup.array().required('Required'),
	});

	return (
		<div className={`p-2`}>
			<FormikForm
				initialValues={{
					textInput: '',
					numberInput: '',
					emailInput: '',
					textAreaInput: '',
					selectInput: '',
					radioInput: '',
					checkboxInput: [],
					switchInput: false,
				}}
				onSubmit={(values: any) =>
					alert(`
          textInput = ${values.textInput},
          numberInput = ${values.numberInput},
          emailInput = ${values.emailInput},
          textAreaInput = ${values.textAreaInput},
          selectInput = ${values.selectInput},
          radioInput = ${values.radioInput},
          checkboxInput = ${values.checkboxInput},
          switchInput = ${values.switchInput},
					`)
				}
				validationSchema={validationSchema}
				validateOnBlur
				validateOnChange
			>
				<div className={`grid gap-12 p-6`}>
					<Input
						inputType="text"
						label="Text Input"
						name="textInput"
					/>
					<Input
						inputType="number"
						label="Number Input"
						name="numberInput"
					/>
					<Input
						inputType="email"
						label="Email Input"
						name="emailInput"
					/>
					<Input
						inputType="textarea"
						label="Text Area Input"
						name="textAreaInput"
					/>
					<Input
						inputType="select"
						label="Select Input"
						name="selectInput"
						options={[
							{ key: 'Option One', value: 1 },
							{ key: 'Option Two', value: 2 },
							{ key: 'Option Three', value: 3 },
						]}
					/>
					<Input
						inputType="radio"
						label="Radio Input"
						name="radioInput"
						options={[
							{ key: 'Option One', value: 1 },
							{ key: 'Option Two', value: 2 },
							{ key: 'Option Three', value: 3 },
						]}
					/>
					<Input
						inputType="checkbox"
						label="Checkbox Input"
						name="checkboxInput"
						options={[
							{ key: 'Option One', value: 1 },
							{ key: 'Option Two', value: 2 },
							{ key: 'Option Three', value: 3 },
						]}
					/>
					<Input
						inputType="switch"
						label="Switch Input"
						name="switchInput"
						options={[
							{ key: 'Option One', value: 1 },
							{ key: 'Option Two', value: 2 },
							{ key: 'Option Three', value: 3 },
						]}
					/>
				</div>

				<div className="m-8">
					<Button
						color="secondary"
					>
						LongPress Button
					</Button>

					{/* <Button
						submit
						color="grey"
					>
						Submit
					</Button> */}
				</div>
			</FormikForm>
		</div>
	);
};

export default Inputs;
