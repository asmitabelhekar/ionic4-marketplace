import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showfilterdata',
  templateUrl: './showfilterdata.page.html',
  styleUrls: ['./showfilterdata.page.scss'],
})
export class ShowfilterdataPage implements OnInit {

  categoryArray: any;

  constructor(public loader: LoaderService,
    public router : Router,
    public apiCall: ApiService
  ) { }

  ngOnInit() {
    this.getCategory();
  }


  getCategory() {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.categoryArray = MyResponse['result']['list'];
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
      })
  }

  goBackword() {
    window.history.back();
  }

  applyFilter(id){
    console.log("get id::"+id);
    this.router.navigate(['/home', { categoryId : id}]);
  }
}
