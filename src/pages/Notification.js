import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Bounce from 'react-reveal/Bounce';
import Snackbar from '@material-ui/core/Snackbar';
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
