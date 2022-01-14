import React from 'react';
import patern from '../../../utils/images/bg-triangle.svg';
import styles from './DefaultPicker.module.css';

import Chip from '../../ui/choice/Chip';

const RSPScreen = () => {
  return (
    <div className={styles.picker} aria-label="default-picker">
      <img className={styles.picker__bg} src={patern} alt="triangle" />
      <Chip type="rock" />
      <Chip type="scissors" />
      <Chip type="paper" />
    </div>
  );
};

export default RSPScreen;
