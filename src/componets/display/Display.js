import React from 'react';

import DefaultPicker from './default-picker/DefaultPicker';
import BonusPicker from './bonus-picker/BonusPicker';
import Result from './result/Result';

import styles from './Display.module.css';

const Display = () => {
  const mode = 'bonus';
  const userChoice = 'paper';

  let content;

  if (!userChoice) {
    content = mode === 'default' ? <DefaultPicker /> : <BonusPicker />;
  } else if (userChoice) {
    content = <Result />;
  }

  return (
    <section
      className={`${styles.display} ${mode === 'bonus' && styles.bonus} ${
        userChoice && styles.result
      }`}
    >
      {content}
    </section>
  );
};

export default Display;
