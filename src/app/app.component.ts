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
  constructor(public userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    this.user = this.userService.getUsuario();
  }


  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], {replaceUrl: true});
  }
}
