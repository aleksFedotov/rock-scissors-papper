import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon icon={faCog} className={styles.footer__icon} />
      <button className={styles.footer__btn}>rules</button>
    </footer>
  );
};

export default Footer;
