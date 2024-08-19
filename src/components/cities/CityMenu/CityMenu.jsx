import Paper from 'components/main/Paper';
import React from 'react';

import styles from './CityMenu.module.css';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import clsx from 'clsx';

export default function CityMenu({
  handleEditCity,
  handleDeleteCity,
  className,
}) {
  return (
    <Paper className={clsx(className, styles.paper)}>
      <div className={clsx(styles.edit, styles.container)}>
        <button onClick={handleEditCity} className={styles.button}>
          <HiPencilAlt />
        </button>
        <p className={styles.name}>Edit</p>
      </div>
      <div className={styles.container}>
        <button onClick={handleDeleteCity} className={styles.button}>
          <HiTrash />
        </button>
        <p className={styles.name}>Delete</p>
      </div>
    </Paper>
  );
}
