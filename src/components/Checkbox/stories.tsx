import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox from '.';
import { CheckboxProps } from './misc';

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  onChangeChecked: () => {
    /* */
  },
};
