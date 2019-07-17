import React from 'react';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

export default function Profile() {
  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        <UserInfo />
        <ListOfIdeas />
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
        <Chip label='front-end' style={{margin: '10px'}} />
        <Chip label='back-end' style={{margin: '10px'}} />
        <Chip label='design' style={{margin: '10px'}} />
      </Card>
    </React.Fragment>
  );
}

function ListOfIdeas() {
  return (
    <React.Fragment>
      <Card style={{width: '345px', marginTop: '10px'}}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>List of My Ideas on Talks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <List dense>
                <ListItem>
                  {/* <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar> */}
                  <ListItemText>aa</ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='Delete'>
                      <DeleteIcon />
                    </IconButton>
                    <Badge color='primary' badgeContent={4}>
                      <IconButton edge='end' aria-label='Delete'>
                        <DeleteIcon />
                      </IconButton>
                      {/* <Button variant='contained'>Button</Button> */}
                    </Badge>
                  </ListItemSecondaryAction>
                </ListItem>
                {/* <ListItem>
                  <ListItemText>aa</ListItemText>
                </ListItem> */}
              </List>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    </React.Fragment>
  );
}
