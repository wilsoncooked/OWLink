import React from 'react';
import Timetable from '../components/Timetable';
import Navigation from '../components/Navigation';

export default function TimetableOverview() {
  return (
    <React.Fragment>
      <Navigation />
      <Timetable />
    </React.Fragment>
  );
}
