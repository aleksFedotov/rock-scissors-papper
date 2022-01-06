import React from 'react';

import Chip from '../../ui/choice/Chip';
import Ripple from '../../ui/ripple/Ripple';

import styles from './Result.module.css';

const Result = () => {
  const userChoice = 'scissors';
  const houseChoice = 'rock';

  const result = 'You win';
  return (
    <div className={styles.result}>
      <div className={`${styles.choice} ${styles.choice_user}`}>
        <p className={styles.choice__header}>You picked</p>
        <div className={styles.choice__chip_box}>
          <Chip type={userChoice} result={true} win={result === 'You win'} />
          {result === 'You win' && <Ripple />}
        </div>
      </div>
      {result && (
        <div className={styles.status}>
          <p>{result}</p>
          <button>Play again</button>
        </div>
      )}

      <div className={`${styles.choice}  ${styles.choice_house}`}>
        <p className={styles.choice__header}>The house picked</p>
        {result ? (
          <Chip type={houseChoice} result={true} win={result === 'You lost'} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>
    </div>
  );
};

export default Result;
