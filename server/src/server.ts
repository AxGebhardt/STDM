import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import dbInit from './app/init';
import "reflect-metadata";
import connection from './app/models/config'
import Movie from './app/models/movies.model';

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 8080;
const app: Express = express();

dbInit();

var corsOptions: CorsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Test route!" });
});

//All movies
app.get("/movies", async (req: Request, res: Response): Promise<Response> => {
  const allMovies: Movie[] = await Movie.findAll();
  return res.status(200).json(allMovies);
});

//Get one movie
app.get("/movies/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const movie: Movie | null = await Movie.findByPk(id);
  return res.status(200).json(movie);
});

//Add movie
app.post("/movies", async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await Movie.create({ ...req.body });
  return res.status(201).json(movie);
});

//Delete a movie
app.delete("/movie/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedMovie: Movie | null = await Movie.findByPk(id);
    await Movie.destroy({ where: { id } });
    return res.status(200).json(deletedMovie);
  }
);

// Start express server and sync db
const start = async (): Promise<void> => {
  try {
    await connection.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();