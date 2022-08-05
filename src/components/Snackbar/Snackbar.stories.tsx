import { Story, Meta } from '@storybook/react/types-6-0';

import Snackbar from '.';

export default {
  title: 'Component/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story = args => <Snackbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
