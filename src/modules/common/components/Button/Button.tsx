import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, typography } from '../../utils/styles'; // absolute import vite not working

type Variant = 'primary' | 'secondary' | 'danger';
type Size = 'medium' | 'large';

const COLOR_MAPPING = {
  primary: {
    background: colors.primary,
    hover: colors.greenDark,
    text: colors.white,
  },
  secondary: {
    background: colors.gray5,
    hover: colors.gray4,
    text: colors.gray1,
  },
  danger: {
    background: colors.red,
    hover: colors.redDark,
    text: colors.white,
  },
};

const SIZE_MAPPING = {
  large: {
    padding: '0 2rem',
    height: '2.5rem',
    typography: typography.size.medium,
  },
  medium: {
    padding: '0 1.25rem',
    height: '2rem',
    typography: typography.size.small,
  },
};

interface ButtonProps {
  label: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  border: 0;
  border-radius: 2rem;
  align-items: center;
  ${typography.weight.semibold}
  + button {
    margin-left: 1rem;
  }

  ${({ $variant, disabled }) => {
    if (disabled) {
      return css`
        background: ${colors.gray4};
        color: ${colors.gray2};
      `;
    }
    const variant = $variant as Variant;
    const { background, hover, text } = COLOR_MAPPING[variant || 'primary'];
    return css`
      background: ${background};
      color: ${text};
      &:hover {
        cursor: pointer;
        background: ${hover};
        color: ${text};
      }
    `;
  }}

  ${({ $size }) => {
    const size = $size as Size; // Transient props
    const { height, padding, typography } = SIZE_MAPPING[size || 'medium'];
    return css`
      height: ${height};
      padding: ${padding};
      ${typography}
    `;
  }}
`;

export function Button({ label, variant, size, disabled, onClick, ...restProps }: ButtonProps) {
  return (
    <StyledButton
      type='button'
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['large', 'medium']),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: '#fff',
  size: 'large',
  variant: 'primary',
};
