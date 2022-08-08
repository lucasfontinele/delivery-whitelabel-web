import { Story, Meta } from '@storybook/react/types-6-0';

import Input from '.';
import { StorybookContainer } from './styles';
import type { InputProps } from './Input.misc';

export default {
  title: 'Component/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => (
  <StorybookContainer>
    <Input {...args} />
  </StorybookContainer>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Here an example',
};

export const WithError = Template.bind({});

WithError.args = {
  error: 'Here some error',
};
