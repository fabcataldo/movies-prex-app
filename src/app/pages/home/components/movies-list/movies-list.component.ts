import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IMovie } from 'src/app/interfaces/movie.model';


@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent  implements OnInit {
  @Input() movies: Array<IMovie> = [];

  constructor(private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    const movieSanitized = this.movies.map(movie => 
        ({...movie, cover: this.sanitizer.bypassSecurityTrustResourceUrl(movie.cover || '')})
    )
    this.movies = movieSanitized as Array<IMovie>;
  }

  goToEditMovie(movie: any) {
    this.router.navigate(['/edit-movie'], {state: {movie}});
  }

  goToDetailsPage(movie: any){
    this.router.navigate(['/movie-detail'], {state: {movie}});
  }

}
