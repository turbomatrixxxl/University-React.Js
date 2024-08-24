import React from 'react';
import PropTypes from 'prop-types';
import {
  HiAcademicCap,
  HiBookOpen,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';
import Button from 'components/common/Button';
import Menu from './Menu/Menu';

// import { Component } from 'react';
import clsx from 'clsx';

import useToggle from 'hooks/useToggle';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

import { FaUserCircle } from 'react-icons/fa';
import { BiSolidLogOut } from 'react-icons/bi';

import styles from './Sidebar.module.css';
import { logout } from '../../redux/auth/operations';

function Sidebar() {
  // const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [isMenuVisible, handleClick] = useToggle(true);
  // console.log(isMenuVisible);

  const { isLoggedIn, user } = useAuth();

  const dispatch = useDispatch();

  const menuItemsLoggedIn = [
    {
      name: 'University',
      icon: <HiBookOpen />,
    },
    {
      name: 'Faculties',
      icon: <HiAcademicCap />,
    },
  ];

  const menuItemsNotLoggedIn = [
    {
      name: 'Login',
    },
    {
      name: 'Register',
    },
  ];

  const menuConfig = isLoggedIn ? menuItemsLoggedIn : menuItemsNotLoggedIn;
  // console.log(isLoggedIn);

  function SidebarButtonArrowStatus() {
    // console.log(isMenuVisible);
    if (isMenuVisible) {
      return <HiChevronLeft />;
    } else {
      return <HiChevronRight />;
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className={clsx(styles.sidebar, !isMenuVisible && styles.hide)}>
      <div className={styles.sidebarHeader}></div>
      {/* {Status()} */}
      <Button
        customStyles={clsx(
          styles.button,
          !isMenuVisible && styles.buttonHideMenu
        )}
        handleClick={handleClick}
      >
        <SidebarButtonArrowStatus />
      </Button>

      <Menu items={menuConfig} isVisible={isMenuVisible} />
      {isLoggedIn && isMenuVisible && (
        <div
          className={clsx(styles.logContainer, !isMenuVisible && styles.hide)}
        >
          <p className={styles.user}>
            <FaUserCircle size="24px" />
            {user.name}
          </p>

          <div className={styles.user}>
            <BiSolidLogOut size="24px" />
            <Button
              customStyles={styles.logoutButton}
              handleClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
}

// console.log('stop');

Sidebar.propTypes = {
  isMenuVisible: PropTypes.bool,
};

export default Sidebar;

// class Sidebar extends Component {
//   static propTypes = {
//     isMenuVisible: PropTypes.bool.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuVisible: true,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   menuItems = [
//     {
//       name: 'University',
//       icon: <HiBookOpen />,
//     },
//     {
//       name: 'Faculties',
//       icon: <HiAcademicCap />,
//     },
//   ];

//   componentDidMount() {
//     setTimeout(() => console.log('Am inceput numaratoarea', 1000), 1000);
//   }

//   componentWillUnmount() {
//     clearTimeout();
//     console.log('Am oprit numaratoarea');
//   }

//   handleClick() {
//     // console.log(this.state.isVisible);

//     this.setState({
//       isMenuVisible: !this.state.isMenuVisible,
//     });
//   }

//   render() {
//     const isMenuVisible = this.state.isMenuVisible;

//     // const Status = () => {
//     //   if (isMenuVisible) {
//     //     // console.log('hi');
//     //     return (
//     //       <Button customStyles={styles.button} handleClick={this.handleClick}>
//     //         <HiChevronLeft />
//     //       </Button>
//     //     );
//     //   } else {
//     //     // console.log('bye');
//     //     return (
//     //       <Button customStyles={styles.button} handleClick={this.handleClick}>
//     //         <HiChevronRight />
//     //       </Button>
//     //     );
//     //   }
//     // };

//     const SidebarButtonArrowStatus = () => {
//       if (isMenuVisible) {
//         return <HiChevronLeft />;
//       } else {
//         return <HiChevronRight />;
//       }
//     };

//     return (
//       <aside className={clsx(styles.sidebar, !isMenuVisible && styles.hide)}>
//         <div className={styles.sidebarHeader}></div>
//         {/* {Status()} */}
//         <Button customStyles={styles.button} handleClick={this.handleClick}>
//           <SidebarButtonArrowStatus />
//         </Button>

//         <Menu items={this.menuItems} isVisible={isMenuVisible} />
//       </aside>
//     );
//   }
// }

// export default Sidebar;
