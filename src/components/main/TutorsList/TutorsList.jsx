import React from 'react';
import PropTypes from 'prop-types';
import TutorItem from './Tutor/TutorItem';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

import styles from './TutorsList.module.css';
import { HiPlus } from 'react-icons/hi';
// import data from '../../../utils/data.json';

const INITIAL_FORM_VALUE = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  id: '',
};

const INITIAL_STATE = {
  searchTherm: '',
  tutors: [],
  isFormVisible: false,
  disabled: true,
  newTutor: { ...INITIAL_FORM_VALUE },
};
class TutorsList extends React.Component {
  // static defaultProps = {
  //   tutors: '',
  // };
  // !!! nu e nevoie de props !!!

  componentDidMount() {
    const dataLocStorageTutors = JSON.parse(localStorage.getItem('tutors'));
    // console.log(tutors);

    this.setState({ tutors: dataLocStorageTutors });
    // console.log(this.state);
  }

  componentDidUpdate() {
    localStorage.setItem('tutors', JSON.stringify(this.state.tutors));
  }

  state = {
    ...INITIAL_STATE,
  };

  toggleForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  };

  handleChange = ev => {
    // console.log(ev.target.value);

    const { name, value } = ev.target;
    this.setState({
      ...this.state,
      newTutor: {
        ...this.state.newTutor,
        [name]: value,
        id: this.state.tutors.length + 1,
      },
    });

    // console.log(this.state);
  };

  handleInviteButtonChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      ...this.state,
      newTutor: { ...this.state.newTutor, [name]: value },
      disabled: false,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      ...this.state,
      tutors: [...this.state.tutors, this.state.newTutor],
      newTutor: { INITIAL_FORM_VALUE },
      disabled: true,
    });

    const form = ev.target;
    form.reset();
  };

  getTutorsCount = () => {
    return this.state.tutors.length;
  };

  searchThermHandleChange = e => {
    // console.log(e.target.value);

    this.setState({ ...this.state, searchTherm: e.target.value });

    // console.log(this.state.searchTherm);
  };

  render() {
    const { name, surname, phone, email, city } = this.state.newTutor;

    const getTutorsBySearchTherm = this.state.tutors.filter(tutor => {
      const searchTherm = this.state.searchTherm;
      const name = tutor.lastName;
      const surName = tutor.firstName;
      const isFound =
        name.toLowerCase().includes(searchTherm.toLowerCase()) ||
        surName.toLowerCase().includes(searchTherm.toLowerCase());
      return isFound;
    });

    const disabled = this.state.disabled;
    return (
      <div className={styles.listContainer}>
        <p>Search for Tutor:</p>
        <input
          onChange={this.searchThermHandleChange}
          className={styles.searchThermInput}
          type="text"
          name="searchTherm"
          value={this.state.searchTherm}
        />

        <ul className={styles.list}>
          {getTutorsBySearchTherm.map(tutor => {
            return (
              <TutorItem
                key={tutor.id}
                phone={tutor.phone}
                firstName={tutor.firstName}
                lastName={tutor.lastName}
                email={tutor.email}
                city={tutor.city}
                options={tutor.options}
              />
            );
          })}
        </ul>

        <p>Number of Tutors found {getTutorsBySearchTherm.length}</p>

        <p>Number of all Tutors {this.getTutorsCount()}</p>

        {this.state.isFormVisible && (
          <section className={styles.formSection}>
            <h1 className={styles.formHeading}>Adding a tutor</h1>

            <form
              onSubmit={this.handleSubmit}
              className={styles.formsContainer}
            >
              <Input
                type={'text'}
                label={'Surname'}
                value={surname}
                name="firstName"
                handleChange={this.handleChange}
                required={true}
              />
              <Input
                type={'text'}
                label={'Name'}
                value={name}
                name="lastName"
                handleChange={this.handleChange}
                required={true}
              />
              <Input
                type={'tel'}
                label={'Phone number'}
                value={phone}
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                handleChange={this.handleChange}
                required={true}
              />
              <Input
                type={'email'}
                label={'Email'}
                value={email}
                name="email"
                handleChange={this.handleChange}
                required={true}
              />
              <Input
                type={'text'}
                label={'City'}
                value={city}
                name="city"
                handleChange={this.handleInviteButtonChange}
                required={true}
              />
              <Button disabled={disabled} type="submit" variant={'notActive'}>
                invite
              </Button>
            </form>
          </section>
        )}
        <Button type="button" handleClick={this.toggleForm}>
          <span className={styles.plus}>
            <HiPlus />
          </span>{' '}
          Add Tutor
        </Button>
      </div>
    );
  }
}

TutorsList.propTypes = {
  tutors: PropTypes.array,
  tutor: PropTypes.object,
  Surname: PropTypes.string,
  Name: PropTypes.string,
  Phone: PropTypes.number,
  Email: PropTypes.string,
  City: PropTypes.string,
};

export default TutorsList;
