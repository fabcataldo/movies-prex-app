import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
    if(!this.validateLoginForm(formLogin)){
      return;
    }

    const isLoginSuccess = await this.userService.login(this.loginUser.username, this.loginUser.password);
    if(isLoginSuccess){
      this.navCtrl.navigateRoot('/home', {animated: true, replaceUrl: true});
    } else {
      this.toastService.presentToast('Wrong username/password', 'danger');
    }
  }

  goToLogoChange() {
    this.navCtrl.navigateRoot('/change-user-logo', {animated: true, replaceUrl: true});
  }

  goToRegisterPage(){
    this.navCtrl.navigateRoot('/register', {animated: true, replaceUrl: true});
  }

  validateLoginForm(formLogin: NgForm) {
    if (formLogin.form.controls['username'].errors?.['required']){
      this.toastService.presentToast('Username is mandatory', 'tertiary');
      return false;
    } else if (formLogin.form.controls['password'].errors?.['required']){
      this.toastService.presentToast('Password is mandatory', 'tertiary');
      return false;
    } else {
      return true;
    }
  }

}
