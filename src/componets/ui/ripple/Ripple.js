import React from 'react';

import styles from './Ripple.module.css';

const Ripple = () => {
  return (
    <div class={styles.container}>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
      <div className={styles.ripple}></div>
    </div>
  );
};

export default Ripple;
