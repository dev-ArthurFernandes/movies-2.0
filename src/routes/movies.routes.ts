import { Router } from "express";
import {
    createNewMovieController,
    deleteMovieController,
    listAllMoviesController,
    updateMovieInfoController
} from "../controllers";
import { 
    ensureData,
    validateId,
    validateName } from "../middlewares";
import {
    createMoviesSchemas, updateMoviesSchemas
} from "../schemas";

const moviesRoutes = Router()

moviesRoutes.post('', ensureData(createMoviesSchemas), validateName, createNewMovieController)

moviesRoutes.get('', listAllMoviesController)

moviesRoutes.patch('/:id', ensureData(updateMoviesSchemas), validateName, validateId, updateMovieInfoController)

moviesRoutes.delete('/:id', validateId, deleteMovieController)
export default moviesRoutes