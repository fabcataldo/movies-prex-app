import { IMovie } from "./movie.model";

export interface RequestMoviesResponse {
    ok: boolean
    movies: Array<IMovie>
}