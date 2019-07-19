import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import TimetableOverview from './pages/TimetableOverview';
import NewIdeaForm from './pages/NewIdeaForm';
import Speaker from './components/Speaker';
import SignUp from './pages/SignUp';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/speaker' component={Speaker} />
          <Route path='/notification' component={Notification} />
          <Route exact path='/timetable' component={TimetableOverview} />
          <Route path='/timetable/details/new' component={NewIdeaForm} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
