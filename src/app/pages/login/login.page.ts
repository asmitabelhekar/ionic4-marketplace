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
import { JsonPipe } from '@angular/common';
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
  gmailId : any = "";
  fbId : any = "";
  userName : any;
  userEmail : any;
  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(public router: Router,
    public toast: ToastController,
    public menuController: MenuController,
    public loader: LoaderService,
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
    this.router.navigate(['/home']);
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.isLoggedIn = true;
          localStorage.setItem("loginType","fb");
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));

  }

  getUserDetail(userid: any) {
    this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        // this.router.navigate(['/home']);
      
        this.users = res;
        console.log("show detail:"+JSON.stringify(this.users));
        this.gmailId = "";
        this.fbId = res.id;
        this.userName = res.name;
        this.userEmail = res.email;
      this.login();
      })
      .catch(e => {
        console.log(e);
      });
  }


  fbLogout() {
    this.facebook.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }




  login() {

    this.loader.showBlockingLoaderAuth();
    let send_date = {};


    send_date['name'] = this.userName;
    // send_date['mobile'] = this.loginModel.mobile;
    send_date['userRole'] = 0;
    send_date['email'] = this.userEmail;
    if(this.gmailId != ""){
      send_date['gmailId'] = this.gmailId;
    }

    if(this.fbId != ""){
      send_date['facebookId'] = this.fbId;
    }

    let url = environment.base_url + environment.version + "users";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      if(MyResponse['result']['isActive'] == 1){
        localStorage.setItem("userId", MyResponse['result']['id']);
        localStorage.setItem("loginType","email");
        localStorage.setItem("loginStatus", 'yes');
        localStorage.setItem("authToken",MyResponse['result']['jwt-token']);
        localStorage.setItem("userRole", MyResponse['result']['userRole']);
        localStorage.setItem("userName", MyResponse['result']['name']);
        localStorage.setItem("userCreated", MyResponse['result']['created']);
        this.router.navigate(['/home']);
        console.log("show login token:"+MyResponse['result']['jwt-token']);
      }else{
        this.presentToast("Please try again");
      }
     
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


  loginWithGmail() {
    this.googlePlus.login({})
      .then((res) => {
        this.loginDetails = res;
        console.log("show gmail login detail:"+JSON.stringify(this.loginDetails));
        localStorage.setItem("profileImage",res.imageUrl);
        this.gmailId = res.userId;
        this.fbId="";
        this.userName = res.displayName;
        this.userEmail = res.email;
       this.login();
      }, (err) => {

      })
  }

  logOut() {
    this.googlePlus.logout();
    alert("logged out");
  }


}


