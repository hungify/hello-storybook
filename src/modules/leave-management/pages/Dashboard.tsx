import Grid from '~/modules/common/components/Grid';
import Page from '~/modules/common/components/Page';
import UrgentLeavesWidget from '~/modules/leave-management/components/UrgentLeavesWidget/UrgentLeavesWidget';

const Dashboard = () => (
  <Page.Content>
    <Grid>
      <Grid.Item span={6}>
        <UrgentLeavesWidget />
      </Grid.Item>
      <Grid.Item span={6}>
        <UrgentLeavesWidget />
      </Grid.Item>
      <Grid.Item span={12}>
        <UrgentLeavesWidget />
      </Grid.Item>
    </Grid>
  </Page.Content>
);

export default Dashboard;
