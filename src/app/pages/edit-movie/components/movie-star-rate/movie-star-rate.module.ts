import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStarRateComponent } from './movie-star-rate.component';
import { IonicModule } from '@ionic/angular';
import { GenericPipeModule } from 'src/app/utils/generic-pipe/generic-pipe.module';



@NgModule({
  declarations: [MovieStarRateComponent],
  imports: [
    CommonModule,
    IonicModule,
    GenericPipeModule
  ],
  exports: [
    MovieStarRateComponent
  ]
})
export class MovieStarRateModule { }
