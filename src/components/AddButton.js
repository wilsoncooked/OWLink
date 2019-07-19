import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '10px',
    transform: 'scale(0.9)',
  },
  input: {
    display: 'none',
  },
}));

export default function AddButton() {
  const classes = useStyles();

  return (
    <div>
      <Fab
        size='small'
        color='secondary'
        aria-label='Add'
        className={classes.margin}>
        <AddIcon />
      </Fab>
    </div>
  );
}
