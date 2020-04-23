import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';

@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.page.html',
  styleUrls: ['./advertisementdetail.page.scss'],
})
export class AdvertisementdetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  date : any;
  price: any;
  title : any;
  userId : any;
  description : any;
  mobile : any;
  advertisementId : any;
  categoryId : any;
  lattitude = 0;
  longitude = 0;
  profileDetail : any;
  address: any;
  // city: any;
  cityName: any;
  stateName: any;
  countryName: any;
  loc: any = {};
  getImage = localStorage.getItem("url");
  getIds : any;
  advertisementArray = [];
  userName : any;
  userCreated : any;
  url : any;

  constructor(public activatedRoute: ActivatedRoute,
    public platform : Platform,
    public networkServices : NetworkService,
    public apiCall : ApiService,
    public networkService : NetworkService,
    public callNumber : CallNumber,
    public googlemaps : GoogleMaps,
    public router : Router,
    public nativeGeocoder :  NativeGeocoder,
    public loader : LoaderService) {

  }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    // this.userName = localStorage.getItem("userName");
    // this.userCreated = localStorage.getItem("userCreated");
    console.log("receive image::"+this.getImage)
    this.getIds = JSON.parse(this.activatedRoute.snapshot.params['sendId']);

    if(this.getIds.status == "users"){
      console.log("show id:"+this.getIds.id);
      console.log("show userCreated:"+this.userCreated);
  
      this.advertisementId = this.getIds.id;
      this.url = environment.base_url + environment.version  +"users/" + this.userId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    }else{
      console.log("show id:"+this.getIds.id);
      console.log("show userCreated:"+this.userCreated);
  
      this.advertisementId = this.getIds.id;
      this.categoryId = this.getIds.categoryId;
    this.url = environment.base_url + environment.version  +"categories/" + this.categoryId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    }
  
  }

  getDetailAdvertisement(){

    this.loader.showBlockingLoaderAuth();
    this.apiCall.get(this.url).subscribe(MyResponse => {
     this.advertisementArray = MyResponse['result'];
     this.address = this.advertisementArray['address'];
     this.description = this.advertisementArray['description'];
     this.title = this.advertisementArray['title'];
     this.lattitude = this.advertisementArray['latitude'];
     this.longitude = this.advertisementArray['longitude'];
     this.price = this.advertisementArray['price'];
     this.mobile = this.advertisementArray['mobile'];
     this.date = this.advertisementArray['modified'];
     this.userId = this.advertisementArray['userId'];
     this.getProfileDetail();
     this.loader.hideBlockingLoaderAuth();
      this.loadMap();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkService.checkInternetConnection();
        this.networkService.onPageLoadCheckInternet();
      })
  }
  ionViewWillEnter() {
    // this.getImage = this.activatedRoute.snapshot.params['imageShow'];
    console.log("show image:" + this.getImage);
    this.userId = localStorage.getItem('userId');
  }
  goBackword() {
    window.history.back();
  }

  getProfileDetail(){
    this.loader.showBlockingLoaderAuth();
    
    let url = environment.base_url + environment.version+ "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.userName = this.profileDetail.name;
      this.userCreated = this.profileDetail.created;
           this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  loadMap() {
    // this.loader.showBlockingLoaderAuth();
    try {
      console.log("lat lng", this.longitude, this.lattitude);
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: this.lattitude,
            lng: this.longitude
          },
          zoom: 18,
          tilt: 30
        }
      });
      console.log("Address Data lattitude two::", this.lattitude);
      console.log("Address Data longitude two::", this.longitude);
      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        async (data) => {
          console.log("Click MAP", data);
          await this.map.animateCamera({
            target: {
              lat: this.lattitude,
              lng: this.longitude
            },
            zoom: 17,
            duration: 2000
          });
          let marker = await this.map.addMarker({
            title: 'Move pin to adjust',
            icon: 'red',
            animation: 'DROP',
            draggable: true,
            visible: true,
            position: {
              lat: this.lattitude,
              lng: this.longitude
            },

          })

          this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
        }
      );
    }
    catch (err) {
      console.log("loadmap function", err);
    }
  }


  getAddressFromCoords(lattitude, longitude) {
    try {
      console.log("getAddressFromCoords " + lattitude + " " + longitude);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };


      this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.address = "";
          let responseAddress = [];
          console.log("result", result);

          this.loc = {};

          this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
          this.loc['address'] = result[0]['thoroughfare'];
          this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
          this.stateName = result[0]['administrativeArea'];
          this.countryName = result[0]['countryName'];

          console.log("address", this.loc);

          this.loader.hideBlockingLoaderAuth();
        })
        .catch((error: any) => {
          this.loader.hideBlockingLoaderAuth();
          this.address = "Address Not Available!";
          // this.loader.hideBlockingLoaderAuth();

        });
    }
    catch (err) {
      console.log("get address function", err);
      // this.loader.hideBlockingLoaderAuth();

    }

  }


  makeCall(){
    this.callNumber.callNumber(this.mobile, true);
  }

  sendMessage(){
    this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
  }

  viewProfile(){
    this.router.navigate(['/profile', { userId : this.userId}]);
  }
}
