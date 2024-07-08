import React from 'react';
// import PropTypes from 'prop-types';
import { HiAcademicCap, HiBookOpen, HiChevronLeft } from 'react-icons/hi2';

import Menu from './Menu/Menu';

import styles from './Sidebar.module.css';

function Sidebar() {
  const isMenuVisible = true;

  const menuItems = [
    {
      name: 'University',
      icon: <HiBookOpen />,
    },
    {
      name: 'Faculties',
      icon: <HiAcademicCap />,
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}></div>
      <button className={styles.button}>
        <HiChevronLeft />
      </button>

      <Menu items={menuItems} isVisible={isMenuVisible} />
    </aside>
  );
}

export default Sidebar;
