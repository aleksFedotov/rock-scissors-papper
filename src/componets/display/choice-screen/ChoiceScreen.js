import React from 'react';

import PSRScreen from './psr-choice-screen/PSRScreen';
import styles from './ChoiceScreen.module.css';

const ChoiceScreen = () => {
  return (
    <div className={styles.choice_screen}>
      <PSRScreen />
    </div>
  );
};

export default ChoiceScreen;
