import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './main';
import data from '../utils/data.json';

class App extends Component {
  componentDidMount() {
    // console.log('Mounted');
    localStorage.setItem('tutors', JSON.stringify(data?.tutors));
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
