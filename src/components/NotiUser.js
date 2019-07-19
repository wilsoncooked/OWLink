import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const {name, role, photo, message} = this.props;
    return (
      <React.Fragment>
        <Card style={{width: '345px', marginTop: '30px', marginBottom: '10px'}}>
          <CardContent>
            <Avatar
              src={photo}
              style={{
                margin: '0 auto',
                width: '150px',
                height: '150px',
              }}>
              R
            </Avatar>
            <p style={{textAlign: 'center'}}>{name}</p>
            <Typography
              style={{textAlign: 'center'}}
              variant='body2'
              color='textSecondary'
              component='p'>
              {role}
            </Typography>
          </CardContent>
          {/* <Box>
            <Chip label='front-end' style={{margin: '10px'}} />
            <Chip label='back-end' style={{margin: '10px'}} />
            <Chip label='design' style={{margin: '10px'}} />
          </Box> */}
          <Box style={{backgroundColor: '#8df3de', padding: '15px'}}>
            <Typography
              style={{textAlign: 'center'}}
              variant='body2'
              color='textPrimary'
              component='p'>
              {message}
            </Typography>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}>
              <Fab color='primary' aria-label='Add' onClick={this.handleClick}>
                <AddIcon color='secondary' />
              </Fab>
              <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={this.state.open}
                onClose={this.handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={
                  <span id='message-id'>You've sent invitation to {name}</span>
                }
              />
            </Box>
          </Box>
        </Card>
      </React.Fragment>
    );
  }
}
