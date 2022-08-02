/* eslint-disable no-alert */
import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavBar from '.';

export default {
  title: 'Component/NavBar',
  component: NavBar,
  decorators: [withRouter],
} as Meta;

export const Default: Story = args => <NavBar {...args} />;
