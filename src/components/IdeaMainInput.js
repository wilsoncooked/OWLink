import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 10px',
    backgroundColor: '#EFEFEF',
  },
  title: {
    padding: '0',
    margin: '0',
  },
  input: {
    height: '20vh',
    width: '98%',
    marginTop: '10px',
    color: '#6539ec',
    backgroundColor: '#EFEFEF',
    border: 'none',
    outline: 'none',
  },
}));

export default function IdeaMainInput() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h4 className={classes.title}>Your idea: </h4>
        <textarea rows={10} type='text' className={classes.input} required />
      </Paper>
    </div>
  );
}
