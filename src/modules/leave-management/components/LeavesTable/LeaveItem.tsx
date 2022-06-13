import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Status from '~/modules/common/components/Status';
import Table from '~/modules/common/components/Table';
import Tag from '~/modules/common/components/Tag';
import { colors } from '~/modules/common/utils/styles';

import type { Leave } from '~/modules/leave-management/components/LeavesTable/data/mocks';

const StyledLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

interface LeaveItemProps {
  leave: Leave;
}

export default function LeaveItem({ leave }: LeaveItemProps) {
  const { id, user, requestType, reason, requestDate, submitDate, status } = leave;
  const { fullName, team, teamColor } = user;
  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{fullName}</Table.Cell>
      <Table.Cell>
        <Tag label={team} color={teamColor} />
      </Table.Cell>
      <Table.Cell>{requestType}</Table.Cell>
      <Table.Cell>{reason}</Table.Cell>
      <Table.Cell>{requestDate}</Table.Cell>
      <Table.Cell>{submitDate}</Table.Cell>
      <Table.Cell>
        <Status value={status} />
      </Table.Cell>
      <Table.Cell>
        <StyledLink to={`/leave-management/${id}`}>View Details</StyledLink>
      </Table.Cell>
    </Table.Row>
  );
}
