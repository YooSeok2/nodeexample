import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/userList';
import Test from './components/test';

class App extends React.Component {


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test/>
        <UserList/>
      </header>
    </div>
  );
  }
}

export default App;
