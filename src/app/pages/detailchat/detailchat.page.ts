import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailchat',
  templateUrl: './detailchat.page.html',
  styleUrls: ['./detailchat.page.scss'],
})
export class DetailchatPage implements OnInit {


  chatModel : any = {};
  chatArray = [
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hey there Robert, How can i help you today?",
      "time" : "2 minutes ago"
    },
    {
      "type":"2",
      "message" : "Hey Eugene, I think I left one of the book in my room",
      "time" : "2 minutes ago"
    },
    {
      "type":"1",
      "message" : "Hi how r you??",
      "time" : "2 minutes ago"
    }
  ];
  name : any;
  constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.name = this.activatedRoute.snapshot.params['name'];
  }


  goBackword(){
    window.history.back();
  }

  sendMessage(message){
    let obj = {
      "type":"2",
      "message" : message.message,
      "time" : "Now"
    }

    this.chatArray.push(obj);
    this.chatModel['message']= "" ;
  }
}
