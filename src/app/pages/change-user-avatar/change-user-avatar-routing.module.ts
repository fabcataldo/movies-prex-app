import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUserAvatarPage } from './change-user-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeUserAvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeUserAvatarPageRoutingModule {}
