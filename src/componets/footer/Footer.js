import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
  const dispatch = useDispatch();
  const settingsHandler = () => {
    dispatch(modalActions.openSettings());
  };

  const rulesHandler = () => {
    dispatch(modalActions.openRules());
  };
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon
        icon={faCog}
        className={styles.footer__icon}
        onClick={settingsHandler}
      />
      <button className={styles.footer__btn} onClick={rulesHandler}>
        rules
      </button>
    </footer>
  );
};

export default Footer;
