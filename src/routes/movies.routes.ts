import { Router } from "express";
import {
    createNewMovieController, listAllMoviesController
} from "../controllers";
import { 
    ensureData,
    validateName } from "../middlewares";
import {
    createMoviesSchemas
} from "../schemas";

const moviesRoutes = Router()

moviesRoutes.post('', ensureData(createMoviesSchemas), validateName, createNewMovieController)

moviesRoutes.get('', listAllMoviesController)


export default moviesRoutes