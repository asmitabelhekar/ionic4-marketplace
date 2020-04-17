import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: any;
  email: any;
  mobile: any;
  roleId: any;
  username: any;
  image: any;
  lattitude: any;
  longitude: any;
  address: any;
  profileDetail : any;
  constructor(public router : Router,
    public networkServices : NetworkService,
    public loader : LoaderService,
    public apiCall : ApiService) { }

  ngOnInit() {

    // this.getProfileInfo();
  }


  getProfileInfo(){
    this.loader.showBlockingLoaderAuth();
    let dealerId = localStorage.getItem('dealerId');
    let url = "http://3.6.135.154:37354/api/v1.0.0/" + "roles/" + 2 + "/users/" + 5;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.name = this.profileDetail.name;
      this.mobile = this.profileDetail.mobile;
      this.email = this.profileDetail.email;
      this.roleId = this.profileDetail.roleId;
      this.username = this.profileDetail.username;
      this.image = this.profileDetail.image;
      this.lattitude = this.profileDetail.latitude;
      this.longitude = this.profileDetail.longitude;
      this.address = this.profileDetail.address + this.profileDetail.city + " " + this.profileDetail.state + " " + this.profileDetail.country + " " + this.profileDetail.pincode;
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
  openChatList(){
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement(){
    this.router.navigate(['/postadvertisement']);
    // this.router.navigate(['/secondpageadvertisement']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  openFavourite(){
    this.router.navigate(['/favourite']);
  }

  openProfile(){
    this.router.navigate(['/profile']);
  }
}
