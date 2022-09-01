import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import StorybookWrapper from 'utils/StorybookWrapper';

import Offers from '.';

export default {
  title: 'Pages/Offers',
  component: Offers,
  decorators: [withRouter],
} as Meta;

export const Default: Story = args => (
  <StorybookWrapper>
    <Offers {...args} />
  </StorybookWrapper>
);

Default.args = {};
