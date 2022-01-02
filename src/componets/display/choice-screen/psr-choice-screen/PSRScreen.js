import React from 'react';
import patern from '../../../../utils/images/bg-triangle.svg';
import styles from './PSRScreen.module.css';

import Chip from '../../../ui/choice/Chip';

const PSRScreen = () => {
  return (
    <div className={styles.picker}>
      <div>
        <img src={patern} alt="triangle" />
      </div>

      <Chip type="rock" />
      <Chip type="scissors" />
      <Chip type="papper" />
    </div>
  );
};

export default PSRScreen;
