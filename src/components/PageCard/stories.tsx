import { Story, Meta } from '@storybook/react/types-6-0';

import PageCard from '.';
import type { PageCardProps } from './misc';

export default {
  title: 'Component/PageCard',
  component: PageCard,
} as Meta;

const Template: Story<PageCardProps> = args => <PageCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <p>Hello World</p>,
};
