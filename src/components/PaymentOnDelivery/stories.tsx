import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOnDelivery from '.';
import type { PaymentOnDeliveryProps } from './misc';

export default {
  title: 'Component/PaymentOnDelivery',
  component: PaymentOnDelivery,
} as Meta;

const Template: Story<PaymentOnDeliveryProps> = args => (
  <PaymentOnDelivery {...args} />
);

export const Default = Template.bind({});

Default.args = {
  paymentType: 'cash',
  onChangePaymentType: () => {
    /* */
  },
};
