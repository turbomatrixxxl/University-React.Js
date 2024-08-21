import React from 'react';
import PropTypes from 'prop-types';

import styles from './Alert.module.css';

export default function Alert({ message }) {
  return <p className={styles.alert}>{message}</p>;
}

Alert.propTypes = {
  message: PropTypes.string,
};
