import React from 'react';

import patern from '../../../utils/images/bg-pentagon.svg';
import styles from './BonusPicker.module.css';

import Chip from '../../ui/choice/Chip';

const BonusPicker = () => {
  return (
    <div className={styles.picker}>
      <img className={styles.picker__bg} src={patern} alt="triangle" />
      <Chip type="rock" mode="bonus" />
      <Chip type="scissors" mode="bonus" />
      <Chip type="papper" mode="bonus" />
      <Chip type="lizard" mode="bonus" />
      <Chip type="spock" mode="bonus" />
    </div>
  );
};

export default BonusPicker;
