import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentlogs',
  templateUrl: './paymentlogs.page.html',
  styleUrls: ['./paymentlogs.page.scss'],
})
export class PaymentlogsPage implements OnInit {


  paymentLogsArray: any;
  logsCount: any;
  constructor(
    public apiCall: ApiService,
    public router: Router,
    public networkServices: NetworkService,
  ) { }

  ngOnInit() {
    this.getPaymentLogs();
  }


  goBackword() {
    window.history.back();
  }


  getPaymentLogs() {
    // this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "payment-gateway-logs";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.paymentLogsArray = MyResponse['result']['list'];
      this.logsCount = MyResponse['result']['count'];
      console.log("show payment logs:" + JSON.stringify(this.paymentLogsArray));
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
}
