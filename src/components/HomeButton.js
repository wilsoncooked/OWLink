import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import './HomeButton.css';

const useStyles = makeStyles(theme => ({
  fab: {
    backgroundColor: '#6539ec',
    color: 'white',
    textAlign: 'center',
    minWidth: '170px',
    minHeight: '60px',
    fontSize: '1em',
    border: '2px solid #8df3de',
    borderRadius: ' 40px',
    textDecoration: 'none',
    fontWeight: '400',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function HomeButton() {
  const classes = useStyles();

  return (
    <div className='swing swing-position'>
      <Link
        className={classes.link}
        to={{
          pathname: `/Timetable`,
        }}>
        <Fab variant='extended' aria-label='Delete' className={classes.fab}>
          See Timetable
        </Fab>
      </Link>
    </div>
  );
}
