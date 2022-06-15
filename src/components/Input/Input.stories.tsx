import { Story, Meta } from '@storybook/react/types-6-0';

import Input from '.';
import styles from './Input.styles.module.scss';
import type { InputProps } from './Input.misc';

export default {
  title: 'Component/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => (
  <div className={styles.storybookContainer}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  // foo: 'bar',
};

export const WithError = Template.bind({});

WithError.args = {
  error: 'Here some error',
};
