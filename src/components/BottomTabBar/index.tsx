import React from 'react';

import styles from './styles.module.scss';

function BottomTabBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.itemsContainer}>
        <li className={styles.itemContainer}>
          <img
            className={styles.icon}
            src="/assets/images/icon-menu.svg"
            alt="Icon menu"
          />

          <p>Cardápio</p>
        </li>

        <li className={styles.itemContainer}>
          <img
            className={styles.icon}
            src="/assets/images/icon-maps.svg"
            alt="Icon maps"
          />

          <p>Mapa</p>
        </li>

        <li className={styles.itemContainer}>
          <img
            className={styles.icon}
            src="/assets/images/icon-photos.svg"
            alt="Icon menu"
          />

          <p>Fotos</p>
        </li>

        <li className={styles.itemContainer}>
          <img
            className={styles.icon}
            src="/assets/images/icon-news.svg"
            alt="Icon news"
          />

          <p>Notícias</p>
        </li>

        <li className={styles.itemContainer}>
          <img
            className={styles.icon}
            src="/assets/images/icon-profile.svg"
            alt="Icon profile"
          />

          <p>Perfil</p>
        </li>
      </ul>
    </nav>
  );
}

export default BottomTabBar;
