import { Story, Meta } from '@storybook/react/types-6-0';

import Tabs from '.';
import { mock, TabsProps } from './misc';

export default {
  title: 'Component/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = args => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mock,
};
