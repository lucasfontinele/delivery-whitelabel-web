import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import Card, { CardProps } from '.';
import mock from './mock';

export default {
  title: 'Component/Card',
  component: Card,
  decorators: [withRouter],
} as Meta;

export const Default: Story<CardProps> = args => <Card {...args} />;

Default.args = {
  ...mock,
  promotionalPrice: 0,
};

export const WithPromotionalPrice: Story<CardProps> = args => (
  <Card {...args} />
);

WithPromotionalPrice.args = {
  ...mock,
};
