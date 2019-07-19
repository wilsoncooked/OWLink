import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 10px',
    backgroundColor: '#EEE',
    margin: '20px 0px',
  },
  title: {
    padding: '0',
    margin: '0',
    color: '#6539ec',
    fontSize: '1.5em',
  },
  inputTitle: {
    width: '98%',
    marginTop: '10px',
    color: '#6539ec',
    backgroundColor: '#EFEFEF',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em',
    fontWeight: '400',
  },
  inputBody: {
    width: '98%',
    marginTop: '10px',
    color: '#6539ec',
    backgroundColor: '#EFEFEF',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em',
    fontWeight: '400',
  },
  char: {
    fontSize: '0.6em',
    color: '#8df3de',
  },
}));

export default function IdeaMainInput() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h5 color='primary' className={classes.title}>
          Whats inspired you? <span className={classes.char}> (100char)</span>
        </h5>
        <textarea
          rows={2}
          type='text'
          className={classes.inputTitle}
          required
        />
      </Paper>
      <Paper className={classes.root}>
        <h5 color='primary' className={classes.title}>
          Have more details?
        </h5>
        <textarea rows={8} type='text' className={classes.inputBody} required />
      </Paper>
    </div>
  );
}
