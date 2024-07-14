import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

function Input({ label, name, type, value, handleChange, required }) {
  return (
    <div className={styles.field}>
      <input
        name={name}
        className={styles.input}
        onChange={handleChange}
        defaultValue={value}
        type={type}
        required={required}
      />
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
        <span className={styles.requiredIcon}>*</span>
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
