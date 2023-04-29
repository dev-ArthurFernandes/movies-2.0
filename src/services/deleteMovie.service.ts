import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"


const deleteMovieService = async (id: number): Promise<void> => {
    
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = await moviesRepository.findOne({
        where: {
            id: id
        }
    })

    await moviesRepository.remove(movie!)
}

export default deleteMovieService