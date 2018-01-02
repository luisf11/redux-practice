import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user.list'

class App extends Component {
  render() {
    return (
      <div >
        <h2>UserName List:</h2>
        <UserList />
        <hr/>
        <h2>user Details:</h2>
      </div>
    );
  }
}



export default App;
