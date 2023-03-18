import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import http from '../shared/http-common';
import MovieCardModel from '../shared/movieCardModel';

export default function MovieCard(props: MovieCardModel) {

  function deleteMovie() {
    http.delete('movie/' + props.movieID);
    props.parentCallback(props);
  }

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
          <Button variant="contained" sx={{backgroundColor: '#aa2e25', width: "1"}} onClick={deleteMovie}>Löschen</Button>
        </CardActions>
        {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Der Film '{props.movieName}' wurde erfolgreich gelöscht!
        </Alert>
        </Snackbar> */}
    </Card>
  );
}