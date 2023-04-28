import { createMoviesSchemas, moviesResultSchemas,moveisListResult } from '../schemas';
import { z } from 'zod'
import { DeepPartial, Repository } from 'typeorm';
import { Movie } from '../entities';

type IMovie = z.infer<typeof moviesResultSchemas>

type IMoviesRequest = z.infer<typeof createMoviesSchemas>

type IMoviesUpdateRequest = DeepPartial<IMovie>

type IMoviesResponse = z.infer<typeof moviesResultSchemas>

type ArrayMovies = z.infer<typeof moveisListResult>

type iMovieRepo = Repository<Movie>

type iMovieDeepPartial = DeepPartial<Movie>

export {
    IMoviesRequest,
    IMoviesResponse,
    ArrayMovies,
    IMoviesUpdateRequest,
    iMovieRepo,
    iMovieDeepPartial
}