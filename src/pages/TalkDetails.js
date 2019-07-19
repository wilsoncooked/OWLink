import React from 'react';
import IdeasList from '../components/IdeasList';
import Speaker from '../components/Speaker';

export default function TalkDetails() {
  return (
    <React.Fragment>
      <Speaker />
      <IdeasList />
    </React.Fragment>
  );
}
