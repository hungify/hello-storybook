import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalStyle from '../GlobalStyle';
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
import Page from '../Page';
import { Sidebar } from './Sidebar';

export default {
  title: 'layouts/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

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
    <Page>
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
    </Page>
  </>
);

export const Default = Template.bind({});
