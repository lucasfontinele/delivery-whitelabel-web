import { Story, Meta } from '@storybook/react/types-6-0';

import Snackbar from '.';
import type { SnackbarProps } from './Snackbar.misc';

export default {
  title: 'Component/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = args => <Snackbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
