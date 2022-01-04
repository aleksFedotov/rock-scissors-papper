import React from 'react';

import Chip from '../../ui/choice/Chip';

import styles from './Result.module.css';

const Result = () => {
  const userChoice = 'scissors';
  const houseChoice = 'rock';
  return (
    <div className={styles.result}>
      <div className={`${styles.choice} ${styles.user_choice}`}>
        <p className={styles.choice__header}>You picked</p>
        <Chip type={userChoice} result={true} />
      </div>
      <div className={`${styles.choice} ${styles.house_choice}`}>
        <p className={styles.choice__header}>The house picked</p>
        <Chip type={houseChoice} result={true} />
      </div>
    </div>
  );
};

export default Result;
