import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../ui/modal/Modal';
import { modalActions } from '../../store/modal';
import { gameActions } from '../../store/game';

import styles from './ModalContent.module.css';
import { ReactComponent as DefaultRules } from '../../utils/images/image-rules.svg';
import { ReactComponent as BonusRules } from '../../utils/images/image-rules-bonus.svg';

import { ReactComponent as CloseIcon } from '../../utils/images/icon-close.svg';

const Rules = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const game = useSelector((state) => state.game);

  const { rulesIsShowm, settingsIsShowm } = modal;
  const { mode, userChoice } = game;

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  const modeChangeHandler = (e) => {
    if (userChoice) {
      alert(
        'You cannot change game mode now. Please start a new game to change game mode'
      );
      return;
    }
    const mode = e.target.getAttribute('data-mode');
    dispatch(gameActions.changeMode(mode));
  };

  const resetScoreHandler = () => {
    dispatch(gameActions.resetScore());
  };

  let content;

  if (rulesIsShowm) {
    content =
      mode === 'default' ? (
        <DefaultRules className={styles.rules__context} />
      ) : (
        <BonusRules className={styles.rules__context} />
      );
  } else if (settingsIsShowm) {
    content = (
      <div className={styles.settings}>
        <h3>Mode</h3>
        <ul className={styles.settings__modeList}>
          <li
            className={`${styles.settings__mode} ${
              mode === 'default' && styles.active
            }`}
            data-mode="default"
            onClick={modeChangeHandler}
          >
            Rock Paper Scissors
          </li>
          <li
            className={`${styles.settings__mode} ${
              mode === 'bonus' && styles.active
            }`}
            data-mode="bonus"
            onClick={modeChangeHandler}
          >
            Rock Paper Scissors Lizard Spock
          </li>
        </ul>

        <button
          className={styles.settings__resetBtn}
          onClick={resetScoreHandler}
        >
          Reset Score
        </button>
      </div>
    );
  }

  return (
    <Modal>
      <div className={styles.rules}>
        <h2 className={styles.rules__heading}>
          {rulesIsShowm ? 'rules' : 'settings'}
        </h2>
        {content}
        <button className={styles.rules__close}>
          <CloseIcon onClick={closeModal} />
        </button>
      </div>
    </Modal>
  );
};

export default Rules;
