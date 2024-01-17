import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMoviePageRoutingModule } from './edit-movie-routing.module';

import { EditMoviePage } from './edit-movie.page';
import { MovieStarRateComponent } from './components/movie-star-rate/movie-star-rate.component';
import { GenericPipe } from 'src/app/utils/generic-pipe/generic-pipe.pipe';
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
