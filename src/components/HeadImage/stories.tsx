import { Story, Meta } from '@storybook/react/types-6-0';

import HeartIcon from 'components/Icons/Heart';

import HeadImage from '.';
import type { HeadImageProps } from './misc';

export default {
  title: 'Component/HeadImage',
  component: HeadImage,
} as Meta;

const Template: Story<HeadImageProps> = args => <HeadImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://i.imgur.com/bkaVGCB.png',
  handleBackButton: () => {
    //
  },
};

export const WithRightContent = Template.bind({});

WithRightContent.args = {
  imageUrl: 'https://i.imgur.com/1jLCNwa.png',
  handleBackButton: () => {
    //
  },
  rightContent: <HeartIcon />,
};

export const WithImageOvershadow = Template.bind({});

WithImageOvershadow.args = {
  imageUrl: 'https://i.imgur.com/1jLCNwa.png',
  handleBackButton: () => {
    //
  },
  rightContent: <HeartIcon />,
  message: 'Fechado agora',
};
