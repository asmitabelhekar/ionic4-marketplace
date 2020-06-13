import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  loginType: any;
  noInternet = 1;
  name: any;
  email: any;
  updateStatus = 0;
  mobile: any;
  roleId: any;
  username: any;
  image: any;
  userId: any;
  lattitude: any;
  longitude: any;
  address: any;
  loginUserId : any;
  profileDetail: any;
  isLoggedIn = false;

  constructor(
    public router: Router,
    public networkServices: NetworkService,
    public activatedRoute: ActivatedRoute,
    public loader: LoaderService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    public menuController: MenuController,
    public apiCall: ApiService
    ) {
    this.menuController.enable(false);
  }

  ngOnInit() {
    // this.userId = this.activatedRoute.snapshot.params['userId'];
    // console.log("user id:" + this.userId);
    // this.getProfileInfo();
    // this.getCountryCode();
  }

  ionViewWillEnter(){
    this.userId = this.activatedRoute.snapshot.params['userId'];
    console.log("user id:" + this.userId);
    this.loginType = localStorage.getItem("loginType");
    // if (this.userId == undefined || this.userId == "" || this.userId == null) {
    //   this.userId = localStorage.getItem('userId');
    //   this.updateStatus = 0;
    // } else {
    //   this.updateStatus = 1;
    // }

    this.getProfileInfo();
  }
  getCountryCode() {
    let url = "https://www.universal-tutorial.com/api/countries";
    this.apiCall.get(url).subscribe(MyResponse => {
      console.log("display::" + MyResponse);
    },
      error => {
        console.log("display::" + error);
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      });

  }

  getProfileInfo() {
    this.loader.showBlockingLoaderAuth();
    this.noInternet = 1;
    if (this.userId == undefined || this.userId == "" || this.userId == null) {
      this.userId = localStorage.getItem('userId');
      // this.updateStatus = 0;
    } else {
      // this.updateStatus = 1;
    }
    this.loginUserId = localStorage.getItem('userId');
    if(this.loginUserId == this.userId){
      this.updateStatus = 0;
      console.log("match id:");
    }else{
      this.updateStatus = 1;
      console.log("id not match");
    }
    let url = environment.base_url + environment.version + "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.name = this.profileDetail.name;
      localStorage.setItem("getName",this.name);
      this.mobile = this.profileDetail.mobile;
      this.email = this.profileDetail.email;
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.noInternet = 0;
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    let status = "0";
    localStorage.setItem("postStatus", status);
    this.router.navigate(['/newadvertisementform']);
    // this.router.navigate(['/secondpageadvertisement']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  openFavourite() {
    this.router.navigate(['/favourite']);
  }

  openProfile() {
    this.router.navigate(['/profile']);
  }

  logOut() {

    if(this.loginType == "fb"){
      this.facebook.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
      localStorage.clear();
      this.router.navigate(['/login']);
      localStorage.setItem("loginStatus", "no");

    }else if(this.loginType == "gmail"){
      this.googlePlus.logout();
      localStorage.clear();
      this.router.navigate(['/login']);
      localStorage.setItem("loginStatus", "no");
    }else{
      localStorage.clear();
      this.router.navigate(['/login']);
      localStorage.setItem("loginStatus", "no");
    }

   
  }
  goBackword(){
    window.history.back();
  }

  updateProfile(){
    let profileData = {
      "name" : this.name,
      "email" : this.email,
      "mobile" : this.mobile
    }
    this.router.navigate(['/updateprofile', { profileData : JSON.stringify(this.profileDetail)}]);
  }
}

