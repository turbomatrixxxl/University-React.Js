import React from 'react';

import styles from './Input.module.css';

export default function Input({ label, type, value, handleChange }) {
  return (
    <label className={styles.inputLabel}>
      <span className={styles.inputPlaceholder}>{label}</span>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        type={type}
        required
      />
    </label>
  );
}
