import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie.model';
import { formatDate } from 'src/app/utils/format-date/format-date';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: IMovie = {};
  formatDate = formatDate;
  constructor(
    public activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const realMovie: any = (this.router.getCurrentNavigation()?.extras?.state??['movie']);
        this.movie = realMovie['movie'] as IMovie;
      }
    });
  }

  goBack() {
    this.router.navigate(['/home'], {replaceUrl: true});
  }

  goToEditMoviePage() {
    this.router.navigate(['/edit-movie'], {state: {movie: this.movie}});
  }
}
