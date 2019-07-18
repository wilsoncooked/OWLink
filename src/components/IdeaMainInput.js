import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 10px',
    backgroundColor: '#EEE',
  },
  title: {
    padding: '0',
    margin: '0',
    color: '#6539ec',
    fontSize: '1.5em',
  },
  input: {
    height: '20vh',
    width: '98%',
    marginTop: '10px',
    color: '#6539ec',
    backgroundColor: '#EFEFEF',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em',
    fontWeight: '400',
  },
}));

export default function IdeaMainInput() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h5 color='primary' className={classes.title}>
          Whats inspired you?
        </h5>
        <textarea rows={10} type='text' className={classes.input} required />
      </Paper>
    </div>
  );
}
