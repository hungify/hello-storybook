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
import Dashboard from '~/modules/leave-management/pages/Dashboard';
import SamplePage from '~/modules/others/pages/SamplePage';

interface RoutePath {
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  activeIcon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  element: React.ReactElement;
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

const allRoutes = [...mainRoutes];

export default allRoutes;
