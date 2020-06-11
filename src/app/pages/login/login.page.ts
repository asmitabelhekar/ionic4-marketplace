import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FacebookModule, FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  hide = true;
  loginModel: any = {};
  loginDetails: any;

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(public router: Router,
    public toast: ToastController,
    public menuController: MenuController,
    public loader: LoaderService,
    private fb: FacebookService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    public nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    public apiCall: ApiService) {

    this.menuController.enable(false);

    // let initParams: InitParams = {
    //   appId: '293072848530685',
    //   xfbml: true,
    //   version: 'v2.8'
    // };

    // fb.init(initParams);

    facebook.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));

  }

  ngOnInit() {
  }


  fbLogin() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));

    // this.fb.login()
    // .then((response: LoginResponse) => alert("show data:"+response))
    // .catch((error: any) => alert(error));
  }

  getUserDetail(userid: any) {
    this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        this.router.navigate(['/home']);
        console.log("show details:"+res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }


  fbLogout() {
    this.fb.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
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
      localStorage.setItem("userRole", MyResponse['result']['userRole']);
      localStorage.setItem("userName", MyResponse['result']['name']);
      localStorage.setItem("userCreated", MyResponse['result']['created']);
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

  // fblogin(){
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  // .then((res: FacebookLoginResponse) => alert('Logged into Facebook!'+res))
  // .catch(e => alert('Error logging into Facebook'+e));


  // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  // }


  loginWithGmail() {
    this.googlePlus.login({})
      .then((res) => {
        this.loginDetails = res;
        localStorage.setItem("gmailData", JSON.stringify(this.loginDetails));
        this.router.navigate(['/home']);
        // alert("show details:"+JSON.stringify(this.loginDetails));
      }, (err) => {

      })
  }

  logOut() {
    this.googlePlus.logout();
    alert("logged out");
  }


}


