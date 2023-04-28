import { NextFunction, Response, Request } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from '../AppError'


const validateName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movieName: string | undefined = req.body.name

    if(movieName){
        const findName = await moviesRepository.exist({
            where: {
                name: req.body?.name
            }
        })
    
        if(findName){
            throw new AppError("Movie already exists.", 409)
        }
    }

    return next()
}

export default validateName