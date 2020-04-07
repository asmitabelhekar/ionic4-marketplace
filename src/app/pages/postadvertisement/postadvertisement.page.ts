import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-postadvertisement',
  templateUrl: './postadvertisement.page.html',
  styleUrls: ['./postadvertisement.page.scss'],
})
export class PostadvertisementPage implements OnInit {

  myControl = new FormControl();
  advertisementModel : any = {};
  constructor() { }

  ngOnInit() {
  }

}
