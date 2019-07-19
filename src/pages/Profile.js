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

export default function Profile(props) {
  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        <Box display='flex' flexDirection='column'>
          <UserInfo name={props.name} photo={props.photo} />
          <ListOfIdeas title={'Idea List'} />
          <ListOfIdeas title={'Join List'} />
        </Box>
      </Grid>
    </React.Fragment>
  );
}

function UserInfo(props) {
  return (
    <React.Fragment>
      <Card style={{width: '345px', marginTop: '30px', marginBottom: '10px'}}>
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

function ListOfIdeas(props) {
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
              <_Link title={'Add 1 cup of frozen peas'} badge={4} />{' '}
              <_Link
                title={'fun meal to cook together with your guests'}
                badge={5}
              />
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    </React.Fragment>
  );
}

function _Link(props) {
  return (
    <ListItem button>
      <Link
        to='/'
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
