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
  dialogRef,
  contRef,
  label,
  name,
  value,
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
          <p className={styles.modalTitle}>Edit {label} information</p>
          <div className={styles.inputCont}>
            <Input
              handleChange={handleChange}
              type={'text'}
              label={label}
              value={value}
              name={name}
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
  isModalVisible: PropTypes.bool,
  handleModalClose: PropTypes.func,
  handleChange: PropTypes.func,
  handleSave: PropTypes.func,
  dialogRef: PropTypes.object,
  contRef: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
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
