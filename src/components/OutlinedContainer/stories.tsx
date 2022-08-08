import { Story, Meta } from '@storybook/react/types-6-0';

import OutlinedContainer from '.';
import type { OutlinedContainerProps } from './misc';

export default {
  title: 'Component/OutlinedContainer',
  component: OutlinedContainer,
} as Meta;

const Template: Story<OutlinedContainerProps> = args => (
  <OutlinedContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <p>Hello World</p>,
};
