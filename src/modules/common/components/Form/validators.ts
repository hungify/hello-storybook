import { FieldValidator } from 'final-form';

export const composeValidators: FieldValidator<any> =
  (...validators: any[]) =>
  (value: any, allValues: any[]) =>
    validators.reduce((error, validator) => error || validator(value, allValues), undefined);

export const isRequired = (value: any) => {
  const trimmedValue = typeof value === 'string' ? value?.trim() : value;

  if (!trimmedValue) {
    return 'Please complete this field.';
  }

  return undefined;
};

export const hasMoreCharactersThan = (comparable: number) => (value: string) => {
  if (value?.length < comparable) {
    return `Please input more than ${comparable} characters.`;
  }

  return undefined;
};
