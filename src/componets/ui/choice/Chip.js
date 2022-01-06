import React from 'react';

import Ripple from '../ripple/Ripple';

import styles from './Chip.module.css';
import rock from '../../../utils/images/icon-rock.svg';
import scissors from '../../../utils/images/icon-scissors.svg';
import papper from '../../../utils/images/icon-paper.svg';
import lizard from '../../../utils/images/icon-lizard.svg';
import spock from '../../../utils/images/icon-spock.svg';

const Chip = (props) => {
  let ImgSource;
  switch (props.type) {
    case 'rock':
      ImgSource = rock;
      break;
    case 'scissors':
      ImgSource = scissors;
      break;
    case 'papper':
      ImgSource = papper;
      break;
    case 'lizard':
      ImgSource = lizard;
      break;
    case 'spock':
      ImgSource = spock;
      break;
    default:
      return;
  }

  return (
    <button
      className={`${styles.chip} ${styles[props.type]} ${
        props.mode && styles.bonus
      } ${props.result && styles.result}`}
    >
      <div className={styles.chip__img}>
        <img src={ImgSource} alt="" />
      </div>
      {/* {props.win && <Ripple />} */}
    </button>
  );
};

export default Chip;
