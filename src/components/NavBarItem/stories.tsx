/* eslint-disable no-alert */
import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import NavBarItem, { NavBarItemProps } from '.';
import mock from './mock';

export default {
  title: 'Component/NavBarItem',
  component: NavBarItem,
  decorators: [withRouter],
  args: mock,
} as Meta;

export const Default: Story<NavBarItemProps> = args => <NavBarItem {...args} />;

export const Active: Story<NavBarItemProps> = args => <NavBarItem {...args} />;

Active.args = {
  isActive: true,
};

export const Disabled: Story<NavBarItemProps> = args => (
  <NavBarItem {...args} />
);

Disabled.args = {
  href: undefined,
};

export const withClick: Story<NavBarItemProps> = args => (
  <NavBarItem {...args} />
);

withClick.args = {
  href: undefined,
  handleClick: () => alert('clicked'),
};
