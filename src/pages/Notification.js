import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NotiUser from '../components/NotiUser';
import Navigation from '../components/Navigation';

export default class Notification extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={h1}>Match Maker</h1>
        <Navigation />
        <Grid container justify='center' alignItems='center'>
          {animateList.map((item, key) => (
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                heigh: '100%',
              }}>
              <Fade top>{item}</Fade>
            </Box>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

const animateList = [
  <NotiUser
    name={'Mark Erikson'}
    message={'I like your idea! can I join?'}
    role={'Software Engineer @ Northrop Grumman Corporation'}
    photo={
      'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg'
    }
  />,
  <NotiUser
    name={'Netta Bondy'}
    message={'cool idea!'}
    role={'Web Developer @ Reali'}
    photo={
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    }
  />,
  <NotiUser
    name={'David Lorenz'}
    message={'Hi, I am frontend dev at MB.io'}
    role={'Frontend Developer @ MB.io'}
    photo={'https://peopledotcom.files.wordpress.com/2018/02/two-tone-cat.jpg'}
  />,
  <NotiUser
    name={'Hannes Struß'}
    message={'Driving Digital Future. Now'}
    role={'Leadlink Mobile App Engineering @ MB.io'}
    photo={'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2011/01/cat-apps.jpg'}
  />,
  <NotiUser
    name={'Alexandre Vaz'}
    message={'How can disruptive change affect the automotive industry?'}
    role={'Leadlink Development Circle @ MB.io'}
    photo={'https://ak8.picdn.net/shutterstock/videos/4822508/thumb/1.jpg'}
  />,
];

const h1 = {
  color: '#8df3de',
  margin: '10px 30px 0px 15px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1.6em',
};
