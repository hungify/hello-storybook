import styled, { css } from 'styled-components';
import { colors } from '../../utils/styles';

import Item from './Item';
import RouterItem from './RouterItem';

const StyledSidebar = styled.nav<SidebarProps>`
  ${({ fixed }) => {
    return fixed
      ? css`
          position: fixed;
          top: 3.5rem;
          left: 0;
          right: 0;
          z-index: 2;
        `
      : css`
          position: absolute;
        `;
  }}
  min-height: calc(100vh - 3.5rem);
  width: 14.25rem;
  background-color: ${colors.tealDark};
`;

interface SidebarProps {
  fixed?: boolean;
  [key: string]: any;
}
export function Sidebar({ fixed, ...restProps }: SidebarProps) {
  return <StyledSidebar fixed={fixed} {...restProps} />;
}

Sidebar.Item = Item;
Sidebar.RouterItem = RouterItem;
