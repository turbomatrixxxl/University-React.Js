import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Main from './main';
// import data from '../utils/data.json';
import { useDispatch } from 'react-redux';
import { fetchFaculties, fetchTutors } from '../redux/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTutors());
    dispatch(fetchFaculties());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

// class App extends Component {
//   componentDidMount() {
//     // console.log('Mounted');
//     localStorage.setItem('tutors', JSON.stringify(data?.tutors));
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Sidebar />
//         <Main />
//       </div>
//     );
//   }
// }

// export default App;
