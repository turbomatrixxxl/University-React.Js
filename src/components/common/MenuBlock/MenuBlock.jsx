import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'components/main/Paper';

import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import clsx from 'clsx';

import styles from './MenuBlock.module.css';

export default function MenuBlock({ handleEdit, handleDelete, className }) {
  return (
    <Paper className={clsx(className, styles.paper)}>
      <div className={clsx(styles.edit, styles.container)}>
        <button onClick={handleEdit} className={styles.button}>
          <HiPencilAlt />
        </button>
        <p className={styles.name}>Edit</p>
      </div>
      <div className={styles.container}>
        <button onClick={handleDelete} className={styles.button}>
          <HiTrash />
        </button>
        <p className={styles.name}>Delete</p>
      </div>
    </Paper>
  );
}

MenuBlock.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  className: PropTypes.string,
};
