import { Story, Meta } from '@storybook/react/types-6-0';

import Search from '.';
import type { SearchProps } from './misc';

export default {
  title: 'Component/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = args => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Pesquisar',
};
