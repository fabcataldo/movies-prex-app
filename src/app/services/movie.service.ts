import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { RequestMoviesResponse } from '../interfaces/request-movies-response.model';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { IMovie } from '../interfaces/movie.model';
import { RequestErrorResponse } from '../interfaces/request-error-response.model';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  currentPage = 0;
  movieChanged = new EventEmitter<IMovie>();
  moviesChanged = new EventEmitter<Array<IMovie>>();

  constructor(private http: HttpClient, private userService: UserService) { }

  getMovies(): Promise<RequestMoviesResponse | RequestErrorResponse> {
    return new Promise(resolve => {
      this.http.get<RequestMoviesResponse | RequestErrorResponse>(`${URL}/movies`).subscribe((resp: RequestMoviesResponse | RequestErrorResponse) => {
        resolve(resp);
      });
    })
  }

  updateMovie(movie: IMovie): Promise<RequestMoviesResponse | RequestErrorResponse> {
    return new Promise(resolve => {
      this.http.patch<RequestMoviesResponse | RequestErrorResponse>(`${URL}/movies/${movie._id}`, movie).subscribe((resp) => {
        resolve(resp);
      });  
    });
  }
}
