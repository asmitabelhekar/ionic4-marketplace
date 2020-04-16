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

@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.page.html',
  styleUrls: ['./advertisementdetail.page.scss'],
})
export class AdvertisementdetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  lattitude = 18.579343;
  longitude = 73.9089168;
  address: any;
  // city: any;
  cityName: any;
  stateName: any;
  countryName: any;
  loc: any = {};
  getImage = localStorage.getItem("url");


  constructor(public activatedRoute: ActivatedRoute,
    public platform : Platform,
    public callNumber : CallNumber,
    public googlemaps : GoogleMaps,
    public router : Router,
    public nativeGeocoder :  NativeGeocoder,
    public loader : LoaderService) {

  }

  ngOnInit() {

    // this.getImage = this.activatedRoute.snapshot.params['imageShow'];
    // console.log("show image:"+this.getImage);
    this.loadMap();
    // this.platform.ready().then(() => {
    //   this.loadMap();
    // });
  
  }
  ionViewWillEnter() {
    // this.getImage = this.activatedRoute.snapshot.params['imageShow'];
    console.log("show image:" + this.getImage);
  }
  goBackword() {
    window.history.back();
  }


  loadMap() {
    this.loader.showBlockingLoaderAuth();
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
    this.callNumber.callNumber("9527902622", true);
  }

  sendMessage(){
    this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }])
  }
}
