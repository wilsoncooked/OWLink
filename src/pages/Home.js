import React from 'react';
import HomeButton from '../components/HomeButton';

export default function Home() {
  return (
    <div style={wrapper}>
      <h1 style={h1}>Welcome on OwLink</h1>
      <h2 style={h2}>- Idea MatchMaker for OwlConf -</h2>
      <HomeButton />
    </div>
  );
}

const wrapper = {
  width: '100',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 30,
};
const h1 = {
  color: '#8df3de',
  fontSize: '2rem',
};
const h2 = {
  color: '#8df3de',
  fontSize: '1rem',
  marginBottom: 100,
};
