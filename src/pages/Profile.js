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
import Navigation from '../components/Navigation';

export default function Profile(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        <Box display='flex' flexDirection='column'>
          <UserInfo name={user.displayName} photo={user.photoURL} />
          <IdeaList title={'people who wants to join your idea'} />
          <JoinList title={'ideas you joined'} />
        </Box>
      </Grid>
    </React.Fragment>
  );
}

function UserInfo(props) {
  return (
    <React.Fragment>
      <Navigation />
      <Card style={{width: '345px', marginTop: '60px', marginBottom: '10px'}}>
        <CardContent>
          <Avatar
            src={props.photo}
            style={{
              margin: '0 auto',
              width: '60px',
              height: '60px',
            }}>
            R
          </Avatar>
          <p style={{textAlign: 'center'}}>{props.name}</p>
          <Typography variant='body2' color='textSecondary' component='p'>
            3+ years of experience in Frontend development, Strong testing
            mindset and attention to detail, Familiar with React.js and Vanilla
            JavaScript, A keen perception and good project management skills
          </Typography>
        </CardContent>
        <Box>
          <Chip
            label='front-end'
            style={{marginLeft: '10px', marginBottom: '10px'}}
          />
          <Chip
            label='javascript'
            style={{marginLeft: '10px', marginBottom: '10px'}}
          />
          <Chip
            label='react.js'
            style={{marginLeft: '10px', marginBottom: '10px'}}
          />
        </Box>
      </Card>
    </React.Fragment>
  );
}

function IdeaList(props) {
  return (
    <React.Fragment>
      <Card style={{width: '345px', marginTop: '10px'}}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <IdeaLink
                title={
                  'revolutionizes the communication between people and machine'
                }
                badge={1}
              />{' '}
              <IdeaLink
                title={
                  'online credit comparison platform makes loans transparent'
                }
                badge={5}
              />
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    </React.Fragment>
  );
}

function JoinList(props) {
  return (
    <React.Fragment>
      <Card style={{width: '345px', marginTop: '10px'}}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <JoinLink
                title={'build individual meal kits'}
                badge={'pending'}
              />{' '}
              <JoinLink
                title={'build code-based library of legal knowledge.'}
                badge={'approved'}
              />
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    </React.Fragment>
  );
}

function IdeaLink(props) {
  return (
    <ListItem button>
      <Link
        to='/notification'
        style={{
          textDecoration: 'none',
        }}>
        <ListItemText
          textAlign='left'
          style={{
            // overflow: 'hidden',
            // whiteSpace: 'nowrap',
            color: 'grey',
          }}>
          {props.title}
          <Badge
            color='primary'
            badgeContent={props.badge}
            style={{marginLeft: '15px'}}
          />
        </ListItemText>
      </Link>
    </ListItem>
  );
}

function JoinLink(props) {
  return (
    <ListItem button>
      <Link
        to='/timetable/details/'
        style={{
          textDecoration: 'none',
        }}>
        <ListItemText
          textAlign='left'
          style={{
            // overflow: 'hidden',
            // whiteSpace: 'nowrap',
            color: 'grey',
          }}>
          {props.title}
          <Badge
            color='secondary'
            badgeContent={props.badge}
            style={{marginLeft: '30px'}}
          />
        </ListItemText>
      </Link>
    </ListItem>
  );
}
