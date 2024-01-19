import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { UserService } from './services/user.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'edit-movie',
    loadChildren: () => import('./pages/edit-movie/edit-movie.module').then( m => m.EditMoviePageModule),
    canActivate: [UserGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'movie-detail',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  },
  {
    path: 'change-user-avatar',
    loadChildren: () => import('./pages/change-user-avatar/change-user-avatar.module').then( m => m.ChangeUserAvatarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicStorageModule.forRoot(), HttpClientModule
  ],
  exports: [RouterModule],
  providers: [UserService]
})
export class AppRoutingModule { }
