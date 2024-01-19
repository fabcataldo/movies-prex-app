import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMoviePageRoutingModule } from './edit-movie-routing.module';

import { EditMoviePage } from './edit-movie.page';
import { MovieStarRateModule } from './components/movie-star-rate/movie-star-rate.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMoviePageRoutingModule,
    MovieStarRateModule
  ],
  declarations: [EditMoviePage]
})
export class EditMoviePageModule {}
