import { Component } from '@angular/core';
import { IonSlides, MenuController, ToastController, AlertController } from '@ionic/angular';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PopupPage } from '../pages/popup/popup.page';
import { FilterpopupComponent } from '../filterpopup/filterpopup.component';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../service/apiservice/api.service';
import { LoaderService } from '../service/loaderservice/loader.service';
import { NetworkService } from '../service/network/network.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  Languages: any;
  userId: any;
  arrayLength: any;
  countAdvertisement: any;
  bookmarkId: any;
  checkString: string;
  bannerImg: any;
  checkStatus: boolean;
  categoryId = 5;
  categoryName = "Music";
  noInternet = "0";
  displayCategory: any = "5";
  languageImage = "";
  cityName = "";
  currentPage = 0;
  parentArray = [];
  keysObject = [];
  bannerArray = [];
  categoryArray = [];
  advertisementArray = [];
  getBookmarkObj: any = {};
  postBookmarkObj: any = {};
  advertisementModel: any = {};
  lastPage : any;
  firstView = 1;


  constructor(
    public dialog: MatDialog,
    public apiCall: ApiService,
    public toast: ToastController,
    public alertCtrl: AlertController,
    public loader: LoaderService,
    public networkServices: NetworkService,
    public menuController: MenuController,
    public activatedRoute: ActivatedRoute,
    public router: Router)
     {
    this.menuController.enable(false);
    this.getCategory();
    this.getLanguages();
    // this.getBannerData(this.categoryId);
    // this.advertisementArray = [];
    // this.currentPage = 0;
    // this.getAdvertisement(this.categoryId);

  }

  ionViewWillEnter() {
    this.advertisementArray = [];
    let city = localStorage.getItem("cityname");
    if (city == "" || city == "undefined" || city == null) {
      this.cityName = "";
      console.log("city name display undefined:" + city);
    } else {
      this.cityName = city;
      console.log("city name display:" + city);
    }

    var jsonString = localStorage.getItem("BOOKMARK");
    this.postBookmarkObj = JSON.parse(jsonString);
    if (this.postBookmarkObj == null || this.postBookmarkObj == "" || this.postBookmarkObj == undefined) {
      this.postBookmarkObj = {};
    } else {

    }

    console.log("show retrieved object:" + this.postBookmarkObj);
    this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
    if (this.categoryId == undefined) {
      this.categoryId = 5;
      console.log("check ::0");
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(this.categoryId);
    } else {
      if (this.categoryId == 1) {
        this.categoryName = "Dance";
        console.log("check ::1");
      } else if (this.categoryId == 2) {
        this.categoryName = "Yoga";
        console.log("check ::2");
      } else if (this.categoryId == 3) {
        this.categoryName = "Meditation";
        console.log("check ::3");
      } else if (this.categoryId == 4) {
        this.categoryName = "Massage";
        console.log("check ::4");
      } else if (this.categoryId == 5) {
        this.categoryName = "Music";
        console.log("check ::5");
      } else {
        this.categoryName = "Music";
        console.log("check ::6");
      }
      this.checkType(this.categoryName, this.categoryId);
    }
    console.log("get categoryId::" + this.categoryId);
    this.getBannerData(this.categoryId);
   
  }

  getCategory() {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.parentArray = MyResponse['result']['list'];
      for (let i = 0; i < this.parentArray.length; i++) {
        if (this.parentArray[i]['name'] == "Parent Category") {
        } else {
          this.categoryArray.push(this.parentArray[i]);
        }
      }
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

  getAdvertisement(categoryId) {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10";
    this.apiCall.get(url).subscribe(MyResponse => {

      

      this.advertisementArray = this.advertisementArray.concat(MyResponse['result']['list']);
      this.countAdvertisement = MyResponse['result']['count'];
      this.lastPage = Math.ceil(this.countAdvertisement / 10);
      console.log("show total count:"+this.lastPage);
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  viewMore(){
    this.currentPage += 1;
    this.getAdvertisement(this.categoryId);
    // let url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=1";

  }

  getBannerData(categoryId) {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=" + 1000
    this.apiCall.get(url).subscribe(MyResponse => {
      this.bannerArray = MyResponse['result']['list'];
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


  getLanguages() {

    let url = environment.base_url + environment.version + "languages";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.Languages = MyResponse['result']['list'];
      this.languageImage = this.Languages[3]['image'];
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



  filter() {
    this.router.navigate(['/showfilterdata']);
  }
  checkType(title, id) {
    console.log("check title id ::" + title + "   " + "id" + id);
    this.categoryId = id;
    this.displayCategory = id;
    if (title == "Dance") {
      this.getBannerData(id);
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(id);
    } else if (title == "Yoga") {
      this.getBannerData(id);
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(id);
    } else if (title == "Meditation") {
      this.getBannerData(id);
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(id);
    }
    else if (title == "Massage") {
      this.getBannerData(id);
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(id);
    }
    else if (title == "Music") {
      this.getBannerData(id);
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(id);
    }
  }

  async presentPrompt() {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'location',
          placeholder: 'Location'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  showPopup() {
    const dialogRef = this.dialog.open(PopupPage, {
      width: '500px',
    });


    dialogRef.afterClosed().subscribe(async result => {
      console.log("show city name:" + result);
      this.cityName = result;
      if (result == "" || result == "undefined" || result == null) {
        this.cityName = "";
      } else {
        this.cityName = result;
      }
      localStorage.setItem("cityname", this.cityName);
    });
  }

  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    let status = "0";
    localStorage.setItem("postStatus", status);
    this.router.navigate(['/postadvertisement']);

  }

  home() {
    this.router.navigate(['/home']);
  }

  openFavourite() {
    this.router.navigate(['/favourite']);
  }

  openProfile() {
    this.router.navigate(['/profile']);
  }



  showAdvertisementDetail(categoryId, id) {
    let sendId = {
      "id": id,
      "categoryId": categoryId,
      "status": "category",
      "adType": 1
    }

    console.log("send image::" + id);
    this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
  }

  bookmarkAdvertisement(advertisementid) {
    this.checkStatus = this.postBookmarkObj.hasOwnProperty(advertisementid);
    console.log("check for status:" + this.checkStatus);
    if (this.checkStatus) {
      console.log("before delete:" + (this.postBookmarkObj));
      delete this.postBookmarkObj[advertisementid];
      localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
      this.removeBookmark(advertisementid);



      console.log("after delete:" + (this.postBookmarkObj));
    } else {
      this.postBookmarkObj[advertisementid] = true;
      localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
      console.log("display object:" + (this.postBookmarkObj));

      this.loader.showBlockingLoaderAuth();
      let send_date = {};
      this.advertisementModel['userId'] = localStorage.getItem("userId");

      send_date['userId'] = this.advertisementModel['userId'];
      let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
      this.apiCall.post(url, send_date).subscribe(MyResponse => {

        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
    }

  }

  removeBookmark(advertisementId) {
    this.userId = localStorage.getItem("userId");
    let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.advertisementArray = MyResponse['result']['list'];
      for (let i = 0; i < this.advertisementArray.length; i++) {

        console.log("show advertisement id:" + advertisementId);

        if (this.advertisementArray[i]['id'] == advertisementId) {
          console.log("show advertisement bookmark id:" + this.advertisementArray[i]['bookmarkId']);

          this.bookmarkId = this.advertisementArray[i]['bookmarkId'];
          console.log("check ------ bookmark id:" + this.bookmarkId);

        } else {
          console.log("show advertisement bookmark id failure ::" + this.advertisementArray[i]['bookmarkId']);

        }
      }
      console.log("show advertisement bookmark id:" + this.bookmarkId);

      let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks/" + this.bookmarkId;
      this.apiCall.delete(url).subscribe(MyResponse => {

        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
    },
      error => {

      })
  }



  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  notifications() {
    this.router.navigate(['/notificationlist'])
  }

  getLanguage(image) {
    this.languageImage = image;
    console.log("language image show:" + image);
  }
}
