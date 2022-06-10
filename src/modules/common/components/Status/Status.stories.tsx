import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Status } from './Status';

export default {
  title: 'Status',
  component: Status,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => (
  <>
    <GlobalStyle />
    <Status {...args} />
  </>
);

export const Accepted = Template.bind({});
Accepted.args = {
  value: 'accepted',
};

export const Rejected = Template.bind({});
Rejected.args = {
  value: 'rejected',
};

export const Pending = Template.bind({});
Pending.args = {
  value: 'pending',
};
