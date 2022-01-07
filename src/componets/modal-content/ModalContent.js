import React from 'react';
import Modal from '../ui/modal/Modal';

import styles from './ModalContent.module.css';
import { ReactComponent as DefaultRules } from '../../utils/images/image-rules.svg';
import { ReactComponent as BonusRules } from '../../utils/images/image-rules-bonus.svg';

import { ReactComponent as CloseIcon } from '../../utils/images/icon-close.svg';

const Rules = () => {
  const mode = 'bonus';
  const defaultIsShowm = false;
  const bonusIsShowm = true;

  let content;

  if (defaultIsShowm) {
    content =
      mode === 'default' ? (
        <DefaultRules className={styles.rules__context} />
      ) : (
        <BonusRules className={styles.rules__context} />
      );
  } else if (bonusIsShowm) {
    content = (
      <div className={styles.settings}>
        <h3>Mode</h3>
        <ul className={styles.settings__modeList}>
          <li
            className={`${styles.settings__mode} ${
              mode === 'default' && styles.active
            }`}
          >
            Rock Paper Scissors
          </li>
          <li
            className={`${styles.settings__mode} ${
              mode === 'bonus' && styles.active
            }`}
          >
            Rock Paper Scissors Lizard Spock
          </li>
        </ul>

        <button className={styles.settings__resetBtn}>Reset Score</button>
      </div>
    );
  }

  return (
    <Modal>
      <div className={styles.rules}>
        <h2 className={styles.rules__heading}>
          {defaultIsShowm ? 'rules' : 'settings'}
        </h2>
        {content}
        <button className={styles.rules__close}>
          <CloseIcon />
        </button>
      </div>
    </Modal>
  );
};

export default Rules;
