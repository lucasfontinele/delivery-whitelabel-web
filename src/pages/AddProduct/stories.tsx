import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import AddProduct from '.';

export default {
  title: 'Pages/AddProduct',
  component: AddProduct,
  decorators: [withRouter],
} as Meta;

export const Default: Story = args => <AddProduct {...args} />;

Default.args = {};
