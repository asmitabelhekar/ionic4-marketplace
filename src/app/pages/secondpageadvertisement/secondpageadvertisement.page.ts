import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment'
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-secondpageadvertisement',
  templateUrl: './secondpageadvertisement.page.html',
  styleUrls: ['./secondpageadvertisement.page.scss'],
})
export class SecondpageadvertisementPage implements OnInit {
  getData: any;
  fileToUpload: any;
  profilePic: any;
  usersId: any;
  imageUrl = 1;
  urls = [];
  defaultValue  = "7";
  submitAdvertisementData
  advertisementModel: any = {};
  fromDateTimestamp: number = 0;
  fromDateTimeAd : number = 0;
  toDateTimestamp: number = 0;
  toDateTimeAd: number = 0;
  endDate : any;
  endAdvertisementDate : any;
  selectedWeek : any
  selectedAdvertisementWeek : any;
  finalCalculation : any;
  bannerImage : any;
  totalCalculation: any;
  weeksArray = ["1","2","3","4","5"];
  todayDate : any;
  checkBoostStatus = '0';
  updateBoost : any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loader : LoaderService,
    public toast : ToastController,
    public apiCall: ApiService) { 
     this.selectedWeek = '1';
    }

    
  ngOnInit() {
    this.todayDate = new Date();
    this.advertisementModel['noofweek'] = "1";
    this.selectedWeek = '1';
    this.selectNoOfWeeksType(1);
    localStorage.setItem("boostStatus",'0');
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['FinalObject']);
    this.bannerImage = this.getData.images[0];
  }

  ionViewWillEnter(){

    this.selectAdvertisementNoOfWeeksType(1);
  }
 

  goBackword() {
    window.history.back();
  }


  toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
   }
  // submmitAdvertisementData(dat) {
  // this.fromDateTimestamp = this.toTimestamp(this.todayDate);
  // this.toDateTimestamp = this.toTimestamp(this.endDate);
  // alert("from date::"+this.fromDateTimestamp+ "to date:" +this.toDateTimestamp);
    
  // }

  selectAdvertisementNoOfWeeksType(type){
    this.selectedAdvertisementWeek = type;
    this.endAdvertisementDate = moment(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY');

    let startDateTime = this.toTimestamp(this.todayDate);
    let endDateTime = this.toTimestamp(this.endAdvertisementDate);
    this.fromDateTimeAd = startDateTime;
    this.toDateTimeAd = endDateTime;

    console.log("show next date:"+moment(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY'));
  }

  selectNoOfWeeksType(data){
    this.selectedWeek = data;
   
    localStorage.setItem("boostStatus",'0');
    this.checkBoostStatus = localStorage.getItem("boostStatus");
  
    this.finalCalculation = 7 + ((data - 1) * 5);
    this.totalCalculation = this.finalCalculation;
    this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

    let startDateTimeStamp = this.toTimestamp(this.todayDate);
    let endDateTimeStamp = this.toTimestamp(this.endDate);
    this.fromDateTimestamp = startDateTimeStamp;
    this.toDateTimestamp = endDateTimeStamp;

    console.log("show next date:"+moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  }

  calculateFinal(){
   this.checkBoostStatus = localStorage.getItem("boostStatus");
   if(this.checkBoostStatus == '0'){
     this.checkBoostStatus = '1';
    this.totalCalculation = this.finalCalculation + 100;
    localStorage.setItem("boostStatus",'1');
    this.updateBoost = localStorage.getItem("bannerId");
    // if(this.updateBoost == undefined || this.updateBoost == "" || this.updateBoost == null){
    //   this.postBanner(this.getData.categoryId);
    // }else{
    // this.updateBanner(this.getData.categoryId);
    // }
   }else{
     this.checkBoostStatus = '0';
    this.totalCalculation = this.totalCalculation - 100;
    localStorage.setItem("boostStatus",'0');
   }
  }

  postBanner(id){
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = "Banner";
    send_date['description'] = "New";
    send_date['startDateTime'] = this.fromDateTimestamp;
    send_date['endDateTime'] = this.toDateTimestamp;
    send_date['lat'] = this.getData.lattitude;
    send_date['lng'] = this.getData.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.getData.address;

    let url = environment.base_url + environment.version + "category/" + id + "/banners";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      localStorage.setItem("bannerId",MyResponse['result']['id']);

      // this.presentToast(MyResponse);
    this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
      // this.presentToast("Please try again.")
    });

  }

  updateBanner(id){
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = "Banner";
    send_date['description'] = "New";
    send_date['startDateTime'] = this.fromDateTimestamp;
    send_date['endDateTime'] = this.toDateTimestamp;
    send_date['lat'] = this.getData.lattitude;
    send_date['lng'] = this.getData.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.getData.address;
    let getBannerId = localStorage.getItem("bannerId");
    let url = environment.base_url + environment.version + "category/" + id + "/banners/" + getBannerId;
    this.apiCall.put(url, send_date).subscribe(MyResponse => {
      // this.presentToast(MyResponse);
    this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
      // this.presentToast("Please try again.")
    });

  }
  submmitAdvertisementData(data){
  
    this.loader.showBlockingLoaderAuth();
    
        if(this.toDateTimestamp == undefined || this.toDateTimestamp == null || this.toDateTimestamp == NaN){
          this.presentToast("Please select weeks");
        }else{
          if(this.fromDateTimestamp == undefined || this.fromDateTimestamp == null ){
            this.presentToast("Please select weeks");
          }else{
            this.submitAdvertisementData = {
              "title" : this.getData.title,
              "description" : this.getData.description,
              "price" : this.getData.price,
              "lattitude" : this.getData.lattitude,
              "longitude" : this.getData.longitude,
              "address" : this.getData.address,
              "gender" : this.getData.gender,
              "languages" : this.getData.languages,
              "email" : this.getData.email,
              "mobile" : this.getData.mobile,
              "categoryId" : this.getData.categoryId,
              "startDateTime" : this.fromDateTimeAd,
              "endDateTime" : this.toDateTimeAd,
              "isActive" : 1,
              "images" : this.urls
            }
        
            let send_date = {};
                      send_date['title'] = this.getData.title;
                      send_date['description'] = this.getData.description;
                      send_date['price'] = this.getData.price;
                      send_date['latitude'] = this.getData.lattitude;
                      send_date['longitude'] = this.getData.longitude;
                      send_date['address'] = this.getData.address;
                      send_date['gender'] = this.getData.gender;
                      send_date['languages'] = this.getData.languages;
                      send_date['email'] = this.getData.email;
                      send_date['mobile'] = this.getData.contact;
                      send_date['categoryId'] = this.getData.categoryId;
                      send_date['startDateTime'] = this.fromDateTimeAd;
                      send_date['endDateTime'] = this.toDateTimeAd;
                      send_date['isActive'] = 1;
                      send_date['images'] = this.getData.images;
                      // send_date['transaction'] = "credited";
        
                      this.usersId = localStorage.getItem("userId");
                      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
                      this.apiCall.post(url, send_date).subscribe(MyResponse => {
                        localStorage.setItem("categoryId",this.getData.categoryId);
                        this.presentToast("Advertisement posted successfully.");
                        if(this.checkBoostStatus == '1'){
                          this.postBanner(this.getData.categoryId);
                        }
                      this.router.navigate(['/home',{ categoryId : this.getData.categoryId}]);
                      this.loader.showBlockingLoaderAuth();
                      }, error => {
                        this.loader.hideBlockingLoaderAuth();
                        this.presentToast("Please try again.");
                      });
          }
        }
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
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
