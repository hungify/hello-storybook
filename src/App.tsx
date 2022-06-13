import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from '~/modules/common/components/GlobalStyle';
import Header from '~/modules/common/components/Header';
import Page from '~/modules/common/components/Page';
import Sidebar from '~/modules/common/components/Sidebar';
import routes, { mainRoutes } from '~/routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Page style={{ marginTop: '-3.5rem' }}>
        <Sidebar>
          {mainRoutes.map(({ path, icon, activeIcon, label }) => (
            <Sidebar.RouterItem
              key={path}
              label={label}
              href={path}
              Icon={icon}
              ActiveIcon={activeIcon}
            />
          ))}
        </Sidebar>
        <Routes>
          {routes.map(({ element, path }) => (
            <Route path={path} key={path} element={element} />
          ))}
          <Route path='*' element={<Page.Content>404 Not Found</Page.Content>} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
