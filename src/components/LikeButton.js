import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    transform: 'scale(1.2)',
  },
  input: {
    display: 'none',
  },
}));

export default function Like() {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        color='primary'
        className={classes.button}
        aria-label='Delete'>
        <Favorite color='primary' />
      </IconButton>
    </div>
  );
}
