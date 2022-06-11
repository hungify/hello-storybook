import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Sidebar from '../Sidebar';
import {
  Home,
  HomeFilled,
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
} from '../Icons';
import { Page } from './Page';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'layouts/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const routes = [
  {
    path: 'home',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
  },
  {
    path: 'clipboard',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
  },
  {
    path: 'documents',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
  },
  {
    path: 'setting',
    icon: Cog,
    activeIcon: CogFilled,
    label: 'Settings',
  },
];

const Template: ComponentStory<typeof Sidebar> = () => (
  <>
    <GlobalStyle />
    <Header />
    <Page style={{ marginTop: '-3.5rem' }}>
      <Sidebar>
        {routes.map(({ path, icon, activeIcon, label }, index) => (
          <Sidebar.Item
            key={path}
            label={label}
            href={path}
            Icon={icon}
            ActiveIcon={activeIcon}
            active={index === 1}
          />
        ))}
      </Sidebar>
      <Page.Content>Page Content</Page.Content>
    </Page>
  </>
);

export const Default = Template.bind({});
