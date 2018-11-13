import React, { Component } from 'react';
import './App.css';
import CounterComponent from './CounterContainer'

class App extends Component {
  render() {
    return (
      <div>
        <CounterComponent />
      </div>
    );
  }
}

export default App;
