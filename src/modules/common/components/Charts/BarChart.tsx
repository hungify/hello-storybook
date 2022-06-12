import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled from 'styled-components';
import type { ColorKey } from '~/modules/common/utils/styles/colors';
import { colors } from '../../utils/styles';

const ChartWrapper = styled.div`
  text {
    tspan {
      color: ${colors.gray3};
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

interface PathParams {
  [key: string]: any;
  rounded: boolean;
}
const r = 8;
const getPath = ({ x, y, width, height, rounded }: PathParams) => `
  M${x},${y + height}
  L${x},${rounded ? y + r : y}
  ${
    rounded
      ? `C${x},${y} ${x},${y} ${x + r},${y} L${x + width - r},${y} C${x + width},${y} ${
          x + width
        },${y} ${x + width},${y + r}`
      : `L${x + width},${y}`
  }
  L${x + width},${y + height}
  Z
`;

interface BarShapeProps {
  id: string;
  keys: {
    id: string;
  }[];
  payload?: any;
  fill?: string;
}
const BarShape = ({ fill, id, payload, keys, ...restProps }: BarShapeProps) => {
  const foundKey = keys.find(({ id: iterId }) => !!payload[iterId]);

  const rounded = foundKey?.id === id;

  return <path d={getPath({ ...restProps, rounded })} stroke='none' fill={fill} />;
};

interface BarChartProps {
  data: any[];
  config: {
    keys: {
      id: string;
      label: string;
      color: ColorKey;
    }[];
    unit: string;
  };
  [key: string]: any;
}

export function BarChart({ data, config, ...restProps }: BarChartProps) {
  const { keys, unit } = config;

  return (
    <ChartWrapper {...restProps}>
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsBarChart
          data={data}
          barCategoryGap='20%'
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis dataKey='name' axisLine={false} tickLine={false} />
          <Tooltip
            allowEscapeViewBox={{ x: true, y: false }}
            cursor={false}
            contentStyle={{
              backgroundColor: colors.white,
              padding: '0.5rem',
              border: `${colors.gray1} 1px solid`,
              borderRadius: 4,
              boxShadow: '2px 1px 20px rgba(44, 59, 70, 0.2)',
            }}
            formatter={(value: string, name: string) => {
              const foundKey = keys.find((key) => key.id === name);

              return [`${value} ${unit}`, foundKey?.label];
            }}
          />

          {[...keys].reverse().map(({ id, color }) => (
            <Bar
              key={id}
              dataKey={id}
              stackId='a'
              fill={colors[color]}
              shape={<BarShape id={id} keys={keys} />}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
