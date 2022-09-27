import { Story, Meta } from '@storybook/react/types-6-0';

import CategoriesScroll from '.';
import { CategoriesScrollProps, mock } from './misc';

export default {
  title: 'Component/CategoriesScroll',
  component: CategoriesScroll,
} as Meta;

const Template: Story<CategoriesScrollProps> = args => (
  <CategoriesScroll {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: mock.options,
};
