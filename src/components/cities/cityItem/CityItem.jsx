import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'components/main/Paper';
import { BsThreeDotsVertical } from 'react-icons/bs';

import CityMenu from '../CityMenu';
import useToggle from 'hooks/useToggle';

import styles from './cityItem.module.css';

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

CityItem.propTypes = {
  children: PropTypes.string,
  handleDeleteCity: PropTypes.func,
  handleEditCity: PropTypes.func,
};
