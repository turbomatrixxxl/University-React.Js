import Button from 'components/common/Button';
import React, { useEffect, useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import citiesIcon from '../../images/citiesIcon.png';
import useToggle from 'hooks/useToggle';

import Input from 'components/common/Input';

import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../redux/selectors';
import { addCity, deleteCity, editCity } from '../../redux/citiesSlice';

// import Modal from 'components/Modal';
// import { nanoid } from 'nanoid';
// import DeleteModal from 'components/DeleteModal';
import InfoItemBlock from 'components/common/InfoItemBlock';

import styles from './cities.module.css';

export default function Cities() {
  const [isFormVisible, toggleForm] = useToggle(false);
  const [disabled, setIsDisabled] = useState(true);
  const [newCity, setNewCity] = useState([]);
  // const [editedCity, setEditedCity] = useState([]);

  const dispatch = useDispatch();

  const allCities = useSelector(getCities);

  const dialogRef = useRef();
  const contRef = useRef();
  const dialogDeleteRef = useRef();
  const contDeleteRef = useRef();

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(allCities));
  }, [allCities]);

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

  // function handleEdit(ev) {
  //   setEditedCity({
  //     id: nanoid(),
  //     name: ev.target.value,
  //   });
  //   // console.log(editedCity);
  //   // console.log(ev.target.value);
  // }

  return (
    <section className={styles.citiesSection}>
      <div className={styles.citiesTitleContainer}>
        <div className={styles.citiesTitleIconContainer}>
          <img className={styles.citiesTitleIcon} src={citiesIcon} alt="Pin" />
        </div>
        <h1 className={styles.citiesTitle}>cities</h1>
      </div>
      <ul className={styles.citiesContainer}>
        {allCities?.map(city => {
          return (
            <li className={styles.citiesListItem} key={city.id}>
              {/* <DeleteModal
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
                name={city.name}
                label="City"
                dialogRef={dialogRef}
                contRef={contRef}
                handleModalClose={handleModalClose}
                isModalVisible={isModalVisible}
                handleChange={handleEdit}
                handleSave={() => {
                  console.log(city);

                  dispatch(editCity(city.id, editedCity.name));
                  //   console.log(allCities);

                  handleModalClose();
                }}
              /> */}
              <InfoItemBlock
                id={city.id}
                contDeleteRef={contDeleteRef}
                dialogDeleteRef={dialogDeleteRef}
                contRef={contRef}
                dialogRef={dialogRef}
                onDelete={deleteCity}
                onEdit={editCity}
                name="name"
                label="City"
                value={city.name}
                className={styles.paper}
                divClassName={styles.info}
              >
                {city.name}
              </InfoItemBlock>
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
