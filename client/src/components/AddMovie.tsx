import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, TextField, Snackbar, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import http from '../shared/http-common';
import MovieRequest from '../shared/movieRequest';

export default function AddMovie(props: {
    close: any; show: boolean; 
}) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [rating, setRating] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const addMovie = () => {
        console.log(name);
        const movie: MovieRequest = {
            name: name,
            description: description,
            movieURL: picture,
            rating: +rating,
            releaseYear: +releaseYear
        }
        http.post<MovieRequest>('/movies', movie)
        setOpen(true);
        props.close();
    };

  return (
    <div>    
        <Dialog open={props.show} onClose={props.close}>
        <DialogTitle>Film hinzufügen</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Zum hinzufügen eines neuen Filmes bitte das folgende Formular ausfüllen.
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Film Titel"
            type="text"
            fullWidth
            variant="standard"
            onChange={(newValue) => setName(newValue.target.value)}
            value={name}
        />
        <TextField
            margin="dense"
            id="beschreibung"
            label="Film Beschreibung"
            type="text"
            fullWidth
            variant="standard"
            onChange={(newValue) => setDescription(newValue.target.value)}
            value={description}
        />
        <TextField
            margin="dense"
            id="url"
            label="Film Bild (URL)"
            type="text"
            fullWidth
            variant="standard"
            onChange={(newValue) => setPicture(newValue.target.value)}
            value={picture}
        />
        <TextField
            margin="dense"
            id="rating"
            label="Film Rating"
            type="text"
            fullWidth
            variant="standard"
            onChange={(newValue) => setRating(newValue.target.value)}
            value={rating}
        />
        <TextField
            margin="dense"
            id="releaseYear"
            label="Film Erscheinungsjahr"
            type="text"
            fullWidth
            variant="standard"
            onChange={(newValue) => setReleaseYear(newValue.target.value)}
            value={releaseYear}
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={props.close}>Schließen</Button>
        <Button onClick={addMovie}>Hinzufügen</Button>
        </DialogActions>
        </Dialog>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Der Film '{name}' wurde erfolgreich hinzugefügt!
        </Alert>
      </Snackbar>
    </div>
  );
}