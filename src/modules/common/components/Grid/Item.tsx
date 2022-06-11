import styled, { css } from 'styled-components';

interface ItemProps {
  [key: string]: any;
}
const StyledItem = styled.div<ItemProps>`
  ${({ span, start }) => {
    return css`
      grid-column-start: ${start || 0};
      grid-column-end: span ${span};
      grid-auto-rows: minmax(min-content, max-content);
    `;
  }}
`;

export default function Item(props: ItemProps) {
  return <StyledItem {...props} />;
}
