import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NotiUser from '../components/NotiUser';

export default class Notification extends Component {
  render() {
    return (
      <React.Fragment>
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
  <NotiUser name={'user1'} message={'software engineer in Berlin'} />,
  <NotiUser name={'user2'} message={'software engineer in Berlin'} />,
  <NotiUser name={'user3'} message={'software engineer in Berlin'} />,
  <NotiUser name={'user4'} message={'software engineer in Berlin'} />,
  <NotiUser name={'user5'} message={'software engineer in Berlin'} />,
];
