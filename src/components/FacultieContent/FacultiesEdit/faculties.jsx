import Button from 'components/common/Button';
import React, { useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import robotEmoji from '../../../images/🤖 Robot Emoji.png';
import useToggle from 'hooks/useToggle';

import Input from 'components/common/Input';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectFaculties,
  selectFacultiesError,
  selectFacultiestLoading,
} from '../../../redux/selectors';

import {
  addFaculty,
  deleteFaculty,
  editFaculty,
} from '../../../redux/operations';

import Loading from 'components/common/Loading';
import Alert from 'components/common/Alert';
import InfoItemBlock from 'components/common/InfoItemBlock';

import styles from './faculties.module.css';
import { Link, useLocation } from 'react-router-dom';

const INITIAL_FORM_VALUE = {
  name: '',
  description: '',
  history: '',
};

export default function Faculties() {
  const [isFormVisible, toggleForm] = useToggle(false);
  const [disabled, setIsDisabled] = useState(true);
  const [newFaculty, setNewfaculty] = useState({ ...INITIAL_FORM_VALUE });

  const location = useLocation();

  const dispatch = useDispatch();

  const allFaculties = useSelector(selectFaculties);

  const loadingThunk = useSelector(selectFacultiestLoading);
  const errorThunk = useSelector(selectFacultiesError);

  const dialogRef = useRef();
  const contRef = useRef();
  const dialogDeleteRef = useRef();
  const contDeleteRef = useRef();

  function handleAddButtonChange(ev) {
    const { name, value } = ev.target;

    if (value.length === 0) {
      setIsDisabled(true);

      return;
    }
    setNewfaculty({ ...newFaculty, [name]: value });
    console.log(newFaculty);

    setIsDisabled(false);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;

    //* With redux
    dispatch(addFaculty(newFaculty));

    form.reset();
    setNewfaculty(INITIAL_FORM_VALUE);
    toggleForm();
  }

  return (
    <section className={styles.citiesSection}>
      <div className={styles.citiesTitleContainer}>
        <div className={styles.citiesTitleIconContainer}>
          <img
            className={styles.citiesTitleIcon}
            src={robotEmoji}
            alt="robot emoji"
          />
        </div>
        <h1 className={styles.citiesTitle}>faculties</h1>
      </div>
      <ul className={styles.citiesContainer}>
        {loadingThunk && <Loading />}

        {errorThunk && <Alert message={errorThunk} />}

        {allFaculties.map(faculty => {
          // console.log(faculty.name);
          // console.log(faculty.id);

          return (
            <li className={styles.citiesListItem} key={faculty.id}>
              <InfoItemBlock
                infoName="faculty"
                id={faculty.id}
                contDeleteRef={contDeleteRef}
                dialogDeleteRef={dialogDeleteRef}
                contRef={contRef}
                dialogRef={dialogRef}
                onDelete={deleteFaculty}
                onEdit={editFaculty}
                name="name"
                label="Faculty"
                value={faculty.name}
                className={styles.paper}
                divClassName={styles.info}
              >
                <Link
                  to={`/University-React.Js/faculties/${faculty.name}`}
                  state={{ from: location }}
                >
                  <p className={styles.name}>{faculty.name}</p>
                </Link>{' '}
              </InfoItemBlock>
            </li>
          );
        })}
      </ul>
      {isFormVisible && (
        <section className={styles.formSection}>
          <h1 className={styles.formHeading}>Adding a faculty</h1>

          <form onSubmit={handleSubmit} className={styles.formsContainer}>
            <Input
              type={'text'}
              label={'Faculty'}
              value={newFaculty.name}
              name="name"
              handleChange={handleAddButtonChange}
              required={true}
            />
            <Input
              type={'text'}
              label={'Description'}
              value={newFaculty.description}
              name="description"
              handleChange={handleAddButtonChange}
              required={true}
            />
            <Input
              type={'text'}
              label={'History'}
              value={newFaculty.history}
              name="history"
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
        Add Faculty
      </Button>
    </section>
  );
}
