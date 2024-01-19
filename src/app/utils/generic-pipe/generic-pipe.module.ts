import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericPipe } from './generic-pipe.pipe';



@NgModule({
  declarations: [GenericPipe],
  imports: [
    CommonModule
  ],
  exports: [
    GenericPipe
  ]
})
export class GenericPipeModule { }
