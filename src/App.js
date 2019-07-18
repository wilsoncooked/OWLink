import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TimetableOverview from './pages/TimetableOverview';
import NewIdeaForm from './pages/NewIdeaForm';
import TalkDetails from './pages/TalkDetails';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exack path='/profile' component={Profile} />
          <Route exact path='/timetable' component={TimetableOverview} />
          <Route path='/timetable/idea/new' component={NewIdeaForm} />
          <Route path='/timetable/idea' component={TalkDetails} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
