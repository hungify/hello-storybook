import styled from 'styled-components';
import Box from '~/modules/common/components/Box';
import BarChart from '~/modules/common/components/Charts';
import Flexbox from '~/modules/common/components/Flexbox';
import Grid from '~/modules/common/components/Grid';
import { colors, typography } from '~/modules/common/utils/styles';
import { BarChartConfig } from '~/modules/leave-management/components/LeavePlanChartWidget/data/mocks';
import useGetLeavePlan from '~/modules/leave-management/components/LeavePlanChartWidget/data/useGetLeavePlan';
import Loader from './Loader';

const WidgetHeader = styled.span`
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  display: block;
`;

const Description = styled.p`
  ${typography.size.small}
  color: ${colors.gray3};
  margin: 0.5rem 0 1rem;
`;

const Tag = styled.span`
  display: inline-flex;
  color: ${colors.gray2};
  ${typography.size.xsmall};
  padding: 0 0.5rem;
  border: ${colors.gray4} 1px solid;
  border-radius: 0.25rem;
  align-items: center;
  height: 1.625rem;
  ${({ color }) => `
    :before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 0.25rem;
      border-radius: 2px;
      background-color: ${color};
      margin-right: 0.5rem;
    }
  `}
`;

export function LeavePlanChartWidget() {
  const { loading, data: response } = useGetLeavePlan();

  if (loading || !response) {
    return <Loader />;
  }

  const { data, config } = response as BarChartConfig;

  return (
    <Box as={Flexbox} style={{ height: '100%' }}>
      <div style={{ flex: 1, paddingRight: '1.5rem' }}>
        <WidgetHeader>Leave Plan</WidgetHeader>
        <Description>Shows the planed leaves for each team in the next 6 months.</Description>

        <Grid style={{ gap: '0.375rem' }}>
          {config.keys.map(({ label, color, id }) => (
            <Grid.Item span={6} key={id}>
              <Tag color={color}>{label}</Tag>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <BarChart data={data} config={config} style={{ flexBasis: 240, height: 178 }} />
    </Box>
  );
}
