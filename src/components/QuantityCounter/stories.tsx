import { Story, Meta } from '@storybook/react/types-6-0';

import QuantityCounter from '.';
import type { QuantityCounterProps } from './misc';

export default {
  title: 'Component/QuantityCounter',
  component: QuantityCounter,
} as Meta;

const Template: Story<QuantityCounterProps> = args => (
  <QuantityCounter {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variantColor: '#171717',
};
