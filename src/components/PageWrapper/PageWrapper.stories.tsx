import { Story, Meta } from '@storybook/react/types-6-0';

import PageWrapper, { PageWrapperProps } from '.';

export default {
  title: 'Component/PageWrapper',
  component: PageWrapper,
} as Meta;

const Template: Story<PageWrapperProps> = args => <PageWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
