import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Paper from 'components/main/Paper';
import { BsThreeDotsVertical } from 'react-icons/bs';

import MenuBlock from '../MenuBlock';
import useToggle from 'hooks/useToggle';
import DeleteModal from 'components/DeleteModal';
import Modal from 'components/Modal';
import { useDispatch } from 'react-redux';

import styles from './InfoItemBlock.module.css';

export default function InfoItemBlock({
  children,
  id,
  contDeleteRef,
  dialogDeleteRef,
  contRef,
  dialogRef,
  onDelete,
  onEdit,
  name,
  value,
  label,
  className,
  divClassName,
}) {
  const [isMenuVisible, toggleMenu] = useToggle(false);

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const [newName, setNewName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('mousedown', handleClickOutside);

    function handleKeyDown(event) {
      // console.log(event.key);

      if (event.key === 'Escape') {
        handleModalClose();
        handleDeleteModalClose();
      }
    }

    function handleClickOutside(event) {
      // console.log(event.target);

      if (
        event.target === dialogRef.current &&
        event.target !== contRef.current
      ) {
        handleModalClose();
      }
      if (
        event.target === dialogDeleteRef.current &&
        event.target !== contDeleteRef.current
      ) {
        handleDeleteModalClose();
      }
    }

    return () => {
      // document.body.removeEventListener('keydown', handleKeyDown);
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contDeleteRef, contRef, dialogDeleteRef, dialogRef]);

  function handleModalClose() {
    setIsEditModalVisible(false);
    // toggleItemList();
  }

  function handleDeleteModalClose() {
    setIsDeleteModalVisible(false);
    // toggleItemList();
  }

  function handleOpenModal() {
    setIsEditModalVisible(true);
    // toggleItemList();

    // console.log('open');
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalVisible(true);
    // toggleItemList();

    // console.log('open');
  }

  const handleToggle = () => {
    toggleMenu();
  };

  function handleDeleteItem(itemId) {
    dispatch(onDelete(itemId));
  }

  function handleEditItem() {
    dispatch(onEdit({ id, name: newName }));
  }

  function handleEditInputChange(e) {
    setNewName(e.target.value);
  }

  return (
    <>
      <DeleteModal
        isDeleteModalVisible={isDeleteModalVisible}
        handleDeleteModalClose={handleDeleteModalClose}
        dialogDeleteRef={dialogDeleteRef}
        contDeleteRef={contDeleteRef}
        handleDeleteNo={() => {
          handleDeleteModalClose();
        }}
        handleDeleteYes={() => {
          handleDeleteItem(id);
          handleDeleteModalClose();
        }}
      />
      <Modal
        name={name}
        label={label}
        value={value}
        dialogRef={dialogRef}
        contRef={contRef}
        handleModalClose={handleModalClose}
        isModalVisible={isEditModalVisible}
        handleChange={handleEditInputChange}
        handleSave={() => {
          handleEditItem();

          handleModalClose();
        }}
      />

      <Paper className={className}>
        <div className={divClassName}>
          {children}
          <button onClick={handleToggle} className={styles.button}>
            <BsThreeDotsVertical />
          </button>
        </div>
        {isMenuVisible && (
          <MenuBlock
            className={styles.menu}
            handleDelete={() => {
              handleOpenDeleteModal();
              handleToggle();
            }}
            handleEdit={() => {
              handleOpenModal();
              handleToggle();
            }}
          />
        )}
      </Paper>
    </>
  );
}

InfoItemBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  contDeleteRef: PropTypes.object,
  dialogDeleteRef: PropTypes.object,
  contRef: PropTypes.object,
  dialogRef: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
};
