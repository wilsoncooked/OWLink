import React from 'react';
import SignIn from '../pages/SignIn';

export default function Login() {
  return (
    <div style={wrapper}>
      <SignIn />
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
