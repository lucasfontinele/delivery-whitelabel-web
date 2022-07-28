import React from 'react';

import Header from 'components/Header';

import NavBar from 'components/NavBar';
import styles from './styles.module.scss';

export type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.container}>
      <Header />

      <main>{children}</main>

      <NavBar />
    </div>
  );
}

export default PageWrapper;
