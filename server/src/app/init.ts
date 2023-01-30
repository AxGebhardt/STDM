import Movie from './models/Movies';
require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
    Movie.sync({ force: true })
}

export default dbInit