import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyle from '../GlobalStyle'; // absolute import vite not working
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <>
    <GlobalStyle />
    <Box {...args}>
      <h3>Box content</h3>
      <p>
        My mom got sick all of a sudden. I will have to take probably one day off to take care of
        her. Will try to come back to the office ...
      </p>
    </Box>
  </>
);

export const Default = Template.bind({});
