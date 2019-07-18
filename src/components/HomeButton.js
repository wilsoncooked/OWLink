import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  fab: {
    backgroundColor: '#6539ec',
    color: 'white',
    textAlign: 'center',
    minWidth: '170px',
    minHeight: '60px',
    fontSize: '1.5em',
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function HomeButton() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link
        className={classes.link}
        to={{
          pathname: `/Timetable`,
        }}>
        <Fab variant='extended' aria-label='Delete' className={classes.fab}>
          Enter
        </Fab>
      </Link>
    </React.Fragment>
  );
}
