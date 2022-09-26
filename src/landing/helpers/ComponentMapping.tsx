import { HomePage, HomeProps } from '../components/pages/HomePage';
import { TextInput, TextInputProps } from '../components/commons/TextInput';
import { EmailInput, EmailInputProps } from '../components/commons/EmailInput';
import { NumberInput, NumberInputProps } from '../components/commons/NumberInput';
import { CheckboxInput, CheckboxInputProps } from '../components/commons/CheckboxInput';
import { RadioInput, RadioInputProps } from '../components/commons/RadioInput';


type UnionProps = 
HomeProps & 
TextInputProps & 
EmailInputProps & 
NumberInputProps & 
CheckboxInputProps & 
RadioInputProps;


type ComponentsType = {
  [key: string]: (props:UnionProps) => JSX.Element;
};

export const Components: ComponentsType = {
  home: (props) => <HomePage {...props} />,
  text_input: (props) => <TextInput {...props} />,
  email_input: (props) => <EmailInput {...props} />,
  number_input: (props) => <NumberInput {...props} />,
  checkbox_input: (props) => <CheckboxInput {...props} />,
  radio_input: (props) => <RadioInput {...props} />,
}
