import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showfilterdata',
  templateUrl: './showfilterdata.page.html',
  styleUrls: ['./showfilterdata.page.scss'],
})
export class ShowfilterdataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBackword(){
    window.history.back();
  }
}
