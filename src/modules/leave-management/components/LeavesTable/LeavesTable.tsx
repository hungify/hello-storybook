import Table from '~/modules/common/components/Table';
import { Leave } from '~/modules/leave-management/components/LeavesTable/data/mocks';
import useGetLeaves from '~/modules/leave-management/components/LeavesTable/data/useGetLeaves';
import LeaveItem from '~/modules/leave-management/components/LeavesTable/LeaveItem';
import Loader from '~/modules/leave-management/components/LeavesTable/Loader';

const LeavesTable = () => {
  const { loading, data } = useGetLeaves() as {
    loading: boolean;
    data: Leave[];
  };

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Team</Table.HeadCell>
          <Table.HeadCell>Request Type</Table.HeadCell>
          <Table.HeadCell>Reason</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Submit Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map((leave) => (
          <LeaveItem key={leave.id} leave={leave} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default LeavesTable;
