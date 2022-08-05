import { Story, Meta } from '@storybook/react/types-6-0';

import MenuSection from '.';
import type { MenuSectionProps } from './misc';

export default {
  title: 'Component/MenuSection',
  component: MenuSection,
} as Meta;

const Template: Story<MenuSectionProps> = args => <MenuSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Molhos',
  description: 'Escolha até 2 itens',
  mandatory: true,
  children: <p>Hello world</p>,
};
