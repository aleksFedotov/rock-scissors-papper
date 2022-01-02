import React from 'react';

import styles from './Header.module.css';
import RSPLogo from '../../utils/images/logo.svg';
// import RSPLSLogo from '../../utils/images/logo-bonus.svg';

const Header = () => {
  const score = 12;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={RSPLogo} alt="Logo" />
      </div>
      <div className={styles.score}>
        <p className={styles.score__heading}>score</p>
        <p className={styles.score__text}>{score}</p>
      </div>
    </header>
  );
};

export default Header;
