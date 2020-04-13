import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment'

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
  fromDateTimestamp: number;
  toDateTimestamp: number;
  endDate : any;
  finalCalculation : any;
  totalCalculation: any;
  weeksArray = ["1","2","3","4","5"];
  todayDate : any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiCall: ApiService) { }
  ngOnInit() {
    this.todayDate = new Date();
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
    console.log("show advertisement data:" + (this.getData.title));
  }

  detectEventGallery(event) {
    console.log(event);
    let files = event.target.files;
    console.log(files);
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
        }
        console.log(file);
        this.fileToUpload = file;
        reader.readAsDataURL(this.fileToUpload);
      }
      this.handleFileInput(this.fileToUpload); // 1 for event gallery upload 
    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }


  handleFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }

        this.profilePic = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
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
    // this.totalCalculation = this.finalCalculation + 100;
    // var today = moment();
    this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');
    console.log("show next date:"+moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
// alert("no of week:"+data);
  }

  calculateFinal(){
    this.totalCalculation = this.finalCalculation + 100;
  }
  submmitAdvertisementData(data){

    this.fromDateTimestamp = this.toTimestamp(this.todayDate);
    this.toDateTimestamp = this.toTimestamp(this.endDate);
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
              send_date['mobile'] = this.getData.mobile;
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
              this.router.navigate(['/home']);
              }, error => {
              })
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
