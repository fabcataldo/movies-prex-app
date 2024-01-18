import { Component, OnInit } from '@angular/core';
import { GetAllMoviesResponse } from 'src/app/interfaces/get-all-movies.model';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies: Array<IMovie> = [];
  enabled = true;

  constructor(private movieService: MovieService) {
    this.getNextMovies();

    console.log('GOT IT')
    console.log(this.movies)
  }

  ngOnInit(): void {
    this.getNextMovies();
  }

  async getNextMovies(event: any = null, pull: boolean = false){
    const response = await this.movieService.getMovies(pull);
    if(response){
      this.movieService.moviesChanged.subscribe((resp => {
        this.movies = resp;
        if(event){
          event.target.complete();
  
          if(resp.length === 0){
            this.enabled = false;
          }
        }
      }))
    }
  }

}
