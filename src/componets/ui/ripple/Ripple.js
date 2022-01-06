import React, { Fragment } from 'react';

import styles from './Ripple.module.css';

const Ripple = () => {
  return (
    <Fragment>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
    </Fragment>
  );
};

export default Ripple;
