import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working

export default {
  title: 'Layouts/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <>
    <GlobalStyle />
    <Header {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  fixed: true,
};
