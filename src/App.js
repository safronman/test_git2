import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, veritatis?</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <hr/>
        <h1>1</h1>
        <h2>2</h2>
        <h3>3</h3>
        <hr/>
        <p>new functionality</p>
    </div>
  );
}

export default App;
