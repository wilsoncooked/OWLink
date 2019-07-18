import React from 'react';
// import {render} from 'react-dom';
import firebase from 'firebase/app';

import {instance} from '../Firebase';
const auth = instance.auth();

const login = () => {
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
};

export default function Login() {
  return (
    <div>
      <button onClick={login}>
        <b>Login</b>
      </button>
    </div>
  );
}
