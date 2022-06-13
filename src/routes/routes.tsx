import React from 'react';
import {
  Home,
  HomeFilled,
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
} from '~/modules/common/components/Icons';
import Dashboard from '~/modules/leave-management/pages/Dashboard/Dashboard';
import LeaveRequest from '~/modules/leave-management/pages/LeaveRequest';
import SamplePage from '~/modules/others/pages/SamplePage';

interface RoutePath {
  path: string;
  element: React.ReactElement;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  activeIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
}

export const mainRoutes: RoutePath[] = [
  {
    path: '/',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
    element: <SamplePage />,
  },
  {
    path: '/leave-management',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
    element: <Dashboard />,
  },
  {
    path: '/documents',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
    element: <SamplePage />,
  },
  {
    path: '/settings',
    icon: Cog,
    activeIcon: CogFilled,
    label: 'Settings',
    element: <SamplePage />,
  },
];

export const otherRoutes = [
  {
    path: '/leave-management/:id',
    element: <LeaveRequest />,
  },
];
const allRoutes = [...mainRoutes, ...otherRoutes];

export default allRoutes;
