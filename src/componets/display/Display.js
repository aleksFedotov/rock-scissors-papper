import React from 'react';

import { useSelector } from 'react-redux';

import DefaultPicker from './default-picker/DefaultPicker';
import BonusPicker from './bonus-picker/BonusPicker';
import Result from './result/Result';

import styles from './Display.module.css';

const Display = () => {
  const game = useSelector((state) => state.game);

  const { mode, userChoice } = game;

  let content;

  const picker = mode === 'default' ? <DefaultPicker /> : <BonusPicker />;

  if (!userChoice) {
    content = picker;
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
