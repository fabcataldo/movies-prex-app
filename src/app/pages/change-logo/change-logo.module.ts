import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeLogoPageRoutingModule } from './change-logo-routing.module';

import { ChangeLogoPage } from './change-logo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeLogoPageRoutingModule
  ],
  declarations: [ChangeLogoPage]
})
export class ChangeLogoPageModule {}
