import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="main-page">
          <Header />
          <div className="content">
            <Sidebar />
            <main className="main">
              <Route path="/profile" component={Profile} />
              <Route path="/messages" component={Messages} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
