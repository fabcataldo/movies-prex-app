import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultAvatar } from 'src/app/interfaces/default-avatar.model';
import { RequestErrorResponse } from 'src/app/interfaces/request-error-response.model';
import { IUser } from 'src/app/interfaces/user.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
import { defaultAvatars } from 'src/app/utils/consts/defaultAvatars';

@Component({
  selector: 'app-change-user-avatar',
  templateUrl: './change-user-avatar.page.html',
  styleUrls: ['./change-user-avatar.page.scss'],
})
export class ChangeUserAvatarPage implements OnInit {
  defaultAvatars = defaultAvatars;
  avatarSelected: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.avatarSelected = this.userService.getUser().avatar;
    console.log('this.avatarSelected')
    console.log(this.avatarSelected)
  }

  selectAvatar(avatar: string) {
    this.avatarSelected = avatar;
  }

  async saveAvatar() {
    const response = await this.userService.updateUserAvatar(this.userService.getUser()._id, this.avatarSelected);
    if(response['ok']){
      this.userService.setUser({...this.userService.getUser(), avatar: this.avatarSelected});

      this.toastService.presentToast('User avatar changed.', 'success');
      this.router.navigate(['/home'], {replaceUrl: true});
      
    } else {
      this.toastService.presentToast('Something went wrong', 'danger');
    }
  }
}
