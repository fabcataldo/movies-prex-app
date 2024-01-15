import { IMovie } from "./movie.model";

export interface GetAllMoviesResponse {
    ok: boolean
    movies: Array<IMovie>
}