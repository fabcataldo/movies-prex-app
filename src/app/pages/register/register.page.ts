import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IUser } from 'src/app/interfaces/user.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  registerUser: IUser = {
    email: '',
    password: '',
    username: '',
    avatar: ''
  }

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private toastService: ToastService
  ) { }

  async register(formReg: NgForm){
    if(formReg.invalid){
      return;
    }

    const ok = await this.userService.register(this.registerUser);
    if(ok){
      this.navCtrl.navigateRoot('/home', {animated: true});
    } else {
      this.toastService.presentToast('El correo electrónico ya existe.');
    }
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login', {animated: true});
  }
}
