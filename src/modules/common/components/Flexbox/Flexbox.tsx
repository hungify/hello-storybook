import styled, { css } from 'styled-components';

type FlexboxStyled = {
  $alignItems?: string;
  $justifyContent?: string;
  $direction?: string;
};

const StyledFlexbox = styled.div<FlexboxStyled>`
  display: flex;
  ${({ $alignItems, $justifyContent, $direction }) => {
    const alignItems = $alignItems;
    const justifyContent = $justifyContent;
    const direction = $direction;
    return css`
      ${alignItems && `align-items: ${alignItems};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${direction && `flex-direction: ${direction};`}
    `;
  }}
`;

interface FlexboxProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  children: React.ReactNode;
}

export default function Flexbox({ alignItems, justifyContent, direction, children }: FlexboxProps) {
  return (
    <StyledFlexbox $alignItems={alignItems} $justifyContent={justifyContent} $direction={direction}>
      {children}
    </StyledFlexbox>
  );
}
