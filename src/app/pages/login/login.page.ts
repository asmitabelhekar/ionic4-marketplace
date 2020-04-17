import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MenuController, ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide = true;
  loginModel: any = {};
  constructor(public router: Router,
    public toast : ToastController,
    public menuController: MenuController,
    public loader: LoaderService,
    public apiCall: ApiService) {

    this.menuController.enable(false);
  }

  ngOnInit() {
  }
  login(data) {

    this.loader.showBlockingLoaderAuth();
    let send_date = {};


    send_date['mobile'] = this.loginModel.mobile;
    send_date['password'] = this.loginModel.password;

    let url = environment.base_url + environment.version + "users/login";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      localStorage.setItem("userId", MyResponse['result']['id']);
      localStorage.setItem("loginStatus", 'yes');
      localStorage.setItem("userName",MyResponse['result']['name']);
      localStorage.setItem("userCreated",MyResponse['result']['created']);
      this.router.navigate(['/home']);
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.presentToast("Please try again");
      this.loader.hideBlockingLoaderAuth();
      
    })
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
