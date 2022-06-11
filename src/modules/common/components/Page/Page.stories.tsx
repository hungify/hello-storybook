import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import {
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
  Home,
  HomeFilled,
} from '../Icons';
import Sidebar from '../Sidebar';
import { Page } from './Page';

export default {
  title: 'layouts/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const routes = [
  {
    path: '#',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
  },
  {
    path: '#',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
  },
  {
    path: '#',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
  },
  {
    path: '#',
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
