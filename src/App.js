import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import TimetableOverview from './pages/TimetableOverview';
import NewIdeaForm from './pages/NewIdeaForm';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/notification' component={Notification} />
          <Route path='/timetable' component={TimetableOverview} />
          <Route path='/timetable/idea/new' component={NewIdeaForm} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
