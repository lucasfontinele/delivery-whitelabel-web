import Logo from 'components/Logo';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <Logo width={60} height={35} />

      <button className={styles.notificationIconButtonContainer} type="button">
        <img src="/assets/images/icon-notification.svg" alt="Bell" />

        <div className={styles.hasNotification} />
      </button>
    </header>
  );
}

export default Header;
