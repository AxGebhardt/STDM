import { dbConfig } from '../config/db.config';
import { Sequelize, OperatorsAliases } from 'sequelize-typescript';

const sequelize: Sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize.add
sequelize.addModels([Tasks]);

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

return db;