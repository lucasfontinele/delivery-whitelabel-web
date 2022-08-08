import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import AddressRegister from '.';

export default {
  title: 'Pages/AddressRegister',
  component: AddressRegister,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/address/register',
    },
  },
} as Meta;

export const Default: Story = args => <AddressRegister {...args} />;

Default.args = {};
