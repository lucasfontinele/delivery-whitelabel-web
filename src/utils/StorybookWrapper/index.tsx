import { ReactNode } from 'react';

import Header from 'components/Header';
import NavBar from 'components/NavBar';

import styles from './styles.module.scss';

type StorybookWrapperProps = {
  children: ReactNode;
};

function StorybookWrapperProps({ children }: StorybookWrapperProps) {
  return (
    <div className={styles.container}>
      <Header />

      <main>{children}</main>

      <NavBar />
    </div>
  );
}

export default StorybookWrapperProps;
