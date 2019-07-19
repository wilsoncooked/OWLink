import React, {Component} from 'react';
//CARDS
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// TABS
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';
// Link
import {Link} from 'react-router-dom';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timetable: [],
      active: 0,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5d1cc16ff467d60d75acb5bd')
      .then(response => response.json())
      .then(data =>
        this.setState({
          timetable: data.timetable,
        }),
      );
  }

  changeHandler() {
    this.setState(state => {
      console.log('event', state.active);
      return {active: Number(!state.active)};
    });
  }
  handleChangeIndex(index) {
    console.log('index', index.target.value);
  }

  render() {
    let day1 = '';
    if (this.state.timetable.length !== 0) {
      day1 = this.state.timetable[0].timeslot.map(slot => (
        <Card style={card}>
          <Link to='/timetable/details' style={link}>
            <CardActionArea style={cardaction} className='action-card'>
              <div style={cardPosition}>
                <div className={slot.venue} />
                <div style={boxText}>
                  <h3>{slot.topic}</h3>
                  <p>
                    {slot.starttime} - {slot.endtime}
                  </p>
                  <p>{slot.venue}</p>
                </div>
              </div>
            </CardActionArea>
          </Link>
        </Card>
      ));
    }

    let day2 = '';
    if (this.state.timetable.length !== 0) {
      day2 = this.state.timetable[1].timeslot.map(slot => (
        <Card style={card}>
          <Link to='/timetable/details' style={link}>
            <CardActionArea style={cardaction} className='action-card'>
              <div style={cardPosition}>
                <div className={slot.venue} />
                <div style={boxText}>
                  <h3>{slot.topic}</h3>
                  <p>
                    {slot.starttime} - {slot.endtime}
                  </p>
                  <p>{slot.venue}</p>
                </div>
              </div>
            </CardActionArea>
          </Link>
        </Card>
      ));
    }

    const direction = 'ltr';

    return (
      <React.Fragment>
        <h1 style={h1}>Timetable </h1>
        <div>
          <AppBar position='static' color='default'>
            <Tabs
              value={this.state.active}
              onChange={this.changeHandler}
              indicatorColor='primary'
              textColor='primary'
              variant='fullWidth'>
              <Tab label='Day One' />
              <Tab label='Day Two' />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.active}
            onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir={direction}>{day1}</TabContainer>
            <TabContainer dir={direction}>{day2}</TabContainer>
          </SwipeableViews>
        </div>
      </React.Fragment>
    );
  }
}

export default Timetable;

//style
const card = {
  margin: '-15px -15px 22px -15px',
};
const cardaction = {
  maxWidth: '345px',
  color: 'black',
};
const link = {
  textDecoration: 'none',
};
const h1 = {
  color: '#8df3de',
  margin: '10px 30px 10px 15px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1.6em',
};
const cardPosition = {
  display: 'flex',
};
const boxText = {
  padding: '5px 15px 0px 15px',
  textTransform: 'capitalize',
  letterSpacing: '1.2px',
  width: '280px',
  textAlign: 'left',
};
