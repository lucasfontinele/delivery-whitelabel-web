import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import BottomCart from '.';

export default {
  title: 'Component/BottomCart',
  component: BottomCart,
} as Meta;

const Template: Story = args => (
  <BrowserRouter>
    <BottomCart {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  foo: 'bar',
};
