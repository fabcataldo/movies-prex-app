import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {
  movieToEdit: IMovie = {};

  movieForSaving: IMovie = {
    releaseDate: new Date().toISOString(),
    rate: this.movieToEdit.rate,
    cover: this.movieToEdit.cover,
    title: this.movieToEdit.title,
    description: this.movieToEdit.description
  }

  constructor(
    private movieService: MovieService,
    private navCtrl: NavController,
    private toastService: ToastService,
    public activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.movieToEdit = this.router.getCurrentNavigation()?.extras?.state??['movie'] as IMovie;
      }
    });
  }

  onMovieRateChange(newRate: number) {
    this.movieForSaving.rate = newRate;
  }

}
