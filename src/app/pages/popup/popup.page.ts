import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';
import { GooglePlaceModule, GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
  @ViewChild("placesRef", {static: false}) placesRef : GooglePlaceDirective;
  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName = "";
  pincode: any;
  postStatus : any;
  addressModel : any ={};
  getFilterName = "";
  popupModel: any = {};


  constructor(
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public changeDetectorRef : ChangeDetectorRef,
    public toast : ToastController
  ) { }

  ngOnInit() {
    this.getFilterName = localStorage.getItem('applyFilter');
    if(this.getFilterName == undefined || this.getFilterName == "" || this.getFilterName == null){
      this.popupModel['filterName'] = "";
    }else{
      this.popupModel['filterName'] = this.getFilterName;
    }
  }

  closeDialog() {
   let city =  localStorage.getItem("cityname");
   if(city== undefined || city == "" || city == null){
     let cityname = "";
    localStorage.setItem("cityname",cityname);
    this.dialogRef.close(city);
   }else{
    localStorage.setItem("cityname",city);
    this.dialogRef.close(city);
   }
  }


  applyFilter(titleName) {

    this.dialogRef.close(titleName);
  }

  submit() {
    // this.popupModel['filterName'] = this.cityName;
    if(this.cityName == "" || this.cityName == undefined){
      // this.presentToast("Please enter city name");
    }else{
      localStorage.setItem("cityname",this.cityName);
      this.dialogRef.close(this.cityName);
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
      this.addressModel['landmark'] = arr[2];
      this.addressModel['address'] = data.vicinity;
      this.addressModel['location'] = data.name;
      this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
      str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
      let statestr = str.split(' ');
      ss = statestr;
      this.stateName = ss[1];
      this.pincode = ss[2];
      this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
      this.changeDetectorRef.detectChanges();

    }
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.addressModel['landmark'], this.addressModel['location']);
    this.address = this.addressModel['landmark'], this.addressModel['location'], this.cityName, this.countryName, this.pincode;
  }

}
