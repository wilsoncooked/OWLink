import React, {Component} from 'react';
//CARDS
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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
    //this.setState(index);
    console.log('index', index.target.value);
  }

  render() {
    let day1 = '';
    if (this.state.timetable.length !== 0) {
      day1 = this.state.timetable[0].timeslot.map(slot => (
        <Card style={card}>
          <Link to='/speaker'>
            <CardActionArea style={cardaction}>
              <CardMedia
                style={media}
                image='https://images.unsplash.com/photo-1558445941-3e4f497931b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
                title='Mercedes car'>
                <CardContent style={flexcontent}>
                  <Typography gutterBottom variant='h6' component='h2'>
                    {slot.topic} - David Lorenz
                  </Typography>
                  <Typography variant='body2' component='p'>
                    starts at {slot.starttime} to {slot.endtime}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {slot.venue}
                  </Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
          </Link>
        </Card>
      ));
    }

    let day2 = '';
    if (this.state.timetable.length !== 0) {
      day2 = this.state.timetable[1].timeslot.map(slot => (
        <Card style={card}>
          <CardActionArea style={cardaction}>
            <CardMedia
              style={media}
              image='https://images.unsplash.com/photo-1558445941-3e4f497931b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
              title='Mercedes car'>
              <CardContent style={flexcontent}>
                <Typography gutterBottom variant='h6' component='h2'>
                  {slot.topic} - David Lorenz
                </Typography>
                <Typography variant='body2' component='p'>
                  starts at {slot.starttime} to {slot.endtime}
                </Typography>
                <Typography variant='body2' component='p'>
                  {slot.venue}
                </Typography>
              </CardContent>
            </CardMedia>
          </CardActionArea>
        </Card>
      ));
    }

    const direction = 'ltr';

    return (
      <React.Fragment>
        <h1 style={h1}>Timetable</h1>
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
  margin: '10px 30px 10px 30px ',
};
const cardaction = {
  maxWidth: 345,
};
const media = {
  height: 140,
  filter: 'grayscale(100%)',
};
const h1 = {
  color: '#8df3de',
  margin: '10px 30px 10px 30px ',
};
const h2 = {
  color: 'white',
  margin: '10px 30px 10px 30px ',
};
const flexcontent = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: '#ffffff99',
  height: '100%',
};
