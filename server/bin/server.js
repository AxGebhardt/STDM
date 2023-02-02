"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const init_1 = __importDefault(require("./app/init"));
require("reflect-metadata");
const config_1 = __importDefault(require("./app/models/config"));
const movies_model_1 = __importDefault(require("./app/models/movies.model"));
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
(0, init_1.default)();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use((0, cors_1.default)(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// test route
app.get("/", (req, res) => {
    res.json({ message: "Test route!" });
});
//All movies
app.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMovies = yield movies_model_1.default.findAll();
    return res.status(200).json(allMovies);
}));
//Get one movie
app.get("/movies/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movie = yield movies_model_1.default.findByPk(id);
    return res.status(200).json(movie);
}));
//Add movie
app.post("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movies_model_1.default.create(Object.assign({}, req.body));
    return res.status(201).json(movie);
}));
//Delete a movie
app.delete("/movie/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedMovie = yield movies_model_1.default.findByPk(id);
    yield movies_model_1.default.destroy({ where: { id } });
    return res.status(200).json(deletedMovie);
}));
// Start express server and sync db
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.default.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
start();
