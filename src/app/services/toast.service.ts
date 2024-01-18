import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  async presentToast(message: string, color = '', position: 'top' | 'middle' | 'bottom' = 'top', duration = 1500) {
    console.log('entrooo')
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color
    });

    await toast.present();
  }
}
