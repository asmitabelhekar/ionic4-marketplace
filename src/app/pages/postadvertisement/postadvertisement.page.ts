import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-postadvertisement',
  templateUrl: './postadvertisement.page.html',
  styleUrls: ['./postadvertisement.page.scss'],
})
export class PostadvertisementPage implements OnInit {

  selectedRadioGroup : any;
  categoryId: any;
  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName: any;
  pincode: any;
  // loc: any = {};
  languagesArray = [];
  myControl = new FormControl();
  advertisementModel: any = {};

  categoryArray = [
    {
      "categoryName": "abc",
      "categoryId": "1"
    },
    {
      "categoryName": "abcd",
      "categoryId": "2"
    },
    {
      "categoryName": "abce",
      "categoryId": "3"
    },
    {
      "categoryName": "abcf",
      "categoryId": "4"
    }
  ];


  genderArray = [
    {
      "gender": "Male",
      "genderId": "0"
    },
    {
      "gender": "Female",
      "genderId": "1"
    }

  ];


  selectedLanguages: any[];
  languageArray: any[];
  //toCheck: boolean =  false;

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }

  selectAll(checkAll, select: NgModel, values) {
    console.log("selected languages:" + select);
    console.log("selected values:" + values);
    console.log("selected values:" + this.selectedLanguages);
    if (checkAll) {
      select.update.emit(values);
    }
    else {
      select.update.emit([]);
    }
  }

  ngOnInit() {

    this.getCategory();
    this.languageArray = [
      { id: 1, name: "English" },
      { id: 2, name: "Hindi" },
      { id: 3, name: "Marathi" },
      { id: 4, name: "Gujrati" },
      { id: 5, name: "Bangali" }
    ]
  }

  constructor(public router: Router,
    public apiCall : ApiService,
    public toast : ToastController,
    public changeDetectorRef: ChangeDetectorRef) { }


  getCategory() {
    let url = environment.base_url + environment.version  +"category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
     this.categoryArray = MyResponse['result']['list'];
    },
      error => {
        
      })
  }
  addAdvertisementData(data) {
// category, languages, gender
    // let languageArray = data.languages;
    // this.languagesArray = languageArray.split(',');
if(this.address == undefined || this.address == null || this.address == ""){
  this.presentToast("Please enter address");
}else{
  if(this.languagesArray.length == 0){
    this.presentToast("Please select languages");
  }else{
    if(this.advertisementModel['gender'] == '0' || this.advertisementModel['gender'] == '1'){
     

      if(this.categoryId == undefined || this.categoryId == null || this.categoryId == ""){
        this.presentToast("Please select category id");
      }else{
        let advertisemntInfo = {
          "title": data.title,
          "description": data.description,
         
          "lattitude": this.lattitude,
          "longitude": this.longitude,
          "address": this.address,
          "gender": this.advertisementModel['gender'],
          "languages": this.languagesArray,
          "email": this.advertisementModel['email'],
         
          "categoryId": this.categoryId
        }
      console.log("data:"+JSON.stringify(advertisemntInfo));
        this.router.navigate(['/nextadvertisement', { advertisementData: JSON.stringify(advertisemntInfo) }]);
      }
    }else{
    
      this.presentToast("Please select gender");
    }
  }
}
   
  }

  radioGroupChange(event) {
console.log("radioGroupChange",event.detail);
this.selectedRadioGroup = event.detail.value;
if(this.selectedRadioGroup == 'male'){
  this.advertisementModel['gender'] = 0;
}else if(this.selectedRadioGroup == 'female'){
  this.advertisementModel['gender'] = 1;
}else{
  this.advertisementModel['gender'] = 1;
}
}


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  handleAddressChange(data) {

    console.log("Address Data", data);

    this.lattitude = data.geometry.location.lat();
    this.longitude = data.geometry.location.lng();
    console.log("Address Data lattitude one::", this.lattitude);
    console.log("Address Data longitude one::", this.longitude);


    console.log("lat", this.lattitude, this.longitude);
    let string = "";
    string = data['formatted_address']
    let arr = [];
    let str = "";
    let ss = [];
    arr = string.split(",");
    for (let index = arr.length - 1; index >= 0; index--) {
      console.log(index, "data ", arr[index]);
      this.advertisementModel['landmark'] = arr[2];
      this.advertisementModel['address'] = data.vicinity;
      this.advertisementModel['location'] = data.name;
      this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
      str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
      let statestr = str.split(' ');
      ss = statestr;
      this.stateName = ss[1];
      this.pincode = ss[2];
      this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
      this.changeDetectorRef.detectChanges();

    }
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.advertisementModel['landmark'], this.advertisementModel['location']);
    this.address = this.advertisementModel['landmark'], this.advertisementModel['location'], this.cityName, this.countryName, this.pincode;
  }


  selectCategoryType(data) {
    // alert("check data:"+data);
    console.log("show id:"+data);
    this.categoryId = data;
  }

  selectGenderType(id) {
    this.advertisementModel['gender'] = id;
  }

  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
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
