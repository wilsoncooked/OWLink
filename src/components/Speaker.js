import React, {Component} from 'react';
//CARDS
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// Link
import {Link} from 'react-router-dom';

function Speaker() {
  return (
    <Card style={card}>
      <Link to='/timetable'>
        <CardActionArea style={cardaction}>
          <CardMedia
            style={media}
            image='https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
            title='Cat'>
            <CardContent style={flexcontent}>
              <Typography gutterBottom variant='h6' component='h2'>
                David Lorenz
              </Typography>
              <Typography variant='body2' component='p'>
                Frontend Developer
              </Typography>
              <Typography variant='body2' component='p'>
                bioooooooo
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default Speaker;

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
