import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MenuItem.module.css';

function MenuItem({ item, isActive, isVisible }) {
  // console.log(item);
  const nameClass = clsx(styles.menuItem, isActive && styles.menuItemActive);

  return (
    isVisible && (
      <li className={nameClass}>
        {item.icon} {item.name}
      </li>
    )
  );
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
};

export default MenuItem;
