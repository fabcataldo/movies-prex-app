import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { GetAllMoviesResponse } from '../interfaces/get-all-movies.model';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { IMovie } from '../interfaces/movie.model';
import { UpdateMovieResponse } from '../interfaces/update-movie.model';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  moviePage = 0;
  movieChanged = new EventEmitter<IMovie>();
  moviesChanged = new EventEmitter<Array<IMovie>>();

  constructor(private http: HttpClient, private userService: UserService) { }

  getMovies(pull: boolean = false): Promise<boolean> {
    if (pull) {
      this.moviePage = 0;
    }
    this.moviePage++;
    return new Promise(resolve => {
      this.http.get<GetAllMoviesResponse>(`${URL}/movies`).subscribe((resp) => {
        const response = resp as GetAllMoviesResponse;
        if(response['ok']){
          this.moviesChanged.emit(response.movies);
          resolve(true);
        } else {
          resolve(false)
        }
      });
    })
  }

  updateMovie(movie: IMovie) {
    console.log('movie update movie')
    console.log(movie)
    return new Promise(resolve => {
      this.http.patch(`${URL}/movies/${movie._id}`, movie).subscribe((resp) => {
        const response = resp as UpdateMovieResponse;
        console.log('response')
        console.log(response)
        if(response['ok']){
          this.movieChanged.emit(response['movie']);
          resolve(true);
        } else {
          resolve(false);
        }
      });  
    });
  }
}
