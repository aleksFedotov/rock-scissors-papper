import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { modalActions } from '../../../store/modal';

import styles from './Modal.module.css';

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };
  return <div className={styles.backdrop} onClick={closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
