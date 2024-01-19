import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeUserAvatarPageRoutingModule } from './change-user-avatar-routing.module';

import { ChangeUserAvatarPage } from './change-user-avatar.page';
import { GenericPipeModule } from 'src/app/utils/generic-pipe/generic-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ChangeUserAvatarPageRoutingModule,
    GenericPipeModule
  ],
  declarations: [ChangeUserAvatarPage]
})
export class ChangeUserAvatarPageModule {}
