import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyDSuDBGWwDlpPSu5KyHqhya5Iziyi2pFqE',
  authDomain: 'owlink-a4f32.firebaseapp.com',
  databaseURL: 'https://owlink-a4f32.firebaseio.com',
  projectId: 'owlink-a4f32',
  storageBucket: '',
  messagingSenderId: '620782128710',
  appId: '1:620782128710:web:25b74d543db9d394',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();

    /* Social Sign In Method Provider */
    const githubProvider = new firebase.auth.GithubAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGithub = () => this.auth.signInWithPopup(this.githubProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  // onAuthUserListener = (next, fallback) =>
  //   this.auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       this.user(authUser.uid)
  //         .once('value')
  //         .then(snapshot => {
  //           const dbUser = snapshot.val();

  //           // default empty roles
  //           if (!dbUser.roles) {
  //             dbUser.roles = {};
  //           }

  //           // merge auth and db user
  //           authUser = {
  //             uid: authUser.uid,
  //             email: authUser.email,
  //             emailVerified: authUser.emailVerified,
  //             providerData: authUser.providerData,
  //             ...dbUser,
  //           };

  //           next(authUser);
  //         });
  //     } else {
  //       fallback();
  //     }
  //   });

  // *** User API ***

  // user = uid => this.db.ref(`users/${uid}`);

  // users = () => this.db.ref('users');

  // // *** Message API ***

  // message = uid => this.db.ref(`messages/${uid}`);

  // messages = () => this.db.ref('messages');
}

export default Firebase;
