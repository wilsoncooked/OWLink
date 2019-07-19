import React from 'react';
import IdeasList from '../components/IdeasList';
import Speaker from '../components/Speaker';
import Navigation from '../components/Navigation';

export default function TalkDetails() {
  return (
    <React.Fragment>
      <Navigation />
      <Speaker />
      <IdeasList />
    </React.Fragment>
  );
}
