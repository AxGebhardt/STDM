import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import dbInit from './app/init';

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

// simple route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});