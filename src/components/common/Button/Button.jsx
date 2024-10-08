import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({
  className,
  disabled,
  variant = '',
  type = '',
  customStyles,
  handleClick,
  children,
}) {
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
        className,
        clsx(
          variant === 'primary'
            ? clsx(styles.button, styles.primary)
            : variant === 'secondary'
            ? clsx(styles.button, styles.secondary)
            : variant === 'notActive'
            ? clsx(styles.button, styles.notActive)
            : variant === 'icon'
            ? clsx(styles.icon)
            : styles.button
        ),
        customStyles
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  customStyles: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Button;
