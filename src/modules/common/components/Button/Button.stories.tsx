import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <GlobalStyle />
    <Button {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'danger',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium',
};
