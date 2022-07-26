import { useFormState } from 'react-final-form';
import Button from '../../components/Button';

interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label, ...restProps }: SubmitButtonProps) => {
  const { submitting } = useFormState();

  return (
    <Button type='submit' disabled={submitting} {...restProps}>
      {label}
    </Button>
  );
};

export default SubmitButton;
