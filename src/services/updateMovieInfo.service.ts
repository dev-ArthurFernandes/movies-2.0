import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMoviesResponse, IMoviesUpdateRequest } from "../interfaces";
import { moviesResultSchemas } from "../schemas";


const updateMovieInfoService = async (payload: IMoviesUpdateRequest, id: number): Promise<IMoviesResponse> => {

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = await moviesRepository.findOneBy({
        id: id
    })

    const updateMovie = moviesRepository.create({
        ...movie,
        ...payload
    })

    await moviesRepository.save(updateMovie)

    const newMovie = moviesResultSchemas.parse(updateMovie)

    return newMovie
}

export default updateMovieInfoService