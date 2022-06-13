import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

const StyledLabel = styled.label`
  display: block;
  ${typography.size.small}
  ${typography.weight.semibold}
  color: ${colors.gray3};
  margin-bottom: 0.5rem;
`;

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export default function Label(props: LabelProps) {
  return <StyledLabel {...props} />;
}
