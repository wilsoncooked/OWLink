import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '30px',
    backgroundColor: '#EFEFEF',
  },
}));

export default function IdeaMainInput() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h3>Your idea: </h3>
        <InputBase
          className={classes.margin}
          inputProps={{'aria-label': 'naked'}}
        />
      </Paper>
    </div>
  );
}
