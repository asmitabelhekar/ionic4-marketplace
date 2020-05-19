import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Platform, IonSlides, ActionSheetController } from '@ionic/angular';
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
  date: any;
  price: any;
  displayfavourite = "0";
  title: any;
  userId: any;
  description: any;
  mobile: any;
  advertisementId: any;
  categoryId: any;
  lattitude = 0;
  longitude = 0;
  profileDetail: any;
  address: any;
  // city: any;
  cityName: any;
  advertisementImages = [];
  stateName: any;
  countryName: any;
  loc: any = {};
  getImage = localStorage.getItem("url");
  getIds: any;
  advertisementArray = [];
  userName: any;
  userCreated: any;
  url: any;
  getBookmarkObj: any = {};
  keysObject = [];
  advertisementType : any;


  public sendTo: any;
  public subject: string = 'Message from Sayu Customer App';
  public message: string = 'Sayu Customer App : Share available garages near you..';
  public image: string = 'data:image/jpeg;base64,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';
  public uri: string = 'https://play.google.com/store/apps/details?id=com.v1.mazepune&hl=en';


 
  constructor(public activatedRoute: ActivatedRoute,
    public platform: Platform,
    public networkServices: NetworkService,
    public apiCall: ApiService,
    public networkService: NetworkService,
    public callNumber: CallNumber,
    public googlemaps: GoogleMaps,
    public router: Router,
    public actionSheetCtrl : ActionSheetController,
    private socialSharing: SocialSharing,
    public nativeGeocoder: NativeGeocoder,
    public loader: LoaderService) {

  }


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  nextSlide(slides: IonSlides){
    slides.slideNext();
  }

  prevSlide(slides: IonSlides){
    slides.slidePrev();
  }

  ngOnInit() {
    // var data={"id" : 1, "second" : "abcd"};
  }

  getDetailAdvertisement() {

    this.loader.showBlockingLoaderAuth();
    this.apiCall.get(this.url).subscribe(MyResponse => {
      this.advertisementArray = MyResponse['result'];
      this.advertisementId = this.advertisementArray['id'];
      this.address = this.advertisementArray['address'];
      this.description = this.advertisementArray['description'];
      this.title = this.advertisementArray['title'];
      this.lattitude = this.advertisementArray['latitude'];
      this.longitude = this.advertisementArray['longitude'];
      this.price = this.advertisementArray['price'];
      this.mobile = this.advertisementArray['mobile'];
      this.date = this.advertisementArray['modified'];
      this.userId = this.advertisementArray['userId'];
      this.categoryId = this.advertisementArray['categoryId'];
      this.advertisementImages = this.advertisementArray['images'];

      localStorage.setItem("ADVERTISEMENTDATA",JSON.stringify(this.advertisementArray));

      this.getProfileDetail();
      this.loadMap();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkService.checkInternetConnection();
        this.networkService.onPageLoadCheckInternet();
      })
  }

  ionViewWillEnter() {
    this.loader.showBlockingLoaderAuth();
    this.userId = localStorage.getItem('userId');
    this.getIds = JSON.parse(this.activatedRoute.snapshot.params['sendId']);
    this.advertisementType = this.getIds.adType;
    
    // this.getIds = JSON.parse(getdata);
    if (this.getIds.status == "users") {

      this.advertisementId = this.getIds.id;
      this.url = environment.base_url + environment.version + "users/" + this.userId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    } else {

      this.advertisementId = this.getIds.id;
      this.categoryId = this.getIds.categoryId;
      console.log("show categoryId::"+this.categoryId);
      this.url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    }

    var jsonString = localStorage.getItem("BOOKMARK");    
    this.getBookmarkObj = JSON.parse(jsonString);
    if(this.getBookmarkObj == null || this.getBookmarkObj =="" || this.getBookmarkObj == undefined){
      this.getBookmarkObj = {};
    }else{

    }

    console.log("show retrieved object:"+this.getBookmarkObj);

    // let data = localStorage.getItem("BOOKMARK");

    // this.getBookmarkObj = JSON.parse(data);
    // console.log("getBookmarkObj::" + this.getBookmarkObj);
    // this.keysObject = Object.keys(this.getBookmarkObj);
    // for(let i=0; i< this.keysObject.length; i++){
    //   if(this.advertisementId == this.keysObject[i]){
    //     this.displayfavourite = "0";
    //   }
    //   else{
    //     this.displayfavourite = "1";
    //   }
    // }
    this.loader.hideBlockingLoaderAuth();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Share on Whatsup",
          role: "destructive",
          icon: 'logo-whatsup',
          handler: () => {
            this.socialSharing
              .shareViaWhatsApp(this.message + "\n", "data:image/jpeg;base64,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", this.uri)
              .catch(err => {
              })
              .catch(err => {
              });
          }
        },
        {
          text: "Share on Email",
          role: "destructive",
          icon: 'mail',
          handler: () => {
            this.socialSharing.shareViaEmail(this.uri, this.message, this.sendTo)
              .then((data) => {
                console.log('Shared via Email');
              })
              .catch((err) => {
                console.log('Not able to be shared via Email');
              });
          }
        },
        {
          text: "Share on Message",
          role: "destructive",
          icon: 'mail',
          handler: () => {
            this.socialSharing.shareViaSMS(this.message + "\n\n" + this.uri, this.message).then((data) => {

            })
              .catch((err) => {

              })
          }
        },
      
      ]
    });
    actionSheet.present();
  }

  sharePicker() {
    this.platform.ready()
      .then(() => {
        this.socialSharing.share(this.message, this.subject, this.image, this.uri)
          .then((data) => {
            console.log('Shared via SharePicker');
          })
          .catch((err) => {
            console.log('Was not shared via SharePicker');
          });
      });
  }


  goBackword() {
    if(this.advertisementType == '0'){
    this.router.navigate(['/favourite']);
    }
    else{
    this.router.navigate(['/home', { categoryId: this.categoryId }]);

    }
    // console.log("back navigation::" + this.categoryId);
    // window.history.back();
  }

  getProfileDetail() {
    this.loader.showBlockingLoaderAuth();

    let url = environment.base_url + environment.version + "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.userName = this.profileDetail.name;
      this.userId = this.profileDetail.id;
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


  makeCall() {
    this.callNumber.callNumber(this.mobile, true);
  }


  sendMessage() {
    let userDetail = {
      "name" : this.userName,
      "id" : this.userId
    }
    this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
    // this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
  }


  viewProfile() {
    this.router.navigate(['/profile', { userId: this.userId }]);
  }

  editAdvertisement(){
    let status = "1";
    localStorage.setItem("postStatus",status);
    this.router.navigate(['/postadvertisement']);
   
  }
  
}
