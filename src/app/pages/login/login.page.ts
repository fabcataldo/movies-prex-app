import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IUser } from 'src/app/interfaces/user.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  loginUser = {
    username: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private toastService: ToastService
  ) { }

  async login(formLogin: NgForm){
    if(formLogin.invalid){
      return;
    }

    const valido = await this.userService.login(this.loginUser.username, this.loginUser.password);
    if(valido){
      this.navCtrl.navigateRoot('/home', {animated: true});
    } else {
      this.toastService.presentToast('Usuario y/o contraseña no son correctos.');
    }
  }

}
