import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { RequestErrorResponse } from 'src/app/interfaces/request-error-response.model';
import { RequestMoviesResponse } from 'src/app/interfaces/request-movies-response.model';
import { MovieService } from 'src/app/services/movie.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies: Array<IMovie> = [];

  constructor(
    private movieService: MovieService,
    private toastService: ToastService
  ) {
    this.getNextMovies(null);
  }

  ngOnInit(): void {
    this.getNextMovies(null);
  }

  async getNextMovies(event: CustomEvent | null){
    this.movieService.getMovies().then(resp => {
      if(resp.ok){
        this.movies = (resp as RequestMoviesResponse).movies as IMovie[];
        if(event){
          event.detail.complete();
        }
      } else {
        console.log((resp as RequestErrorResponse).error);
        this.toastService.presentToast('Something went wrong', 'danger');
      }
    });
  }

  
  reload(event: CustomEvent){
    this.getNextMovies(event);
    this.movies = [];
  }
}
