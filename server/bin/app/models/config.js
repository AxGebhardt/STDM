"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("../config/db.config");
const sequelize_typescript_1 = require("sequelize-typescript");
const movies_model_1 = __importDefault(require("./movies.model"));
/* export const connect = () => {*/
const connection = new sequelize_typescript_1.Sequelize(db_config_1.dbConfig.DB, db_config_1.dbConfig.USER, db_config_1.dbConfig.PASSWORD, {
    host: db_config_1.dbConfig.HOST,
    port: db_config_1.dbConfig.PORT,
    dialect: db_config_1.dbConfig.dialect,
    models: [movies_model_1.default],
    pool: {
        max: db_config_1.dbConfig.pool.max,
        min: db_config_1.dbConfig.pool.min,
        acquire: db_config_1.dbConfig.pool.acquire,
        idle: db_config_1.dbConfig.pool.idle
    }
});
exports.default = connection;
/*
sequelize.addModels([Movie]);

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

return db;
}*/ 
