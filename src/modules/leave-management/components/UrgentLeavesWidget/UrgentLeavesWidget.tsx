import styled from 'styled-components';
import Box from '~/modules/common/components/Box';
import Slider from '~/modules/common/components/Slider';
import { colors, typography } from '~/modules/common/utils/styles';
import useGetUrgentLeaveRequests from '~/modules/leave-management/components/UrgentLeavesWidget/data/useGetUrgentLeaveRequests';
import LeaveRequest, {
  LeaveRequestProps,
} from '~/modules/leave-management/components/UrgentLeavesWidget/LeaveRequest';
import Loader from '~/modules/leave-management/components/UrgentLeavesWidget/Loader';

const WidgetHeader = styled.span`
  display: block;
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  margin-bottom: 1.5rem;
`;

export default function UrgentLeavesWidget() {
  const { loading, data: urgentLeaveRequests } = useGetUrgentLeaveRequests() as {
    loading: boolean;
    data: LeaveRequestProps[];
  };

  return loading ? (
    <Loader />
  ) : (
    <Box>
      <WidgetHeader>Urgent leave requests ({urgentLeaveRequests?.length})</WidgetHeader>
      <Slider>
        {urgentLeaveRequests?.map((leaveRequest) => (
          <LeaveRequest key={leaveRequest.id} {...leaveRequest} />
        ))}
      </Slider>
    </Box>
  );
}
