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
  submitAdvertisementData
  advertisementModel: any = {};
  fromDateTimestamp: number = 0;
  toDateTimestamp: number = 0;
  endDate : any;
  finalCalculation : any;
  totalCalculation: any;
  weeksArray = ["1","2","3","4","5"];
  todayDate : any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loader : LoaderService,
    public toast : ToastController,
    public apiCall: ApiService) { }
  ngOnInit() {
    this.todayDate = new Date();
    this.advertisementModel['noofweek'] = "1";
    this.selectNoOfWeeksType(1);
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['FinalObject']);
    console.log("second advertisement data:" + (this.getData));
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

  selectNoOfWeeksType(data){
    this.finalCalculation = 7 + ((data - 1) * 5);
    this.totalCalculation = this.finalCalculation + 100;
    this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');
    console.log("show next date:"+moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  }

  calculateFinal(){
    this.totalCalculation = this.finalCalculation + 100;
  }
  submmitAdvertisementData(data){
    this.loader.presentLoading();
    let startDateTimeStamp = this.toTimestamp(this.todayDate);
    let endDateTimeStamp = this.toTimestamp(this.endDate);
    this.fromDateTimestamp = startDateTimeStamp;
    this.toDateTimestamp = endDateTimeStamp;
   
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
              "startDateTime" : this.fromDateTimestamp,
              "endDateTime" : this.toDateTimestamp,
              "isActive" : 0,
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
                      send_date['startDateTime'] = this.fromDateTimestamp;
                      send_date['endDateTime'] = this.toDateTimestamp;
                      send_date['isActive'] = 0;
                      send_date['images'] = this.urls;
                      // send_date['transaction'] = "credited";
        
                      this.usersId = localStorage.getItem("userId");
                      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
                      this.apiCall.post(url, send_date).subscribe(MyResponse => {
                        localStorage.setItem("categoryId",this.getData.categoryId);
                        this.presentToast("Entry created successfully.")
                      this.router.navigate(['/home']);
                      this.loader.stopLoading();
                      }, error => {
                        this.loader.stopLoading();
                        this.presentToast("Please try again.")
                      })
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
