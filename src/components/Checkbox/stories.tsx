import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox from '.';

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {};
