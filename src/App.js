import React from 'react';
import './App.css';

import Header from './components/Header'
import Aside from './components/Aside'
import Profile from './components/Profile'

function App() {
  return (
    <div className="wrapper">
      <div className="main-page">
        <Header />
        <div className="content">
          <Aside />
          <main className="main">
            <Profile />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
