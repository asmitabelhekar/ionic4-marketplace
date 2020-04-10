import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postadvertisement',
  templateUrl: './postadvertisement.page.html',
  styleUrls: ['./postadvertisement.page.scss'],
})
export class PostadvertisementPage implements OnInit {

  categoryId : any;
  address : any;
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
      "categoryName" : "abc",
      "categoryId" : "1"
    },
    {
      "categoryName" : "abcd",
      "categoryId" : "2"
    },
    {
      "categoryName" : "abce",
      "categoryId" : "3"
    },
    {
      "categoryName" : "abcf",
      "categoryId" : "4"
    }
  ];


  genderArray = [
    {
      "gender" : "Male",
      "genderId" : "0"
    },
    {
      "gender" : "Female",
      "genderId" : "1"
    }
   
  ];

  constructor(public router: Router,
    public changeDetectorRef : ChangeDetectorRef) { }

  ngOnInit() {
  }

  addAdvertisementData(data) {

    let languageArray = data.languages;
    this.languagesArray = languageArray.split(',');

    let advertisemntInfo = {
      "title" : data.title,
      "description" : data.description,
      "price" : data.price,
      "lattitude" : this.lattitude,
      "longitude" : this.longitude,
      "address" : this.address,
      "gender" : this.advertisementModel['gender'],
      "languages" : this.languagesArray,
      "email" : this.advertisementModel['email'],
      "mobile" : data.contact,
      "categoryId" : this.categoryId
    }

    // alert("show data::"+JSON.stringify(advertisemntInfo));
    this.router.navigate(['/nextadvertisement']);
    // this.router.navigate(['/nextadvertisement', { advertisementData: JSON.stringify(advertisemntInfo) }]);
    // console.log("shoe advertisement data::" + this.languagesArray);
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
    this.address = this.advertisementModel['landmark'],this.advertisementModel['location'], this.cityName, this.countryName, this.pincode;
  }


  selectCategoryType(data){
    // alert("check data:"+data);
    this.categoryId = data;
  }

  selectGenderType(id){
    this.advertisementModel['gender'] = id;
  }

}
