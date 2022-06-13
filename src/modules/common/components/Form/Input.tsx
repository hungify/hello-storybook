import styled, { css } from 'styled-components';

import { typography, colors } from '../../utils/styles';
import Field from './Field';

const StyledInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: ${colors.gray5};
  border-style: solid;
  ${typography.size.small}
  color: ${colors.gray1};
  ${({ rows }) =>
    rows
      ? css`
          height: auto;
          padding: 0.5rem 1rem;
        `
      : css`
          height: 2.5rem;
          padding: 0 1rem;
        `}
  ${({ hasIcon }) => (hasIcon ? 'padding-left: 3rem;' : '')}
  ${({ hasError }) => (hasError ? `border-color: ${colors.red};` : '')}
  :placeholder {
    color: ${colors.gray4};
  }
  :focus {
    border-color: ${colors.gray1};
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

interface InputProps {
  label: string;
  placeholder?: string;
  hasIcon?: boolean;
  hasError?: boolean;
  name: string;
  rows?: number;
  icon?: React.ReactNode;
  validate?: Array<(data: string) => void>;
  required: boolean;
}

export default function Input({ placeholder, icon, rows, ...restProps }: InputProps) {
  return (
    <Field {...restProps}>
      {({ input, meta }) => (
        <div style={{ position: 'relative' }}>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <StyledInput
            as={rows ? 'textarea' : 'input'}
            rows={rows}
            type='text'
            hasIcon={icon}
            hasError={meta.error && meta.touched}
            id={input.name}
            placeholder={placeholder}
            {...input}
          />
        </div>
      )}
    </Field>
  );
}
