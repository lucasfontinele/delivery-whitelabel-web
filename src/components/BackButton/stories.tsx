import { Story, Meta } from '@storybook/react/types-6-0';

import BackButton from '.';

export default {
  title: 'Component/BackButton',
  component: BackButton,
} as Meta;

const Template: Story = args => <BackButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
