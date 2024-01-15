import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IUser } from '../interfaces/user.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token = '';
  private user: IUser | null = null;

  constructor(private storage: Storage, private http: HttpClient, private navCtrl: NavController) {
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }

  login(email: string, password: string){
    const data = { email, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/user/login`, data).subscribe(async res => {
        console.log(res);
  
        if(res['ok']){
          await this.saveToken(res['token']);
          this.user = res['user'];
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
      this.http.post(`${URL}/user/create`, user).subscribe(async res=>{
        console.log(res);

        if(res['ok']){
          await this.saveToken(res['token']);
          this.user = res['user'];
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

  getUsuario(){
    if(this.user?._id !== null){
      this.validateToken();
    }
    return {...this.user};
  }

  async saveToken(token: string){
    this.token = token;
    await this.storage.set('token', token);

    await this.validateToken();
  }

  async loadToken(){
    this.token = await this.storage.get('token') || null;
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
      this.http.get(`${URL}/user/`, { headers }).subscribe(resp => {
        if(resp['ok'] != null){
          this.user = resp['user'];
          resolve(true);
        } else{
          this.navCtrl.navigateRoot('/login');
          resolve(false);
        }
      });
    });
  }
}
