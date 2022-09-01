import { Story, Meta } from '@storybook/react/types-6-0';

import CategoriesScroll from '.';

export default {
  title: 'Component/CategoriesScroll',
  component: CategoriesScroll,
} as Meta;

const Template: Story = args => <CategoriesScroll {...args} />;

export const Default = Template.bind({});

Default.args = {};
