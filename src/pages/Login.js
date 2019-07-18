import React from 'react';
import HomeButton from '../components/HomeButton';

export default function Login() {
  return (
    <div style={wrapper}>
      <HomeButton />
    </div>
  );
}

const wrapper = {
  width: '100',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
