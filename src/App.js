import React, { Component } from 'react';

import './assets/css/App.css';

import Todo from './components/Todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
      </div>
    );
  }
  
}

export default App;