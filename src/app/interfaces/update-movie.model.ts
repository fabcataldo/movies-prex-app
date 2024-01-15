import { IMovie } from "./movie.model";

export interface UpdateMovieResponse {
    ok: boolean,
    movie: IMovie
}