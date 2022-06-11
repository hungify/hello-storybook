import styled from 'styled-components';
import Content from './Content';

const StyledPage = styled.div`
  position: relative;
  padding-top: 3.5rem;
  min-height: 100vh;
`;

interface PageProps {
  [key: string]: any;
}

function Page(props: PageProps) {
  return <StyledPage {...props} />;
}
Page.Content = Content;

export { Page };
