import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.page.html',
  styleUrls: ['./notificationlist.page.scss'],
})
export class NotificationlistPage implements OnInit {

  price: any = '100';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.price = this.route.snapshot.params['price'];
  }

}
