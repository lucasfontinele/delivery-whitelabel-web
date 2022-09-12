import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import StorybookWrapper from 'utils/StorybookWrapper';

import Checkout from '.';

export default {
  title: 'Pages/Checkout',
  component: Checkout,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/address/register',
    },
  },
} as Meta;

export const Default: Story = args => (
  <StorybookWrapper>
    <Checkout {...args} />
  </StorybookWrapper>
);

Default.args = {};
