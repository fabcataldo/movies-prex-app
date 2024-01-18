import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IUser } from '../interfaces/user.model';
import { Storage } from '@ionic/storage-angular';
import { GetUserResponse } from '../interfaces/get-user.model';
import { RegisterLoginUserResponse } from '../interfaces/register-login-user.model';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private token = '';
  private user: IUser | null = null;

  constructor(private storage: Storage, private http: HttpClient, private navCtrl: NavController) {
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }

  login(username: string, password: string){
    const data = { username, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/users/login`, data).subscribe(async res => {
        const response = res as RegisterLoginUserResponse;
  
        if(response['ok']){
          await this.saveToken(response['token']);
          this.user = response['user'];
          resolve(true);
        } else {
          this.token = '';
          this.user = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });    
  }

  logout(){
    this.token = '';
    this.user = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

  register(user: IUser){
    return new Promise(resolve => {
      this.http.post(`${URL}/users/create`, user).subscribe(async (res)=>{
        const response = res as RegisterLoginUserResponse;
        if(response['ok']){
          await this.saveToken(response['token']);
          this.user = response['user'];
          resolve(true);
        } else {
          this.token = '';
          this.user = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  getUsuario(): IUser{
    if(this.user?._id !== null){
      this.validateToken();
    }
    return {...this.user} as IUser;
  }

  async saveToken(token: string){
    this.token = token;
    await this.storage.set('token', token);

    await this.validateToken();
  }

  async loadToken(){
    this.token = await this.storage.get('token') || null;
  }

  getToken(): string {
    return this.token;
  }

  async validateToken(): Promise<boolean>{
    await this.loadToken();
    if(!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {
      const headers = new HttpHeaders({
        'x-token': this.token
      });
      this.http.get(`${URL}/users/`, { headers }).subscribe(resp => {
        const response = resp as GetUserResponse;
        if(response['ok'] != null){
          this.user = response['user'];
          resolve(true);
        } else{
          this.navCtrl.navigateRoot('/login');
          resolve(false);
        }
      });
    });
  }
}
