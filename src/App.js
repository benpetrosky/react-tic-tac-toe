import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Game from './components/Board';
import Square from './components/Board';





class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>



      </div>
    );
  }
}

export default App;
