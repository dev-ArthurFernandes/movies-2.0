import { Request, Response } from 'express';
import { createNewMovieService } from '../services';
import { IMoviesResponse } from '../interfaces';


const createNewMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movieData = req.body

    const newMovie: IMoviesResponse = await createNewMovieService(movieData)

    return res.status(201).json(newMovie)
}

export default createNewMovieController