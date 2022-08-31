import { Story, Meta } from '@storybook/react/types-6-0';

import CommerceInfo from '.';
import type { CommerceInfoProps } from './misc';

export default {
  title: 'Component/CommerceInfo',
  component: CommerceInfo,
} as Meta;

const Template: Story<CommerceInfoProps> = args => <CommerceInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://i.imgur.com/UF0uF3p.png',
  name: 'Quiosque do Bem',
  commerceType: 'Quiosque',
  distance: '1km de distância',
  minimumOrderPrice: 15,
  opening: 'Hoje • 7h às 22h',
};
