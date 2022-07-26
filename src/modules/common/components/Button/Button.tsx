import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import objectKeys from '../../utils/object';
import type { TransientProps } from '~/types';
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  children?: React.ReactNode;
}
type PropsToTransient = 'size' | 'variant';

const StyledButton = styled.button<TransientProps<ButtonProps, PropsToTransient>>`
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
    const { background, hover, text } = COLOR_MAPPING[$variant || 'primary'];
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
    const { height, padding, typography } = SIZE_MAPPING[$size || 'medium'];
    return css`
      height: ${height};
      padding: ${padding};
      ${typography}
    `;
  }}
`;

export function Button({ children, variant, size, disabled, ...restProps }: ButtonProps) {
  const props = {
    ...restProps,
  };

  if (disabled) {
    objectKeys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  return (
    <StyledButton $variant={variant} $size={size} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
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
