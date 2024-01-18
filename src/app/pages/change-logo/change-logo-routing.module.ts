import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeLogoPage } from './change-logo.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeLogoPageRoutingModule {}
