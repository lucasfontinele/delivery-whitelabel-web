import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';
import type { ButtonProps } from './Button.misc';
import styles from './Button.styles.module.scss';

export default {
  title: 'Component/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <div className={styles.storybookContainer}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  content: 'center',
  children: 'Fazer pedido',
};

export const Contained = Template.bind({});

Contained.args = {
  content: 'center',
  children: 'Confirmar',
  variant: 'contained',
};

export const Outlined = Template.bind({});

Outlined.args = {
  content: 'center',
  children: 'Confirmar',
  variant: 'outlined',
};
