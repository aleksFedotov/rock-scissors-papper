import React from 'react';
import Modal from '../ui/modal/Modal';

import styles from './Rules.module.css';
import { ReactComponent as DefaultRules } from '../../utils/images/image-rules.svg';
import { ReactComponent as BonusRules } from '../../utils/images/image-rules-bonus.svg';

import { ReactComponent as CloseIcon } from '../../utils/images/icon-close.svg';

const Rules = () => {
  return (
    <Modal>
      <div className={styles.rules}>
        <h2 className={styles.rules__heading}>rules</h2>
        <button className={styles.rules__close}>
          <CloseIcon />
        </button>
        <DefaultRules className={styles.rules__context} />
      </div>
    </Modal>
  );
};

export default Rules;
