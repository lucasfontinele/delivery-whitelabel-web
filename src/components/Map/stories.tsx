import { Story, Meta } from '@storybook/react/types-6-0';

import Map from '.';
// import type { MapProps } from './misc';

export default {
  title: 'Component/Map',
  component: Map,
} as Meta;

const Template: Story = args => <Map {...args} />;

export const Default = Template.bind({});

Default.args = {
  // foo: 'bar',
};
