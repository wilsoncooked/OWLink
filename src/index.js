import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {instance} from './Firebase';
console.log(instance);

// const db = instance.firestore();
// db.collection('cities')
//   .doc('LA')
//   .set({
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA',
//   })
//   .then(function() {
//     console.log('Document successfully written!');
//   })
//   .catch(function(error) {
//     console.error('Error writing document: ', error);
//   });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
