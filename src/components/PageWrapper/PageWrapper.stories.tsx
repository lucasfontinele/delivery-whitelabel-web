import { Meta, Story } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import PageWrapper from '.';
import styles from './styles.module.scss';

export default {
  title: 'Component/PageWrapper',
  component: PageWrapper,
  decorators: [withRouter],
} as Meta;

const Template: Story = args => <PageWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div className={styles.storybookExamplePage}>Hello World</div>,
};
