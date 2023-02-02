"use strict";
/*
import connect from "../models/config";
import Movie from "../models/movies.model";

export class MovieRepository {

    private db: any = {};
    private movieRespository: any;

    constructor() {
        this.db = connect();
        console.log(this.db);

        //DEV
        this.db.sequelize.sync({ force: true}).then(() => {
            console.log("DB deleted and re-synced.");
        })
        this.movieRespository = this.db.sequelize.getRepository(Movie);
    }

    async getMovies() {

        try {
            const movies = await this.movieRespository.findAll();
            return movies;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async addMovie(movie: Movie) {
        let data = {};
        try {
            data = await this.movieRespository.create(movie);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await this.taskRespository.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
}
*/ 
