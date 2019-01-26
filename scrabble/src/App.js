import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "side">
          <h1>Player 1: </h1>
          <h1>Player 2: </h1>
        </div>

        <div className = "board">
          BOARD
        </div>
      </div>
    );
  }
}

export default App;
