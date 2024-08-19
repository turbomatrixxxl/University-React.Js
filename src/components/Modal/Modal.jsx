import React from 'react';
import PropTypes from 'prop-types';
import { HiX } from 'react-icons/hi';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

import pencil from '../../images/school.png';

import styles from './Modal.module.css';

function Modal({
  isModalVisible,
  handleModalClose,
  handleChange,
  handleSave,
  cityName,
  dialogRef,
  contRef,
}) {
  if (!isModalVisible) {
    return;
  }

  return (
    isModalVisible && (
      <dialog ref={dialogRef} className={styles.modalClassName}>
        <div ref={contRef} className={styles.content}>
          <button
            className={styles.closeModal}
            id="closeModal"
            onClick={handleModalClose}
          >
            <HiX size="24px" />
          </button>
          <img className={styles.pencil} src={pencil} alt="pencil" />
          <p className={styles.modalTitle}>edit city information</p>
          <div className={styles.inputCont}>
            <Input
              handleChange={handleChange}
              type={'text'}
              label={'City'}
              value={cityName}
              name="city"
              required={true}
            />
          </div>
          <Button
            handleClick={handleSave}
            disabled={false}
            type="submit"
            variant={'notActive'}
          >
            save
          </Button>
        </div>
      </dialog>
    )
  );
}

Modal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default Modal;

// export class Modal extends Component {
//   static propTypes = {
//     isModalVisible: PropTypes.bool.isRequired,
//     handleModalClose: PropTypes.func.isRequired,
//   };

//   render() {
//     const { isModalVisible, handleModalClose } = this.props;

//     if (!isModalVisible) {
//       return;
//     }

//     return (
//       isModalVisible && (
//         <dialog className={styles.modalClassName}>
//           <div className={styles.content}>
//             <button
//               className={styles.closeModal}
//               id="closeModal"
//               onClick={handleModalClose}
//             >
//               <HiX size="24px" />
//             </button>
//             <img className={styles.pencil} src={pencil} alt="pencil" />
//             <p className={styles.modalTitle}>edit city information</p>
//             <div className={styles.inputCont}>
//               <Input
//                 type={'text'}
//                 label={'City'}
//                 // value={city}
//                 name="city"
//                 // handleChange={this.handleInviteButtonChange}
//                 required={true}
//               />
//             </div>
//             <Button disabled={false} type="submit" variant={'notActive'}>
//               save
//             </Button>
//           </div>
//         </dialog>
//       )
//     );
//   }
// }

// export default Modal;
