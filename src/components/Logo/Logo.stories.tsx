import { Story, Meta } from '@storybook/react/types-6-0';

import Logo, { LogoProps } from '.';

export default {
  title: 'Component/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  height: 35,
  width: 60,
};
