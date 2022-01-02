import React from 'react';

import ChoiceScreen from './choice-screen/ChoiceScreen';
import styles from './Display.module.css';

const Display = () => {
  return (
    <section className={styles.display}>
      <ChoiceScreen />
    </section>
  );
};

export default Display;
