import React from 'react';
import HomeButton from '../components/HomeButton';
import SignUp from './SignUp';
import styled, {keyframes} from 'styled-components';

export default function Home() {
  return (
    <div>
      <img
        className='background-image'
        src='http://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
        alt='backgroundimage'
      />
      <div className='home-wrapper'>
        <div className='auth'>
          <SignUp />
        </div>
        <img
          className='homelogo'
          src='https://i.imgur.com/uuJviKu.png'
          alt='logo'
        />
        <HomeButton />
      </div>
    </div>
  );
}

const h2 = {
  color: '#8df3de',
  fontSize: '1rem',
  marginBottom: 100,
};
