import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
// import { HiChevronLeft } from 'react-icons/hi2';

import styles from './menu.module.css';

function Menu({ items, isVisible }) {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {items.map((item, index) => {
          return (
            <MenuItem
              isVisible={isVisible}
              key={index}
              item={item}
              isActive={index === 0}
            />
          );
        })}
      </ul>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Menu;
