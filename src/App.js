import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Profile from './pages/Profile';
import Timetable from './pages/Timetable';
import NewIdeaForm from './pages/NewIdeaForm';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/profile' component={Profile} />
          <Route path='/timetable' component={Timetable} />
          <Route path='/timetable/idea/new' component={NewIdeaForm} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
