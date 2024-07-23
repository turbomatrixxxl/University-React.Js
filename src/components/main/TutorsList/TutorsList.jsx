import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TutorItem from './Tutor/TutorItem';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import axios from 'axios';
import Loading from 'components/common/Loading';
import Alert from 'components/common/Alert';
import { HiPlus } from 'react-icons/hi';

import styles from './TutorsList.module.css';
// import data from '../../../utils/data.json';

axios.defaults.baseURL = 'http://localhost:3001';

const INITIAL_FORM_VALUE = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
};

function TutorsList(props) {
  const [searchTherm, setSearchTherm] = useState('');
  const [tutors, setTutors] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [newTutor, setNewTutor] = useState(INITIAL_FORM_VALUE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/tutors');
        // console.log(response.data);

        const tutorsFromServer = response.data;
        setTutors(tutorsFromServer);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError('Lista de tutori nu a fost gasita !');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function toggleForm() {
    setIsFormVisible(!isFormVisible);
  }

  function handleChange(ev) {
    // console.log(ev.target.value);

    const { name, value } = ev.target;

    setNewTutor({ ...newTutor, [name]: value });
  }

  function handleInviteButtonChange(ev) {
    const { name, value } = ev.target;
    if (value.length === 0) {
      setIsDisabled(true);

      return;
    }
    setNewTutor({ ...newTutor, [name]: value });
    setIsDisabled(false);
  }

  async function addTutor(ev) {
    const isExist = tutors.filter(tutor => {
      const name = newTutor.lastName.includes(tutor.lastName);
      const surname = newTutor.firstName.includes(tutor.firstName);

      return name && surname;
    });

    try {
      if (isExist.length > 0) {
        alert('This name is already in the list !');

        setIsDisabled(true);

        ev.target.reset();
        return;
      }

      // console.log(isExist);

      const response = await axios.post('/tutors', newTutor);
      // console.log(response.data);

      setTutors([...tutors, response.data]);
      setNewTutor(INITIAL_FORM_VALUE);
      setIsDisabled(true);
    } catch (error) {
      setError('Tutorul nu a putut fi adaugat');

      ev.target.reset();
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    addTutor(ev);

    const form = ev.target;
    form.reset();
  }

  async function deleteTutor(id) {
    try {
      await axios.delete(`tutors/${id}`);
      const tutorsLeft = tutors.filter(tutor => tutor.id !== id);
      setTutors(tutorsLeft);
    } catch (error) {
      setError('Tutorul nu a putut fi sters !');
    }
  }

  function getTutorsCount() {
    return tutors.length;
  }

  function searchThermHandleChange(e) {
    // console.log(e.target.value);

    setSearchTherm(e.target.value);

    // console.log(this.state.searchTherm);
  }

  const getTutorsBySearchTherm = tutors.filter(tutor => {
    // const searchTherm = this.state.searchTherm;
    const name = tutor.lastName;
    const surName = tutor.firstName;
    const isFound =
      name.toLowerCase().includes(searchTherm.toLowerCase()) ||
      surName.toLowerCase().includes(searchTherm.toLowerCase());
    // console.log(isFound);

    return isFound;
  });

  return (
    <div className={styles.listContainer}>
      <p>Search for Tutor:</p>
      <input
        onChange={searchThermHandleChange}
        className={styles.searchThermInput}
        type="text"
        name="searchTherm"
        value={searchTherm}
      />

      <div>
        <ul className={styles.list}>
          {loading && <Loading />}

          {error && <Alert message={error} />}

          {getTutorsBySearchTherm.map(tutor => {
            return (
              <TutorItem
                key={tutor.id}
                item={tutor}
                handleDelete={() => {
                  deleteTutor(tutor.id);
                }}
              />
            );
          })}
        </ul>
      </div>

      <p>Number of Tutors found {getTutorsBySearchTherm.length}</p>

      <p>Number of all Tutors {getTutorsCount()}</p>

      {isFormVisible && (
        <section className={styles.formSection}>
          <h1 className={styles.formHeading}>Adding a tutor</h1>

          <form onSubmit={handleSubmit} className={styles.formsContainer}>
            <Input
              type={'text'}
              label={'Surname'}
              value={newTutor.surname}
              name="firstName"
              handleChange={handleChange}
              required={true}
            />
            <Input
              type={'text'}
              label={'Name'}
              value={newTutor.name}
              name="lastName"
              handleChange={handleChange}
              required={true}
            />
            <Input
              type={'tel'}
              label={'Phone number'}
              value={newTutor.phone}
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              handleChange={handleChange}
              required={true}
            />
            <Input
              type={'email'}
              label={'Email'}
              value={newTutor.email}
              name="email"
              handleChange={handleChange}
              required={true}
            />
            <Input
              type={'text'}
              label={'City'}
              value={newTutor.city}
              name="city"
              handleChange={handleInviteButtonChange}
              required={true}
            />
            <Button disabled={disabled} type="submit" variant={'notActive'}>
              invite
            </Button>
          </form>
        </section>
      )}
      <Button type="button" handleClick={toggleForm}>
        <span className={styles.plus}>
          <HiPlus />
        </span>{' '}
        Add Tutor
      </Button>
    </div>
  );
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

// const INITIAL_FORM_VALUE = {
//   firstName: '',
//   lastName: '',
//   phone: '',
//   email: '',
//   city: '',
// };

// const INITIAL_STATE = {
//   searchTherm: '',
//   tutors: [],
//   isFormVisible: false,
//   loading: false,
//   disabled: true,
//   error: null,
//   newTutor: { ...INITIAL_FORM_VALUE },
// };
// class TutorsList extends React.Component {
//   // static defaultProps = {
//   //   tutors: '',
//   // };
//   // !!! nu e nevoie de props !!!

//   static propTypes = {
//   tutors: PropTypes.array,
//   tutor: PropTypes.object,
//   Surname: PropTypes.string,
//   Name: PropTypes.string,
//   Phone: PropTypes.number,
//   Email: PropTypes.string,
//   City: PropTypes.string,
// };

//   state = {
//     ...INITIAL_STATE,
//   };

//   async componentDidMount() {
//     try {
//       this.setState({ loading: true });
//       const response = await axios.get('/tutors');
//       // console.log(response.data);

//       const tutorsFromServer = response.data;

//       this.setState({
//         tutors: tutorsFromServer,
//         error: null,
//       });
//     } catch (error) {
//       console.log(error.message);

//       this.setState({
//         error: 'Lista de tutori nu a fost gasita !',
//       });
//     } finally {
//       this.setState({ loading: false });
//     }

//     // const dataLocStorageTutors = JSON.parse(localStorage.getItem('tutors'));
//     // console.log(tutors);

//     // console.log(this.state);
//   }

//   // componentDidUpdate() {
//   //   localStorage.setItem('tutors', JSON.stringify(this.state.tutors));
//   // }

//   toggleForm = () => {
//     this.setState({
//       isFormVisible: !this.state.isFormVisible,
//     });
//   };

//   handleChange = ev => {
//     // console.log(ev.target.value);

//     const { name, value } = ev.target;
//     this.setState({
//       ...this.state,
//       newTutor: {
//         ...this.state.newTutor,
//         [name]: value,
//       },
//     });

//     // console.log(this.state);
//   };

//   handleInviteButtonChange = ev => {
//     const { name, value } = ev.target;
//     if (value.length === 0) {
//       this.setState({ disabled: true });
//       return;
//     }
//     this.setState({
//       ...this.state,
//       newTutor: { ...this.state.newTutor, [name]: value },

//       disabled: false,
//     });
//   };

//   async addTutor(ev) {
//     const isExist = this.state.tutors.filter(tutor => {
//       const name = this.state.newTutor.lastName.includes(tutor.lastName);
//       const surname = this.state.newTutor.firstName.includes(tutor.firstName);

//       return name && surname;
//     });

//     try {
//       if (isExist.length > 0) {
//         alert('This name is already in the list !');

//         this.setState({ ...this.state, disabled: true });

//         ev.target.reset();
//         return;
//       }

//       // console.log(isExist);

//       const response = await axios.post('/tutors', this.state.newTutor);
//       // console.log(response.data);

//       this.setState({
//         ...this.state,
//         tutors: [...this.state.tutors, response.data],
//         newTutor: { INITIAL_FORM_VALUE },
//         disabled: true,
//       });
//     } catch (error) {
//       this.setState({ error: 'Tutorul nu a putut fi adaugat' });
//     }
//   }

//   handleSubmit = ev => {
//     ev.preventDefault();

//     this.addTutor(ev);

//     const form = ev.target;
//     form.reset();
//   };

//   async deleteTutor(id) {
//     try {
//       await axios.delete(`tutors/${id}`);
//       const tutorsLeft = this.state.tutors.filter(tutor => tutor.id !== id);
//       this.setState({
//         ...this.state,
//         tutors: [...tutorsLeft],
//       });
//     } catch (error) {
//       this.setState({ ...this.state, error: 'Tutorul nu a putut fi sters !' });
//     }
//   }

//   getTutorsCount = () => {
//     return this.state.tutors.length;
//   };

//   searchThermHandleChange = e => {
//     // console.log(e.target.value);

//     this.setState({ ...this.state, searchTherm: e.target.value });

//     // console.log(this.state.searchTherm);
//   };

//   render() {
//     const { name, surname, phone, email, city } = this.state.newTutor;
//     const { loading, error, disabled, tutors, searchTherm } = this.state;
//     // console.log(tutors);

//     const getTutorsBySearchTherm = tutors.filter(tutor => {
//       // const searchTherm = this.state.searchTherm;
//       const name = tutor.lastName;
//       const surName = tutor.firstName;
//       const isFound =
//         name.toLowerCase().includes(searchTherm.toLowerCase()) ||
//         surName.toLowerCase().includes(searchTherm.toLowerCase());
//       // console.log(isFound);

//       return isFound;
//     });

//     return (
//       <div className={styles.listContainer}>
//         <p>Search for Tutor:</p>
//         <input
//           onChange={this.searchThermHandleChange}
//           className={styles.searchThermInput}
//           type="text"
//           name="searchTherm"
//           value={searchTherm}
//         />

//         <div>
//           <ul className={styles.list}>
//             {loading && <Loading />}

//             {error && <Alert message={error} />}

//             {getTutorsBySearchTherm.map(tutor => {
//               return (
//                 <TutorItem
//                   key={tutor.id}
//                   item={tutor}
//                   handleDelete={() => {
//                     this.deleteTutor(tutor.id);
//                   }}
//                 />
//               );
//             })}
//           </ul>
//         </div>

//         <p>Number of Tutors found {getTutorsBySearchTherm.length}</p>

//         <p>Number of all Tutors {this.getTutorsCount()}</p>

//         {this.state.isFormVisible && (
//           <section className={styles.formSection}>
//             <h1 className={styles.formHeading}>Adding a tutor</h1>

//             <form
//               onSubmit={this.handleSubmit}
//               className={styles.formsContainer}
//             >
//               <Input
//                 type={'text'}
//                 label={'Surname'}
//                 value={surname}
//                 name="firstName"
//                 handleChange={this.handleChange}
//                 required={true}
//               />
//               <Input
//                 type={'text'}
//                 label={'Name'}
//                 value={name}
//                 name="lastName"
//                 handleChange={this.handleChange}
//                 required={true}
//               />
//               <Input
//                 type={'tel'}
//                 label={'Phone number'}
//                 value={phone}
//                 name="phone"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 handleChange={this.handleChange}
//                 required={true}
//               />
//               <Input
//                 type={'email'}
//                 label={'Email'}
//                 value={email}
//                 name="email"
//                 handleChange={this.handleChange}
//                 required={true}
//               />
//               <Input
//                 type={'text'}
//                 label={'City'}
//                 value={city}
//                 name="city"
//                 handleChange={this.handleInviteButtonChange}
//                 required={true}
//               />
//               <Button disabled={disabled} type="submit" variant={'notActive'}>
//                 invite
//               </Button>
//             </form>
//           </section>
//         )}
//         <Button type="button" handleClick={this.toggleForm}>
//           <span className={styles.plus}>
//             <HiPlus />
//           </span>{' '}
//           Add Tutor
//         </Button>
//       </div>
//     );
//   }
// }

// export default TutorsList;
