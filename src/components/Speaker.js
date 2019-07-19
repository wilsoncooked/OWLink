import React, {Component} from 'react';
//CARDS
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Link
import {Link} from 'react-router-dom';

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [],
    };
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5d1cc16ff467d60d75acb5bd')
      .then(response => response.json())
      .then(data =>
        this.setState({
          speakers: data.speakers,
        }),
      );
  }

  render() {
    if (this.state.speakers.length !== 0) {
      return (
        <React.Fragment>
          <h1 style={h1}>Speaker</h1>
          <Card style={card}>
            <Link to='/timetable' style={link}>
              <CardActionArea style={cardaction}>
                <CardContent
                  style={flexcontent}
                  className='action-card-speaker'>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={h5}>
                    {this.state.speakers[0].name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='h2'
                    style={h6}>
                    {this.state.speakers[0].role}
                  </Typography>
                  <Typography variant='body1' component='p' style={p}>
                    {this.state.speakers[0].topic}
                  </Typography>
                  <Typography variant='body2' component='p' style={p}>
                    "{this.state.speakers[0].about}"
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 style={h1}>Speaker</h1>
          <h2 style={h2}>...loading</h2>
        </React.Fragment>
      );
    }
  }
}

export default Speaker;

//style
const card = {
  margin: '10px 30px 10px 30px ',
  border: '2px solid #8df3de',
  borderRadius: ' 20px',
};
const cardaction = {
  width: '100%',
  height: '60vh',
  margin: 0,
};
const link = {
  textDecoration: 'none',
};
const h1 = {
  color: '#8df3de',
  margin: '10px 30px 10px 30px ',
  fontWeight: '300',
  letterSpacing: '1.2px',
  fontSize: '1.6em',
};
const h2 = {
  color: 'white',
  margin: '10px 30px 10px 30px ',
};
const flexcontent = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '5px 15px 0px 15px',
  textTransform: 'capitalize',
  letterSpacing: '1.2px',
  width: '280px',
  textAlign: 'left',
};
const p = {
  marginTop: 10,
  color: 'black',
};
const h5 = {
  color: '#6539ec',
  marginTop: 10,
};
const h6 = {
  color: 'black',
};
