import React from 'react';
import HomeButton from '../components/HomeButton';

class Home extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <HomeButton />
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
