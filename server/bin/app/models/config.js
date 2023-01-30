"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("../config/db.config");
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize(db_config_1.dbConfig.DB, db_config_1.dbConfig.USER, db_config_1.dbConfig.PASSWORD, {
    host: db_config_1.dbConfig.HOST,
    port: db_config_1.dbConfig.PORT,
    dialect: db_config_1.dbConfig.dialect,
    pool: {
        max: db_config_1.dbConfig.pool.max,
        min: db_config_1.dbConfig.pool.min,
        acquire: db_config_1.dbConfig.pool.acquire,
        idle: db_config_1.dbConfig.pool.idle
    }
});
exports.default = sequelizeConnection;
