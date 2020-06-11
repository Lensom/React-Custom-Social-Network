import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { Route, BrowserRouter } from 'react-router-dom'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="main-page">
          <Header />
          <div className="content">
            <Sidebar state={props.state.friendsPage} />
            <main className="main">
              <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
              <Route path="/messages" render={() => <Messages state={props.state.messagePage} />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
