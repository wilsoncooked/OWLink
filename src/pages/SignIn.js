import React from 'react';
// import {render} from 'react-dom';
import firebase from 'firebase/app';
import {Redirect} from 'react-router-dom';

import {instance} from '../Firebase';
const auth = instance.auth();

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithRedirect(githubAuthProvider)
      .then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        localStorage.setItem('token', token);
        var user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
      })
      .then(this.setState({redirect: true}))
      .catch(function(error) {
        var errorCode = error.code;
        console.log(errorCode);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    } else {
      return (
        <div>
          <button onClick={this.login}>
            <b>Sign In</b>
          </button>
        </div>
      );
    }
  }
}

export default SignIn;
