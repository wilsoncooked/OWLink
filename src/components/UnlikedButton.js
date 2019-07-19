import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    transform: 'scale(1.2)',
  },
  input: {
    display: 'none',
  },
}));

export default function Unliked() {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        color='primary'
        className={classes.button}
        aria-label='Delete'>
        <FavoriteBorder color='primary' />
      </IconButton>
    </div>
  );
}
