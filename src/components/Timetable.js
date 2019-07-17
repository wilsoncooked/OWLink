import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timetable: [],
    };
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5d2f4c5450ba093dda160d01')
      .then(response => response.json())
      .then(data =>
        this.setState({
          timetable: data.timetable,
        }),
      );
  }

  render() {
    if (this.state.timetable.length !== 0) {
      console.log(this.state.timetable[0].timeslot[0].endtime);
      return (
        <React.Fragment>
          <h1 style={h1}>Timetable</h1>

          {this.state.timetable[0].timeslot.map(slot => (
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
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 style={h1}>Timetable</h1>
          <h2 style={h2}>Sorry the talks are not yet annouced</h2>
        </React.Fragment>
      );
    }
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
