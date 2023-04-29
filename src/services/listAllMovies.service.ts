import { AppDataSource } from '../data-source'
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { moveisListResult } from '../schemas';

const listAllMoviesService = async (payload: any): Promise<any> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    let order: string = payload.order? String(payload.order) : "ASC"
    let sort: string = payload.sort? String(payload.sort) : "id"

    if(!payload.sort){
        order = "ASC"
    }else if(payload.sort !== "duration" && payload.sort !== "price"){
        sort = "id"
    }

    let perPage: number = isNaN(payload.perPage)? 5 : Number(payload.perPage)
    let page: number = isNaN(payload.page)? 1 : Number(payload.page)

    const count = await movieRepository.count()

    if(page <= 0){
        page = 1
    }

    if(perPage > 5 || perPage < 1){
        perPage = 5
    }

    let nextPage: string | null = `http://localhost:3000/movies?page=${page+1}&perPage=${perPage}`

    let prevPage: string | null = `http://localhost:3000/movies?page=${page-1}&perPage=${perPage}`

    if(page <= 1){
        prevPage = null
    }
    
    if(page === 3 || page === 4){
        nextPage = null
    }

    const setOrder = Object.fromEntries([[sort, order]])

    const findMovies = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: setOrder
    })

    const movies = moveisListResult.parse(findMovies)

    return({
        prevPage: prevPage,
        nextPage: nextPage,
        count: count,
        data: movies
    })
}

export default listAllMoviesService

