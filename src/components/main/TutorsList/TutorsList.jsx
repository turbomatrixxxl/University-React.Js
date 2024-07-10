import React from 'react';
import PropTypes from 'prop-types';
import TutorItem from './Tutor/TutorItem';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

import styles from './TutorsList.module.css';
import { HiPlus } from 'react-icons/hi';

class TutorsList extends React.Component {
  // static defaultProps = {
  //   tutors: '',
  // };
  // !!! nu e nevoie de props !!!

  state = {
    isFormVisible: false,
    NewTutor: {
      surname: '',
      name: '',
      phone: '',
      email: '',
      city: '',
    },
  };

  toggleForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  };

  handleChange = ev => {
    console.log(ev.target.value);
    const firstName = ev.target.value;
    this.setState({
      ...this.state,
      ...this.NewTutor,
      Surname: { firstName },
    });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.props.tutors.map(tutor => {
            return (
              <TutorItem
                key={tutor.phone}
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

        {this.state.isFormVisible && (
          <section className={styles.formSection}>
            <h1 className={styles.formHeading}>Adding a tutor</h1>

            <form className={styles.formsContainer}>
              <Input
                type={'text'}
                // value={this.state.NewTutor.Surname}
                label={'Surname'}
                handleChange={this.handleChange}
              />
              <Input
                type={'text'}
                // value={this.state.NewTutor}
                label={'Name'}
                // handleChange={this.handleChange}
              />
              <Input
                type={'number'}
                // value={this.state.NewTutor}
                label={'Phone number'}

                // handleChange={this.handleChange}
              />
              <Input
                type={'email'}
                label={'Email'}
                // value={this.state.NewTutor}

                // handleChange={this.handleChange}
              />
              <Input
                type={'text'}
                // value={this.state.NewTutor}
                label={'City'}
                // handleChange={this.handleChange}
              />
              <Button variant={'icon'}>invite</Button>
            </form>
          </section>
        )}
        <Button variant={'icon'} handleClick={this.toggleForm}>
          <span className={styles.plus}>
            <HiPlus />
          </span>{' '}
          Add Tutor
        </Button>
      </>
    );
  }
}

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired,
  tutor: PropTypes.object,
  Surname: PropTypes.string,
  Name: PropTypes.string,
  Phone: PropTypes.number,
  Email: PropTypes.string,
  City: PropTypes.string,
};

export default TutorsList;
