import React, { Component } from 'react'
import Home from '../Home';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>TV Series List</h3>
        </header>

        <Home />

      </div>
    )
  }
}
