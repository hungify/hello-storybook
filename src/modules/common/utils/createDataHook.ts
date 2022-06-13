import React from 'react';
import type { BarChartConfig } from '~/modules/leave-management/components/LeavePlanChartWidget/data/mocks';
import { Leave } from '~/modules/leave-management/components/LeavesTable/data/mocks';
import { LeaveRequestProps } from '~/modules/leave-management/components/UrgentLeavesWidget/LeaveRequest';

const createDataHook = (data: LeaveRequestProps[] | BarChartConfig | Leave[] | Leave) => () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  });

  return { loading, data: loading ? undefined : data };
};

export default createDataHook;
