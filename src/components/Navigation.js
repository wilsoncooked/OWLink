import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  fullList: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#6539ec',
    padding: '30px',
  },
  hamburger: {
    width: 39,
    height: 39,
  },
  navButton: {
    position: 'fixed',
    right: '1px',
    top: '1px',
  },
  li: {
    padding: '20px 0px',
    fontSize: '2em',
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [side]: open});
  };
  const fullList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <ul>
        <Link
          className={classes.link}
          to={{
            pathname: `/`,
          }}>
          <li className={classes.li}>Home</li>
        </Link>
        <Link
          className={classes.link}
          to={{
            pathname: `/timetable`,
          }}>
          <li className={classes.li}>Timetable</li>
        </Link>
        <Link
          className={classes.link}
          to={{
            pathname: `/speakers`,
          }}>
          <li className={classes.li}>Speakers</li>
        </Link>
        <Link
          className={classes.link}
          to={{
            pathname: `/profile`,
          }}>
          <li className={classes.li}>Profile</li>
        </Link>
        <Link
          className={classes.link}
          to={{
            pathname: `/profile`,
          }}>
          <li className={classes.li}>Match Maker</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <div>
      <Button
        className={classes.navButton}
        color='primary'
        onClick={toggleDrawer('top', true)}>
        <Menu className={classes.hamburger} />
      </Button>
      <Drawer
        anchor='top'
        open={state.top}
        onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>
  );
}
