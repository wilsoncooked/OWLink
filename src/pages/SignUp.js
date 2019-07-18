import React, {Component} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt='profile picture'
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
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
