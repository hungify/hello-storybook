import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Grid } from './Grid';
import Box from '.././Box';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => (
  <>
    <GlobalStyle />
    <Grid>
      <Grid.Item span={3} as={Box}>
        3
      </Grid.Item>
      <Grid.Item span={7} as={Box}>
        7
      </Grid.Item>
      <Grid.Item span={2} as={Box}>
        2
      </Grid.Item>

      {[...new Array(4)].map((_, index) => (
        <Grid.Item key={`2-${index}`} span={3} as={Box}>
          {index + 1}
        </Grid.Item>
      ))}

      {[...new Array(3)].map((_, index) => (
        <Grid.Item key={`3-${index}`} span={4} as={Box}>
          {index + 1}
        </Grid.Item>
      ))}

      {[...new Array(2)].map((_, index) => (
        <Grid.Item key={`4-${index}`} span={6} as={Box}>
          {index + 1}
        </Grid.Item>
      ))}

      {[...new Array(1)].map((_, index) => (
        <Grid.Item key={`5-${index}`} span={12} as={Box}>
          {index + 1}
        </Grid.Item>
      ))}
    </Grid>
  </>
);

export const Default = Template.bind({});
