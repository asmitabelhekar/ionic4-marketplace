import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(public router: Router) { }

  ngOnInit() {
  }


  detailChat(name) {
    this.router.navigate(['/detailchat', { name: name }])
  }

}
