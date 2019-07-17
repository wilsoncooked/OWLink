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
          <Card>
            <CardActionArea style={card}>
              <CardMedia
                style={media}
                image='https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
                title='Contemplative Reptile'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    beginning talks
                  </Typography>
                  <Typography gutterBottom variant='h6' component='h2'>
                    by David Lorenz
                  </Typography>
                  <Typography variant='body2' component='p'>
                    starts at 9.30 to 10.15
                  </Typography>
                  <Typography variant='body2' component='p'>
                    room Bertha
                  </Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
          </Card>
        </React.Fragment>
      );
    } else {
      return (
        // default card component to be displayed if there is no data, only hardcoded values
        <React.Fragment>
          <h1 style={h1}>Timetable</h1>
          <Card>
            <CardActionArea style={card}>
              <CardMedia
                style={media}
                image='https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
                title='Contemplative Reptile'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    beginning talks
                  </Typography>
                  <Typography gutterBottom variant='h6' component='h2'>
                    by David Lorenz
                  </Typography>
                  <Typography variant='body2' component='p'>
                    starts at 9.30 to 10.15
                  </Typography>
                  <Typography variant='body2' component='p'>
                    room Bertha
                  </Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
          </Card>
        </React.Fragment>
      );
    }
  }
}

export default Timetable;

//style
const card = {
  maxWidth: 345,
  color: 'white',
  textShadow: ' 2px 2px 2px rgba(0, 0, 0, 1)',
};
const media = {
  height: 140,
  opacity: 0.8,
};
const h1 = {
  color: '#8df3de',
};
