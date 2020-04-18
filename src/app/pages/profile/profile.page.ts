import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';

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
  userId: any;
  lattitude: any;
  longitude: any;
  address: any;
  profileDetail: any;
  constructor(public router: Router,
    public networkServices: NetworkService,
    public activatedRoute: ActivatedRoute,
    public loader: LoaderService,
    public apiCall: ApiService) { }

  ngOnInit() {

    this.getProfileInfo();
    this.userId = this.activatedRoute.snapshot.params['userId'];
  }


  getProfileInfo() {
    this.loader.showBlockingLoaderAuth();
    if (this.userId == undefined || this.userId == "" || this.userId == null) {
      this.userId = localStorage.getItem('userId');
    } else {
     
    }
    let url = environment.base_url + environment.version + "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.name = this.profileDetail.name;
      this.mobile = this.profileDetail.mobile;
      this.email = this.profileDetail.email;
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    this.router.navigate(['/postadvertisement']);
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
}
