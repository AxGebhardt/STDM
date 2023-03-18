import React, { useEffect, useState } from 'react';
//import './App.css';
import Movie from './shared/movieModel';
import MovieCard from './components/MovieCard';
import Grid from '@mui/material/Grid';
import http from './shared/http-common';
import MovieResponse from './shared/movieResponse';
import { Alert, Snackbar } from '@mui/material';

function App() {

  /*
  const spiderMovie: Movie = {
    movieName: 'Spider-Man',
    movieDescription: 'Ein guter Film',
    moviePictureURL: 'https://i.etsystatic.com/22985714/r/il/e23732/3807163725/il_570xN.3807163725_cuy8.jpg',
    rating: 4.0,
    releaseYear: 2019
  }*/

  /*
  const avengersEndgame: Movie = {
    movieName: 'Avengers Endgame',
    movieDescription: 'Ein anderer guter Film',
    moviePictureURL: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
    rating: 4.5,
    releaseYear: 2019
  }*/

  const [movies, setMovies] = useState<Movie[]>([]);
  const [open, setOpen] = React.useState(false);
  const [deletedMovie, setDeletedMovie] = React.useState<Movie>();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCallback = (childData: Movie) => {
    setMovies(movies.filter(a => a.movieID !== childData.movieID));
    setOpen(true);
    setDeletedMovie(childData);
  }

  useEffect(() => {
    http.get<MovieResponse[]>('/movies').then(res => {
      console.log(res.data);
      const movieResponse: MovieResponse[] = res.data;

      const movieData: Movie[] = movieResponse.map(movieResponse => ({
        movieID: movieResponse.id,
        movieName: movieResponse.name,
        movieDescription: movieResponse.description,
        moviePictureURL: movieResponse.movieURL,
        rating: +movieResponse.rating,
        releaseYear: movieResponse.releaseYear
      }))

      console.log('MovieData:', movieData);
      //movies.push(res.data);
      setMovies(movieData);
    }).catch(err => {
      console.log(err);
    })
  },[])

  /*
  for (let index = 0; index < 35; index++) {
    movies.push(spiderMovie);
    movies.push(avengersEndgame);
  }
  */

  return (
    <Grid className="App" container spacing={4}>

      {movies.map((element, index) => {
        return (
          <Grid item key={index} xs={12} md={6} xl={3}>
              <MovieCard 
                movieID={element.movieID}
                movieName={element.movieName} 
                movieDescription={element.movieDescription} 
                moviePictureURL={element.moviePictureURL} 
                rating={element.rating} 
                releaseYear={element.releaseYear}
                parentCallback = {handleCallback}
              />
          </Grid>
        );
      })}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Der Film '{deletedMovie?.movieName}' wurde erfolgreich gelöscht!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default App;
