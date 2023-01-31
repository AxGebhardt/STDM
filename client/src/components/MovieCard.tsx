import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import Movie from '../shared/movieModel';

export default function MovieCard(props: Movie) {
  return (
    <Card sx={{ maxWidth: 620 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360"
          image={props.moviePictureURL}
          alt={props.movieName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.movieName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movieDescription}
          </Typography>
        </CardContent>
        <CardContent>
            <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}