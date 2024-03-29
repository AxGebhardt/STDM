"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_model_1 = __importDefault(require("./models/movies.model"));
require('dotenv').config();
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => {
    movies_model_1.default.sync({ force: true });
};
exports.default = dbInit;
