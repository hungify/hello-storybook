import styled, { css } from 'styled-components';
import { TransientProps } from '~/types';

type PropsToTransient = 'alignItems' | 'justifyContent' | 'direction';

const StyledFlexbox = styled.div<TransientProps<FlexboxProps, PropsToTransient>>`
  display: flex;
  ${({ $alignItems, $justifyContent, $direction }) => {
    return css`
      ${$alignItems && `align-items: ${$alignItems};`}
      ${$justifyContent && `justify-content: ${$justifyContent};`}
      ${$direction && `flex-direction: ${$direction};`}
    `;
  }}
`;

interface FlexboxProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Flexbox({
  alignItems,
  justifyContent,
  direction,
  children,
  ...restProps
}: FlexboxProps) {
  return (
    <StyledFlexbox
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $direction={direction}
      {...restProps}
    >
      {children}
    </StyledFlexbox>
  );
}
