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
  movieChanged = new EventEmitter<IMovie>();

  constructor(private http: HttpClient, private userService: UserService) { }

  getMovies(pull: boolean = false) {
    return this.http.get<GetAllMoviesResponse>(`${URL}/movies/`);
  }

  updateMovie(movie: IMovie) {
    const headers = new HttpHeaders({
      'x-token': this.userService.getToken()
    })
    return new Promise(resolve => {
      this.http.patch(`${URL}/movies`, movie, {headers}).subscribe((resp) => {
        const response = resp as UpdateMovieResponse;
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
