import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors, typography } from '../../utils/styles'; // absolute import vite not working

type TagVariant = 'blue' | 'green' | 'yellow' | 'orange' | 'teal';

interface TagProps {
  label: string;
  variant?: TagVariant;
  background?: string;
  [key: string]: any;
}

const StyledTag = styled.span<TagProps>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  ${typography.size.xsmall}
  ${({ $variant }) => {
    const variant = ($variant as TagVariant) || 'blue';
    const color = colors[variant];
    const background = colors[`${variant}Light`];
    return css`
      color: ${color};
      background-color: ${background};
    `;
  }};
`;

export function Tag({ label, variant, ...restProps }: TagProps) {
  return (
    <StyledTag $variant={variant} {...restProps}>
      {label}
    </StyledTag>
  );
}

Tag.propTypes = {
  variant: PropTypes.oneOf(['blue', 'green', 'yellow', 'orange', 'teal']),
  label: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  variant: 'blue',
};
