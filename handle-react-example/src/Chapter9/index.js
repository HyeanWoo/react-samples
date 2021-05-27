import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" className="logo" />
          <p>
            Edit <code>src/App.js</code> ans save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Index;
