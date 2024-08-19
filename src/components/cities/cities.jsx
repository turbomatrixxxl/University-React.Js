import Button from 'components/common/Button';
import React, { useEffect, useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import citiesIcon from '../../images/citiesIcon.png';
import useToggle from 'hooks/useToggle';

import Input from 'components/common/Input';

import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../redux/cities/selectors';
import { addCity, deleteCity, editCity } from '../../redux/cities/citiesSlice';
import CityItem from './cityItem';

import styles from './cities.module.css';
import Modal from 'components/Modal';
import { nanoid } from 'nanoid';
import DeleteModal from 'components/DeleteModal';

export default function Cities() {
  const [isFormVisible, toggleForm] = useToggle(false);
  const [disabled, setIsDisabled] = useState(true);
  const [newCity, setNewCity] = useState([]);
  const [editedCity, setEditedCity] = useState([]);

  const dispatch = useDispatch();
  const allCities = useSelector(getCities);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const dialogRef = useRef();
  const contRef = useRef();
  const dialogDeleteRef = useRef();
  const contDeleteRef = useRef();

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('mousedown', handleClickOutside);

    function handleKeyDown(event) {
      // console.log(event.key);

      if (event.key === 'Escape') {
        handleModalClose();
        handleDeleteModalClose();
      }
    }

    function handleClickOutside(event) {
      // console.log(event.target);

      if (
        event.target === dialogRef.current &&
        event.target !== contRef.current
      ) {
        handleModalClose();
      }
      if (
        event.target === dialogDeleteRef.current &&
        event.target !== contDeleteRef.current
      ) {
        handleDeleteModalClose();
      }
    }

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleModalClose() {
    setIsModalVisible(false);
  }

  function handleDeleteModalClose() {
    setIsDeleteModalVisible(false);
  }

  function handleOpenModal() {
    setIsModalVisible(true);

    // console.log('open');
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalVisible(true);

    // console.log('open');
  }

  //   useEffect(() => {
  //     localStorage.setItem('cities', JSON.stringify(allCities));
  //   }, [allCities]);

  function handleAddButtonChange(ev) {
    const { name, value } = ev.target;
    if (value.length === 0) {
      setIsDisabled(true);

      return;
    }
    setNewCity({ [name]: value });
    setIsDisabled(false);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    //* With redux
    dispatch(addCity(newCity));

    const form = ev.target;

    form.reset();
    toggleForm();
    setNewCity([]);
  }

  function handleEdit(ev) {
    setEditedCity({
      id: nanoid(),
      name: ev.target.value,
    });
    // console.log(editedCity);
    // console.log(ev.target.value);
  }

  function handleDeleteCity(id) {
    // dispatch(deleteCity(id));
    handleOpenDeleteModal();
  }

  return (
    <section className={styles.citiesSection}>
      <div className={styles.citiesTitleContainer}>
        <div className={styles.citiesTitleIconContainer}>
          <img className={styles.citiesTitleIcon} src={citiesIcon} alt="Pin" />
        </div>
        <h1 className={styles.citiesTitle}>cities</h1>
      </div>
      <ul className={styles.citiesContainer}>
        {allCities.map(city => {
          return (
            <li className={styles.citiesListItem} key={city.id}>
              <DeleteModal
                isDeleteModalVisible={isDeleteModalVisible}
                handleDeleteModalClose={handleDeleteModalClose}
                dialogDeleteRef={dialogDeleteRef}
                contDeleteRef={contDeleteRef}
                handleDeleteNo={handleDeleteModalClose}
                handleDeleteYes={() => {
                  dispatch(deleteCity(city.id));
                  handleDeleteModalClose();
                }}
              />
              <Modal
                cityName={city.name}
                dialogRef={dialogRef}
                contRef={contRef}
                handleModalClose={handleModalClose}
                isModalVisible={isModalVisible}
                handleChange={handleEdit}
                handleSave={() => {
                  dispatch(editCity(city.id, editedCity.name));
                  //   console.log(allCities);

                  handleModalClose();
                }}
              />
              <CityItem
                handleEditCity={handleOpenModal}
                handleDeleteCity={() => handleDeleteCity(city.id)}
              >
                {city.name}
              </CityItem>
            </li>
          );
        })}
      </ul>
      {isFormVisible && (
        <section className={styles.formSection}>
          <h1 className={styles.formHeading}>Adding a city</h1>

          <form onSubmit={handleSubmit} className={styles.formsContainer}>
            <Input
              type={'text'}
              label={'City'}
              value={newCity.name}
              name="name"
              handleChange={handleAddButtonChange}
              required={true}
            />
            <Button disabled={disabled} type="submit" variant={'notActive'}>
              add
            </Button>
          </form>
        </section>
      )}
      <Button type="button" handleClick={toggleForm}>
        <span className={styles.plus}>
          <HiPlus />
        </span>{' '}
        Add City
      </Button>
    </section>
  );
}
