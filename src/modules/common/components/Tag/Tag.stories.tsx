import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from './Tag';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <>
    <GlobalStyle />
    <Tag {...args} />
  </>
);

export const Blue = Template.bind({});
Blue.args = {
  label: 'Tango Team',
  variant: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  label: 'Tango Team',
  variant: 'green',
};

export const Orange = Template.bind({});
Orange.args = {
  label: 'Tango Team',
  variant: 'orange',
};

export const Teal = Template.bind({});
Teal.args = {
  label: 'Tango Team',
  variant: 'teal',
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'Tango Team',
  variant: 'yellow',
};
