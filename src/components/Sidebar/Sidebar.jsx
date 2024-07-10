import React from 'react';
// import PropTypes from 'prop-types';
import {
  HiAcademicCap,
  HiBookOpen,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';
import Button from 'components/common/Button';
import Menu from './Menu/Menu';

import { Component } from 'react';
import clsx from 'clsx';
// import { isVisible } from '@testing-library/user-event/dist/utils';

import styles from './Sidebar.module.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  menuItems = [
    {
      name: 'University',
      icon: <HiBookOpen />,
    },
    {
      name: 'Faculties',
      icon: <HiAcademicCap />,
    },
  ];

  handleClick() {
    // console.log(this.state.isVisible);

    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const isMenuVisible = this.state.isMenuVisible;

    // const Status = () => {
    //   if (isMenuVisible) {
    //     // console.log('hi');
    //     return (
    //       <Button customStyles={styles.button} handleClick={this.handleClick}>
    //         <HiChevronLeft />
    //       </Button>
    //     );
    //   } else {
    //     // console.log('bye');
    //     return (
    //       <Button customStyles={styles.button} handleClick={this.handleClick}>
    //         <HiChevronRight />
    //       </Button>
    //     );
    //   }
    // };

    const SidebarButtonArrowStatus = () => {
      if (isMenuVisible) {
        return <HiChevronLeft />;
      } else {
        return <HiChevronRight />;
      }
    };

    return (
      <aside className={clsx(styles.sidebar, !isMenuVisible && styles.hide)}>
        <div className={styles.sidebarHeader}></div>
        {/* {Status()} */}
        <Button customStyles={styles.button} handleClick={this.handleClick}>
          <SidebarButtonArrowStatus />
        </Button>

        <Menu items={this.menuItems} isVisible={isMenuVisible} />
      </aside>
    );
  }
}

export default Sidebar;
