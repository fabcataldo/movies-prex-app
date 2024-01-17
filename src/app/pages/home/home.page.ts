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
    debugger;
    this.getNextMovies();

    console.log('GOT IT')
    console.log(this.movies)
  }

  ngOnInit(): void {
    // this.getNextMovies();
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
    // this.movieService.getMovies(pull).then((resp: Array<IMovie> | boolean)=>{
    //   debugger;
    //   console.log('resppp')
    //   console.log(resp);
    //   if(typeof(resp) !== 'boolean'){
    //     this.movies.push(...resp);

    //     console.log('this.movies home page')
    //     console.log(this.movies)
    //     if(event){
    //       event.target.complete();
  
    //       if(resp.length === 0){
    //         this.enabled = false;
    //       }
    //     }
    //   }
    // }).catch(err => {
    //   console.log('GET ALL MOVIES ERROR: '+err);
    // });
  }

  reload(event: any){
    console.log('entro')
    this.getNextMovies(event, true);
    this.enabled = true;
    this.movies = [];
  }

}
