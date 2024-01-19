import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieStarRateModule } from 'src/app/pages/edit-movie/components/movie-star-rate/movie-star-rate.module';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    IonicModule,
    MovieStarRateModule
  ],
  exports: [
    MoviesListComponent
  ]
})
export class MoviesListModule { }
