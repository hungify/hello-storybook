import React from 'react';
import { LeaveRequestProps } from '~/modules/leave-management/components/UrgentLeavesWidget/LeaveRequest';

const createDataHook = (data: LeaveRequestProps[]) => () => {
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
