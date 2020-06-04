import React from 'react';
import './App.css';
import Img from './Img';


function Text() {
  return <p>Edit <code>src/App.js</code> and save to reload. </p>
}

function Link() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Text />
        <Link />
      </header>
    </div>
  );
}

export default App;
