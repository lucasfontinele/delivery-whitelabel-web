import { Story, Meta } from '@storybook/react/types-6-0';

import ProductInfo from '.';
import type { ProductInfoProps } from './misc';

export default {
  title: 'Component/ProductInfo',
  component: ProductInfo,
} as Meta;

const Template: Story<ProductInfoProps> = args => <ProductInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Salada Primavera',
  description:
    'Folhas, gergelim, abobrinha e tomate com suco de limão e molho.',
  price: 24.9,
};
