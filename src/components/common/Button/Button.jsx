import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ variant = '', customStyles, handleClick, children }) {
  //   const getButtonClass = () => {
  //     if (variant === 'icon') {
  //       return `${styles.button} ${styles.primary}`;
  //     }
  //     if (variant === 'danger') {
  //       return `${styles.button} ${styles.danger}`;
  //     }

  //     return `${styles.button}`;
  //   };

  //   console.log(
  //     clsx(
  //       variant === 'icon'
  //         ? 'button,primary'
  //         : variant === 'danger'
  //         ? 'button, danger'
  //         : `${styles.button}`
  //     )
  //   );

  //   console.log(variant);

  return (
    <button
      onClick={handleClick}
      className={clsx(
        clsx(
          variant === 'icon'
            ? clsx(styles.button, styles.primary)
            : variant === 'danger'
            ? clsx(styles.button, styles.danger)
            : styles.button
        ),
        customStyles
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  customStyles: PropTypes.string,
};

export default Button;
