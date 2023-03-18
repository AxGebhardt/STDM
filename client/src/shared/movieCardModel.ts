import Movie from "./movieModel";

//Refactor
export default interface MovieCardModel {
    movieID: number;
    movieName: string;
    movieDescription: string;
    moviePictureURL: string;
    rating: number;
    releaseYear: number;
    parentCallback(movie: Movie): any
}