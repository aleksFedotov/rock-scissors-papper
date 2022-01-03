import React, { useState } from 'react';

import DefaultPicker from './default-picker/DefaultPicker';
import BonusPicker from './bonus-picker/BonusPicker';

import styles from './Display.module.css';

const Display = () => {
  const [mode, setMode] = useState('bonus');
  return (
    <section
      className={`${styles.display} ${mode === 'bonus' && styles.bonus}`}
    >
      {mode === 'default' ? <DefaultPicker /> : <BonusPicker />}
    </section>
  );
};

export default Display;
