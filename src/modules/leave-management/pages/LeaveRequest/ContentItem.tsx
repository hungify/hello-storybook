import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '~/modules/common/utils/styles';

const StyledHeader = styled.p`
  margin: 0;
  ${typography.size.small}
  color: ${colors.gray3};
`;

const StyledContent = styled.p`
  margin: 0;
  ${typography.size.small}
  color: ${colors.gray1};
`;

interface ItemProps {
  label: string;
  children: React.ReactNode;
}

export default function ContentItem({ label, children }: ItemProps) {
  return (
    <>
      <StyledHeader>{label}</StyledHeader>
      <StyledContent>{children}</StyledContent>
    </>
  );
}
