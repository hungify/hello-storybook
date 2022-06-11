import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { typography, colors } from '../../utils/styles';

const StyledItem = styled.a<ItemProps>`
  position: relative;
  display: flex;
  padding: 1rem 1.5rem;
  color: ${colors.white};
  text-decoration: none;
  ${typography.size.small}
  svg {
    margin-right: 1rem;
  }
  :hover {
    background-color: ${colors.black};
    cursor: pointer;
  }
  ${({ $active }) => {
    const active = $active as ItemProps;
    return active
      ? css`
          background-color: ${colors.tealDark};
          background-color: ${colors.black};
          :after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: ${colors.primary};
          }
        `
      : css`
          background-color: ${colors.tealDark};
        `;
  }}
`;

interface ItemProps {
  label: string;
  active?: boolean;
  as?: React.ElementType;
  [key: string]: any;
}

export default function Item({ label, as, ActiveIcon, Icon, active, ...restProps }: ItemProps) {
  return (
    <StyledItem $active={active} as={as} {...restProps}>
      {active ? <ActiveIcon color={colors.primary} /> : <Icon color={colors.white} />}
      {label}
    </StyledItem>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  ActiveIcon: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
