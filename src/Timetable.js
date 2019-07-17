import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 30,
    color: 'white',
  },
  media: {
    height: 140,
    opacity: 0.7,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
          title='Contemplative Reptile'>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              beginning talks
            </Typography>
            <Typography gutterBottom variant='h7' component='h2'>
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
  );
}
