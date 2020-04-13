import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide = true;
  loginModel: any = {};
  constructor(public router: Router,
    public menuController : MenuController,
    public apiCall: ApiService) { 

      this.menuController.enable(false);
    }

  ngOnInit() {
  }
  login(data) {


    let send_date = {};


    send_date['mobile'] = this.loginModel.mobile;
    send_date['password'] = this.loginModel.password;

    let url = environment.base_url + environment.version + "users/login";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      localStorage.setItem("userId", MyResponse['result']['id']);
      localStorage.setItem("loginStatus",'yes');
      this.router.navigate(['/home']);

    }, error => {
    })
  }
}
