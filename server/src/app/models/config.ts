import { dbConfig } from '../config/db.config';
import { Sequelize } from 'sequelize-typescript';
import Movie from './movies.model';

/* export const connect = () => {*/

    const connection: Sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        models: [Movie],

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

    export default connection;
    /*
    sequelize.addModels([Movie]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    return db;
}*/