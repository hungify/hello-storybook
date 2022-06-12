import GlobalStyle from '../GlobalStyle';
import { BarChart } from './BarChart';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ColorKey } from '~/modules/common/utils/styles/colors';

export default {
  title: 'Components/Chart',
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

const data = [
  {
    name: 'Jun',
    spider: 4,
    tango: 4,
    ion: 0,
    hugo: 4,
    picasso: 4,
  },
  {
    name: 'Jul',
    spider: 5,
    tango: 5,
    ion: 0,
    hugo: 4,
    picasso: 0,
  },
  {
    name: 'Aug',
    spider: 2,
    tango: 0,
    ion: 2,
    hugo: 2,
    picasso: 2,
  },
  {
    name: 'Sep',
    spider: 5,
    tango: 5,
    ion: 0,
    hugo: 5,
    picasso: 5,
  },
  {
    name: 'Oct',
    spider: 3,
    tango: 0,
    ion: 3,
    hugo: 0,
    picasso: 0,
  },
  {
    name: 'Nov',
    spider: 2,
    tango: 0,
    ion: 0,
    hugo: 2,
    picasso: 0,
  },
];

interface BarChart {
  keys: {
    id: string;
    label: string;
    color: ColorKey;
  }[];
  unit: string;
}
const config: BarChart = {
  keys: [
    {
      id: 'spider',
      label: 'Spider Team',
      color: 'orange',
    },
    {
      id: 'tango',
      label: 'Tango Team',
      color: 'blue',
    },
    {
      id: 'ion',
      label: 'Ion Team',
      color: 'teal',
    },
    {
      id: 'hugo',
      label: 'Hugo Team',
      color: 'yellow',
    },
    {
      id: 'picasso',
      label: 'Picasso Team',
      color: 'green',
    },
  ],
  unit: 'man-days',
};

const Template: ComponentStory<typeof BarChart> = () => (
  <>
    <GlobalStyle />
    <BarChart data={data} config={config} style={{ height: 178, width: 240 }} />
  </>
);

export const Default = Template.bind({});
