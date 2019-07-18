import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDSuDBGWwDlpPSu5KyHqhya5Iziyi2pFqE',
  authDomain: 'owlink-a4f32.firebaseapp.com',
  databaseURL: 'https://owlink-a4f32.firebaseio.com',
  projectId: 'owlink-a4f32',
  storageBucket: '',
  messagingSenderId: '620782128710',
  appId: '1:620782128710:web:25b74d543db9d394',
};

const instance = firebase.initializeApp(firebaseConfig);

export {instance};
