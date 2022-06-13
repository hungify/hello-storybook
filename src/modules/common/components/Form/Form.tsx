import { Form as FinalForm } from 'react-final-form';

import Input from './Input';
import SubmitButton from './SubmitButton';
import RadioGroup, { Radio } from './RadioGroup';

interface FormProps {
  onSubmit: (values: any) => void;
  initialValues?: any;
  children: React.ReactNode;
  handleSubmit?: (values: any) => void;
  style?: React.CSSProperties;
}

export function Form({ onSubmit, children, ...restProps }: FormProps) {
  return (
    <FinalForm onSubmit={onSubmit}>
      {(props) => (
        <form {...restProps} onSubmit={props.handleSubmit}>
          {children}
        </form>
      )}
    </FinalForm>
  );
}

Form.Input = Input;
Form.Radio = Radio;
Form.RadioGroup = RadioGroup;
Form.SubmitButton = SubmitButton;
