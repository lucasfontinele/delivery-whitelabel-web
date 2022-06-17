import { Story, Meta } from '@storybook/react/types-6-0';

import Alert from '.';
import styles from './Alert.styles.module.scss';
import type { AlertProps } from './Alert.misc';

export default {
  title: 'Component/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => (
  <div className={styles.storybookContainer}>
    <Alert {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  type: 'default',
  message: 'Here an example message',
};

export const Success = Template.bind({});

Success.args = {
  type: 'success',
  message: 'Here an example message',
};

export const Danger = Template.bind({});

Danger.args = {
  type: 'danger',
  message: 'Here an example message',
};

export const Warning = Template.bind({});

Warning.args = {
  type: 'warning',
  message: 'Here an example message',
};

export const Info = Template.bind({});

Info.args = {
  type: 'info',
  message: 'Here an example message',
};
