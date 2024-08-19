import React from 'react';
import PropTypes from 'prop-types';
import { HiX } from 'react-icons/hi';
import Button from 'components/common/Button';

import fingerUp from '../../images/fingerUp.png';

import styles from './DeleteModal.module.css';

function DeleteModal({
  isDeleteModalVisible,
  handleDeleteModalClose,
  handleDeleteYes,
  handleDeleteNo,
  dialogDeleteRef,
  contDeleteRef,
}) {
  if (!isDeleteModalVisible) {
    return;
  }

  return (
    isDeleteModalVisible && (
      <dialog ref={dialogDeleteRef} className={styles.modalClassName}>
        <div ref={contDeleteRef} className={styles.content}>
          <button
            className={styles.closeModal}
            id="closeModal"
            onClick={handleDeleteModalClose}
          >
            <HiX size="24px" />
          </button>
          <img className={styles.fingerUp} src={fingerUp} alt="finger up" />

          <div className={styles.modalTitleWarningContainer}>
            <p className={styles.modalTitle}>faculty removal</p>
            <p className={styles.modalDeleteWarning}>
              All materials and information about the city will be removed
            </p>
          </div>

          <div className={styles.buttonsContainer}>
            <Button
              handleClick={handleDeleteNo}
              disabled={false}
              type="submit"
              variant={'secondary'}
            >
              No
            </Button>
            <Button
              handleClick={handleDeleteYes}
              disabled={false}
              type="submit"
              variant={'notActive'}
            >
              Yes
            </Button>
          </div>
        </div>
      </dialog>
    )
  );
}

DeleteModal.propTypes = {
  isModalVisible: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

export default DeleteModal;
