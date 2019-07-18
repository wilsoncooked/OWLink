import React from 'react';
import SignIn from '../pages/SignIn';

class Home extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <SignIn />
      </div>
    );
  }
}

export default Home;

const wrapper = {
  width: '100',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
