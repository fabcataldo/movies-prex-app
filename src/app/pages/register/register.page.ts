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
    _id: '',
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
    if(!this.validateForm(formReg)){
      return;
    } 

    const ok = await this.userService.register(this.registerUser);
    if(ok){
      this.navCtrl.navigateRoot('/home', {animated: true});
    } else {
      this.toastService.presentToast('El correo electrónico ya existe.');
    }
  }

  validateForm(formReg: NgForm) {
    if (formReg.form.controls['email'].errors?.['required']){
      this.toastService.presentToast('Email is mandatory.', 'tertiary', 'top');
      return false;
    } else if(formReg.form.controls['username'].errors?.['required']){
      this.toastService.presentToast('Username is mandatory', 'tertiary');
      return false;
    } else if(formReg.form.controls['username'].errors?.['minlength']){
      this.toastService.presentToast('username has to have at least 4 chracters', 'tertiary');
      return false;
    } else if (formReg.form.controls['password'].errors?.['required']){
      this.toastService.presentToast('Password is mandatory', 'tertiary');
      return false;
    } else if(formReg.form.controls['password'].errors?.['minlength']){
      this.toastService.presentToast('Password has to have at least 6 chracters', 'tertiary');
      return false;
    } else {
      return true;
    }
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login', {animated: true});
  }
}
