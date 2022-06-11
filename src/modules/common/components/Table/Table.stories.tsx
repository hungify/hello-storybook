import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
  <>
    <GlobalStyle />
    <Table />
  </>
);

export const Default = Template.bind({});
