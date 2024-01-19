import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { IUser } from './interfaces/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user: IUser | null = null;
  constructor(public userService: UserService, private router: Router) {
    debugger;
    this.user = this.userService.getUser();
  }
  
  ngOnInit(): void {
    console.log('this. user app component')
    console.log(this.user)
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  goToChangeAvatarPage() {
    this.router.navigate(['/change-user-avatar'], {replaceUrl: true});
  }
}
