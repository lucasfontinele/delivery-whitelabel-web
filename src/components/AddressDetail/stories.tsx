import { Story, Meta } from '@storybook/react/types-6-0';

import AddressDetail from '.';

export default {
  title: 'Component/AddressDetail',
  component: AddressDetail,
} as Meta;

const Template: Story = args => <AddressDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
