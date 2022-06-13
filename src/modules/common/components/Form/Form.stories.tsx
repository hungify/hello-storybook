import { FormSpy } from 'react-final-form';

import GlobalStyle from '../GlobalStyle';
import { colors } from '../../utils/styles';
import { Search } from '../Icons';
import { Form } from './Form';
import { hasMoreCharactersThan } from './validators';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <>
    <GlobalStyle />
    <div style={{ width: 300 }}>
      <Form onSubmit={() => alert('submit')}>
        <FormSpy>{(props: { values: any }) => <p>{JSON.stringify(props.values)}</p>}</FormSpy>
        <Form.Input label='Full Name' name='fullName' placeholder='John Doe' required={true} />

        <Form.Input
          required={true}
          label='Search'
          name='search'
          icon={<Search color={colors.gray1} />}
          validate={[hasMoreCharactersThan(15)]}
        />

        <Form.RadioGroup label='Resolution' name='resolution' required={true}>
          <Form.Radio value='accepted' label='Accept' />
          <Form.Radio value='rejected' label='Reject' />
        </Form.RadioGroup>

        <Form.SubmitButton label='Submit' />
      </Form>
    </div>
  </>
);

export const Default = Template.bind({});
