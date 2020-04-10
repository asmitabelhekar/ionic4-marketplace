import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

 

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, );
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);
  
  }
  
  async stopLoading(){
    this.loadingController.dismiss();
  }
  }
  