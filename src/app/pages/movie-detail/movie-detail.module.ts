import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';
import { MovieStarRateModule } from '../edit-movie/components/movie-star-rate/movie-star-rate.module';
import { GenericPipeModule } from 'src/app/utils/generic-pipe/generic-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule,
    MovieStarRateModule,
    GenericPipeModule
  ],
  declarations: [MovieDetailPage]
})
export class MovieDetailPageModule {}
