import { Story, Meta } from '@storybook/react/types-6-0';

import PageWrapper, { PageWrapperProps } from '.';
import styles from './styles.module.scss';

export default {
  title: 'Component/PageWrapper',
  component: PageWrapper,
} as Meta;

const Template: Story<PageWrapperProps> = args => <PageWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div className={styles.storybookExamplePage}>Hello World</div>,
};
