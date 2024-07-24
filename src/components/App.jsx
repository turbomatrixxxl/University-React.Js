import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Main from './main';
import data from '../utils/data.json';

function App() {
  useEffect(() => {
    // localStorage.clear();
    // console.log(data);
    localStorage.setItem('name', JSON.stringify(data?.name));
    localStorage.setItem('description', JSON.stringify(data?.description));
    localStorage.setItem('tutors', JSON.stringify(data?.tutors));
    localStorage.setItem('cities', JSON.stringify(data?.cities));
    localStorage.setItem('department', JSON.stringify(data?.department));
  }, []);

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
