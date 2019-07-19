import React, {Component} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Profile from './Profile';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

firebase.initializeApp({
  apiKey: 'AIzaSyDSuDBGWwDlpPSu5KyHqhya5Iziyi2pFqE',
  authDomain: 'owlink-a4f32.firebaseapp.com',
  databaseURL: 'https://owlink-a4f32.firebaseio.com',
  projectId: 'owlink-a4f32',
  storageBucket: 'owlink-a4f32.appspot.com',
  messagingSenderId: '620782128710',
  appId: '1:620782128710:web:25b74d543db9d394',
});

class SignUp extends Component {
  state = {isSignedIn: false};
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user});
      console.log('user', user);
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <React.Fragment>
            <Grid container justify='center' alignItems='center'>
              <Box display='flex' flexDirection='column'>
                <Fab
                  onClick={() => firebase.auth().signOut()}
                  variant='extended'
                  aria-label='logout'
                  color='secondary'
                  size='small'
                  style={{margin: '20px'}}>
                  Log out
                </Fab>
              </Box>
              <Profile
                name={firebase.auth().currentUser.displayName}
                photo={firebase.auth().currentUser.photoURL}
              />
            </Grid>
          </React.Fragment>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}
export default SignUp;
