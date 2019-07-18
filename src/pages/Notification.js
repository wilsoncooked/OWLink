import React from 'react';
import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';

export default function Notification() {
  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        <Box display='flex' flexDirection='column'>
          <UserInfo />
          ssssssssssssssssssssssssssss
        </Box>
      </Grid>
    </React.Fragment>
  );
}

function UserInfo() {
  return (
    <React.Fragment>
      <Card style={{width: '345px', marginTop: '30px', marginBottom: '10px'}}>
        <CardContent>
          <Avatar
            style={{
              margin: '0 auto',
              width: '60px',
              height: '60px',
            }}>
            R
          </Avatar>
          <p style={{textAlign: 'center'}}>name</p>
          <Typography variant='body2' color='textSecondary' component='p'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Box>
          <Chip label='front-end' style={{margin: '10px'}} />
          <Chip label='back-end' style={{margin: '10px'}} />
          <Chip label='design' style={{margin: '10px'}} />
        </Box>
      </Card>
    </React.Fragment>
  );
}
