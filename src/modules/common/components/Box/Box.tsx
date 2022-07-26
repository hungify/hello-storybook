import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledBox = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0.5rem rgba(17, 17, 26, 0.1);
  background-color: ${colors.white};
  padding: 1.5rem;
  overflow-wrap: break-word;
`;

interface BoxProps {
  as?: React.ElementType;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Box(props: BoxProps) {
  return <StyledBox {...props} />;
}
