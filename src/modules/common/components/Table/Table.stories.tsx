import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Table } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
  <>
    <GlobalStyle />
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Team</Table.HeadCell>
          <Table.HeadCell>Request Type</Table.HeadCell>
          <Table.HeadCell>Reason</Table.HeadCell>
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>464566</Table.Cell>
          <Table.Cell>Jordyn Philips</Table.Cell>
          <Table.Cell>Tango team</Table.Cell>
          <Table.Cell>Work remotely morning</Table.Cell>
          <Table.Cell>Doctor appointment</Table.Cell>
          <Table.Cell>Sep 5, 2021</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>464566</Table.Cell>
          <Table.Cell>Jordyn Philips</Table.Cell>
          <Table.Cell>Tango team</Table.Cell>
          <Table.Cell>Work remotely morning</Table.Cell>
          <Table.Cell>Doctor appointment</Table.Cell>
          <Table.Cell>Sep 5, 2021</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>464566</Table.Cell>
          <Table.Cell>Jordyn Philips</Table.Cell>
          <Table.Cell>Tango team</Table.Cell>
          <Table.Cell>Work remotely morning</Table.Cell>
          <Table.Cell>Doctor appointment</Table.Cell>
          <Table.Cell>Sep 5, 2021</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);

export const Default = Template.bind({});
