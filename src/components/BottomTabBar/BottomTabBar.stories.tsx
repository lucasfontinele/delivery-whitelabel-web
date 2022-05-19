import { Story, Meta } from '@storybook/react/types-6-0';

import BottomTabBar from '.';

export default {
  title: 'Component/BottomTabBar',
  component: BottomTabBar,
} as Meta;

const Template: Story = args => <BottomTabBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
