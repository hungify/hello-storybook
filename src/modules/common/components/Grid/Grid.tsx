import styled from 'styled-components';
import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
`;

interface GridProps {
  [key: string]: any;
}

function Grid(props: GridProps) {
  return <StyledGrid {...props} />;
}
Grid.Item = Item;

export { Grid };
