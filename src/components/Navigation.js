import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hamburger: {
    width: 40,
    height: 40,
  },
  navButton: {
    position: 'fixed',
    right: '3px',
    top: '3px',
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

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <List />
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <List />
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
