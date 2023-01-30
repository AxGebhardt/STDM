import { Dialect } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "root",
    PASSWORD: process.env.DB_PASSWORD || "admin",
    DB: process.env.DB_DB || "database",
    PORT: Number(process.env.DB_PORT) || 49153,
    dialect: 'postgres' as Dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};