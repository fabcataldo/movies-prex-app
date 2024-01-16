import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit() {}

  goToEditMovie(movie: IMovie) {
    this.router.navigate(['/edit-movie'], {state: {movie}});
  }

}
