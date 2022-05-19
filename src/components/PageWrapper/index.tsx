import React from 'react';

import Header from 'components/Header';
import BottomTabBar from 'components/BottomTabBar';

import styles from './styles.module.scss';

export type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.container}>
      <Header />

      <main>{children}</main>

      <BottomTabBar />
    </div>
  );
}

export default PageWrapper;
