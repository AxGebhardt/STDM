import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Rating } from '@mui/material';
import Movie from '../shared/movieModel';

export default function MovieCard(props: Movie) {
  return (
    // <Card sx={{ maxWidth: 340 }}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={props.moviePictureURL}
          alt={props.movieName}
        />
        <CardContent sx={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.movieName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movieDescription}
          </Typography>
        </CardContent>
        <CardContent sx={{textAlign: "center"}}>
            <Rating name="half-rating-read" value={props.rating} precision={0.1} readOnly/>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" sx={{backgroundColor: '#aa2e25', width: "1"}}>Löschen</Button>
        </CardActions>
    </Card>
  );
}