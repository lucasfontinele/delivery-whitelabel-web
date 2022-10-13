import { Story, Meta } from '@storybook/react/types-6-0';

import InAppPurchase from '.';

export default {
  title: 'Component/InAppPurchase',
  component: InAppPurchase,
} as Meta;

const Template: Story = args => (
  <InAppPurchase
    creditCard={{
      flag: '',
      card: '',
    }}
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
