import Paper from 'components/main/Paper';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import styles from './cityItem.module.css';
import CityMenu from '../CityMenu';
import useToggle from 'hooks/useToggle';

export default function CityItem({
  children,
  handleDeleteCity,
  handleEditCity,
}) {
  const [isMenuVisible, toggleMenu] = useToggle(false);

  const handleCity = () => {
    toggleMenu();
  };

  return (
    <>
      <Paper className={styles.paper}>
        <p className={styles.cityName}>{children}</p>
        <button onClick={handleCity} className={styles.button}>
          <BsThreeDotsVertical />
        </button>
      </Paper>
      {isMenuVisible && (
        <CityMenu
          className={styles.menu}
          handleDeleteCity={() => {
            handleDeleteCity();
            handleCity();
          }}
          handleEditCity={() => {
            handleEditCity();
            handleCity();
          }}
        />
      )}
    </>
  );
}
