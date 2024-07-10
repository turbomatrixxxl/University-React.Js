import React from 'react';

import styles from './Input.module.css';

export default function Input({ label, name, type, value, handleChange }) {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        type={type}
        required
      />
      <label htmlFor={name} className={styles.inputLabel}>
        <span>{label}</span>
      </label>
    </div>
  );
}
