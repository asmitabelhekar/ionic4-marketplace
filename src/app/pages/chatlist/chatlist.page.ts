import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {


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
    public menuController : MenuController) { 
      this.menuController.enable(true);
    }

  ngOnInit() {
  }


  detailChat(name) {
    this.router.navigate(['/detailchat', { name: name }])
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
