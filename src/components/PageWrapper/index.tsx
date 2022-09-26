import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import NavBar from 'components/NavBar';
import BottomCart from 'components/BottomCart';

import styles from './styles.module.scss';

function PageWrapper() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContainer}>
        <Outlet />
      </main>

      {/* <BottomCart /> */}
      <NavBar />
    </div>
  );
}

export default PageWrapper;
