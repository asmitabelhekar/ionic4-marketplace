import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';

@Component({
  selector: 'app-showfilterdata',
  templateUrl: './showfilterdata.page.html',
  styleUrls: ['./showfilterdata.page.scss'],
})
export class ShowfilterdataPage implements OnInit {

  categoryArray: any;
  constructor(public loader: LoaderService,
    public apiCall: ApiService
  ) { }

  ngOnInit() {
    this.getCategory();
  }


  getCategory() {
    this.loader.presentLoading();
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.categoryArray = MyResponse['result']['list'];
      this.loader.stopLoading();
    },
      error => {
        this.loader.stopLoading();
      })
  }

  goBackword() {
    window.history.back();
  }
}
