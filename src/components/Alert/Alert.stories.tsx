import { Meta, Story } from '@storybook/react/types-6-0';

import Alert from '.';
import type { AlertProps } from './Alert.misc';

export default {
  title: 'Component/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'default',
  message: 'Here an example message',
};
