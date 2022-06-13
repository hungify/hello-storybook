import { useFormState } from 'react-final-form';
import Button from '../../components/Button';

interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label, ...restProps }: SubmitButtonProps) => {
  const { submitting } = useFormState();

  return <Button type='submit' disabled={submitting} label={label} {...restProps} />;
};

export default SubmitButton;
