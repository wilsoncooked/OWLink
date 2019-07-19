import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  fullList: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#6539ec',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  link: {
    textDecoration: 'none',
    color: '#8df3de',
  },
  ul: {
    width: '55vw',
    marginRight: '20px',
  },
  logo: {
    width: '300px',
    paddingBottom: '20px',
  },
  hr: {},
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
      <img
        className={classes.logo}
        src='https://i.imgur.com/lFEgcaf.png'
        alt='owl conference logo'
      />
      <Divider />
      <ul className={classes.ul}>
        <Link
          className={classes.link}
          to={{
            pathname: `/`,
          }}>
          <li className={classes.li}>Home</li>
        </Link>

        <li className={classes.li}>
          <Link
            className={classes.link}
            to={{
              pathname: `/timetable`,
            }}>
            Timetable{' '}
          </Link>
        </li>
        <Link
          className={classes.link}
          to={{
            pathname: `/timetable/details`,
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
            pathname: `/notification`,
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
