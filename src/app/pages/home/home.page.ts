import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies: Array<IMovie> = [];
  enabled = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getNextMovies();
  }

  getNextMovies(event: any = null, pull: boolean = false){
    this.movieService.getMovies(pull).subscribe(resp=>{
      console.log(resp);
      this.movies.push(...resp.movies);

      if(event){
        event.target.complete();

        if(resp.movies.length === 0){
          this.enabled = false;
        }

      }
    });
  }

  reload(event: any){
    this.getNextMovies(event, true);
    this.enabled = true;
    this.movies = [];
  }

}
