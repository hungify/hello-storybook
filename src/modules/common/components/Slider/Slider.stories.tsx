import GlobalStyle from '../GlobalStyle';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => (
  <>
    <GlobalStyle />
    <Slider>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 1</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 2</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 3</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 4</div>
    </Slider>
  </>
);

export const Default = Template.bind({});
