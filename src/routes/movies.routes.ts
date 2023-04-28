import { Router } from "express";
import {
    createNewMovieController
} from "../controllers";
import { 
    ensureData,
    validateName } from "../middlewares";
import {
    createMoviesSchemas
} from "../schemas";

const moviesRoutes = Router()

moviesRoutes.post('', ensureData(createMoviesSchemas), validateName, createNewMovieController)



export default moviesRoutes