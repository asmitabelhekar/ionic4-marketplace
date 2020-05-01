import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

  userId : any;
  noInternet  = "0";
  usersArray = [];
  chatListArray = [
    {
      "image": "",
      "name": "Asmita Belhekar"
    },
    {
      "image": "",
      "name": "Smita Belhekar"
    },
    {
      "image": "",
      "name": "Pranil Belhekar"
    },
    {
      "image": "",
      "name": "Suman Belhekar"
    },
    {
      "image": "",
      "name": "Asmita Belhekar"
    }, {
      "image": "",
      "name": "Asmita Belhekar"
    }
  ];
  constructor(public router: Router,
    public loader : LoaderService,
    public apiCall : ApiService,
    public networkServices : NetworkService,
    public menuController : MenuController) { 
      this.menuController.enable(false);
      this.userId = localStorage.getItem("userId");
    }

  ngOnInit() {
    this.getUsers();
    this.userId = localStorage.getItem("userId");
  }

  ionViewWillEnter(){
    this.userId = localStorage.getItem("userId");
    console.log("get userId:"+this.userId);
    this.getUsers();

    console.log("show page : Chat List");
  }

  detailChat(name, id) {
    let userDetail = {
      "name" : name,
      "id" : id
    }
    this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
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

  getUsers(){
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version  +"users/" + this.userId + "/chat-users";
    this.apiCall.get(url).subscribe(MyResponse => {
     this.usersArray = MyResponse['result']['list'];
     console.log("show users:"+this.usersArray);
     this.loader.hideBlockingLoaderAuth();
     this.noInternet = '0';
    },
      error => {
        this.noInternet = '1';
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

}
