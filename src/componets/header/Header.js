import React from 'react';

import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import DefaultLogo from '../../utils/images/logo.svg';
import BonusLogo from '../../utils/images/logo-bonus.svg';

const Header = () => {
  const game = useSelector((state) => state.game);
  const { score, mode } = game;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={mode === 'default' ? DefaultLogo : BonusLogo} alt="Logo" />
      </div>
      <div className={styles.score}>
        <p className={styles.score__heading}>score</p>
        <p className={styles.score__text}>{score}</p>
      </div>
    </header>
  );
};

export default Header;
