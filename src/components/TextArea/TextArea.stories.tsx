import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea from '.';
import type { TextAreaProps } from './TextArea.misc';
import styles from './TextArea.styles.module.scss';

export default {
  title: 'Component/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = args => (
  <div className={styles.storybookContainer}>
    <TextArea {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Here some placeholder',
};
