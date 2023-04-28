import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../AppError";


const validateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movieId: number | undefined = parseInt(req.params.id)

    const findId = await moviesRepository.findOne({
        where: {
            id: movieId
        }
    })

    if(!findId){
        throw new AppError("Movie not found", 404)
    }

    return next()
}

export default validateId