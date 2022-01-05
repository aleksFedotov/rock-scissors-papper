import React from 'react';

import DefaultPicker from './default-picker/DefaultPicker';
import BonusPicker from './bonus-picker/BonusPicker';
import Result from './result/Result';

import styles from './Display.module.css';

const Display = () => {
  const mode = 'bonus';
  const result = true;

  let content;

  if (!result) {
    content = mode === 'default' ? <DefaultPicker /> : <BonusPicker />;
  } else if (result) {
    content = <Result />;
  }

  return (
    <section
      className={`${styles.display} ${mode === 'bonus' && styles.bonus} ${
        result && styles.result
      }`}
    >
      {content}
    </section>
  );
};

export default Display;
