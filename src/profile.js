import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {red} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // textAlign: 'center',
  },
  fixedSize: {
    width: 345,
  },
  chip: {
    margin: theme.spacing(1),
  },
  avatar: {
    backgroundColor: red[500],
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        <Card style={{width: '345px'}}>
          {/* <CardContent style={{justifyContent: 'center'}}> */}
          {/* </CardContent> */}
          <CardContent>
            <Avatar style={{margin: '10px', width: '60px', height: '60px'}}>
              R
            </Avatar>
            <p>name</p>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <Chip label='front-end' style={{margin: '10px'}} />
        </Card>
      </Grid>
    </React.Fragment>
  );
}
