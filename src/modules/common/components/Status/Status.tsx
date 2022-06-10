import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import type { Color } from '../../utils/styles/colors';
import { colors, typography } from '../../utils/styles'; // absolute import vite not working

type Status = 'accepted' | 'rejected' | 'pending';
const STATUS_MAPPING = {
  accepted: {
    text: 'Accepted',
    color: colors.green,
  },
  pending: {
    text: 'Pending',
    color: colors.yellow,
  },
  rejected: {
    text: 'Rejected',
    color: colors.red,
  },
};

interface StatusProps {
  value: Status;
  [key: string]: any;
}

const StyledStatus = styled.span<StatusProps>`
  display: inline-block;
  ${typography.size.xsmall}

  ${({ $color }) => {
    const color = $color as Color;
    return css`
      color: ${color};
      ::before {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${color};
        margin-right: 0.375rem;
      }
    `;
  }}
`;

export function Status({ value, ...restProps }: StatusProps) {
  const { text, color } = STATUS_MAPPING[value];
  return (
    <StyledStatus $color={color} {...restProps}>
      {text}
    </StyledStatus>
  );
}

Status.propTypes = {
  value: PropTypes.oneOf(['accepted', 'pending', 'rejected']).isRequired,
};
