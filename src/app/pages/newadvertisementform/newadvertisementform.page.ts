import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


declare var RazorpayCheckout: any;

@Component({
  selector: 'app-newadvertisementform',
  templateUrl: './newadvertisementform.page.html',
  styleUrls: ['./newadvertisementform.page.scss'],
})
export class NewadvertisementformPage implements OnInit {

  totalCalculatePayment: any = 0;
  adPlanName: any;
  bannerPlanName: any;
  fileToUpload: any;
  selectedCode: any = "91";
  countryCode = [];
  //   { "code": "91", "name": "India" },
  // { "code": "39", "name": "Italy" },
  // { "code": "81", "name": "Japan" },
  // { "code": "52", "name": "Mexico" }];
  selectedRadioGroup: any;
  checkRadioButton: any = "male";
  getCategoryId: any;
  advertisementStatus: any;
  advertisementId: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  selectPlan: any = {};
  checkStatus: boolean;
  selectedBannerPrice: number = 0;
  selectedAdPrice: number = 0;

  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  urls = [];
  imageUrl = 0;
  categoryId: any;
  subCategoryId: any;
  categoryArray: any = [];
  subCategoryArray: any;
  languagesArray = [];
  languageArray: any[];
  adModel: any = {};
  advertisementModel: any = {};
  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName: any;
  pincode: any;
  usersId: any;

  //getAllFormsData
  firstFormData: any;
  secondFormData: any;
  thirdFormData: any;
  fourthFormData: any;
  FifthFormData: any;

  advertisementObject: any;


  //weeks selection
  weeksArray = [];
  adWeek: any = "";
  bannerWeek: any = "";
  finalCalculation: any = 0;
  finalAdCalculation: any = 0;
  totalCalculation: any;
  fromDateTimestamp: number = 0;
  fromDateTimeAd: number = 0;
  toDateTimestamp: number = 0;
  toDateTimeAd: number = 0;
  endDate: any;
  todayDate: any;
  endAdvertisementDate: any;
  postStatus: any;
  bannerImage: any;
  filterObject: any = {};
  bannerArray: any;
  checkBannerEndDateTimestamp: any;
  checkBannerStartDateTimestamp: any;
  checkAdEndDateTimestamp: any;
  checkAdStartDateTimestamp: any;

  genderArray = [
    {
      "id": "0",
      "value": "male",
      "name": "Male"
    },
    {
      "id": "1",
      "value": "female",
      "name": "Female"
    }
  ];

  planArray = [
    {
      "planName": "plan1",
      "days": "7",
      "price": "1000"
    },
    {
      "planName": "plan2",
      "days": "6",
      "price": "2000"
    },
    {
      "planName": "plan3",
      "days": "9",
      "price": "3000"
    },
    {
      "planName": "plan4",
      "days": "12",
      "price": "4000"
    }

  ];

  plansArray = [];
  //Tags
  tagsArray = [
    {
      "id": "0",
      "name": "Drop-in class"
    },
    {
      "id": "1",
      "name": "Training"
    },
    {
      "id": "2",
      "name": "Workshop / Retreat"
    },
    {
      "id": "3",
      "name": "Festival"
    },
    {
      "id": "4",
      "name": "Equipment"
    }
  ];
  data: any;
  paymentAmount: number = 333;
  currency: string = 'USD';
  razor_key = 'rzp_test_IA8F5OYVBMKeQw';

  constructor(
    private formBuilder: FormBuilder,
    public loader: LoaderService,
    public router: Router,
    public changeDetectorRef: ChangeDetectorRef,
    public toast: ToastController,
    public apiCall: ApiService) {
    this.read_data();
  }

  read_data() {
    fetch('../../../assets/countrycode.json').then(res => res.json())
      .then(json => {
        this.countryCode = json;
        console.log(this.data);
      });


  }


  ionViewWillEnter() {

    this.getPlan();
    this.postStatus = localStorage.getItem("postStatus");
    if (this.postStatus == "1") {
      this.advertisementStatus = "update";
      var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
      this.advertisementObject = JSON.parse(advertisementDetail);
      console.log("show add details:" + this.advertisementObject);
      this.advertisementId = this.advertisementObject.id;
      this.advertisementModel['images'] = this.advertisementObject.images;

      this.firstFormGroup = this.formBuilder.group({
        titleCtrl: [this.advertisementObject.title, Validators.required],
        descriptionCtrl: [this.advertisementObject.description, Validators.required],
        priceCtrl: [this.advertisementObject.price, Validators.required]
      });
      if (this.advertisementObject.gender == 0) {
        this.checkRadioButton = "male";
      } else {
        this.checkRadioButton = "female";
      }

      this.cityName = this.advertisementObject.address;

      this.secondFormGroup = this.formBuilder.group({
        emailCtrl: [this.advertisementObject.email, Validators.required],
        mobileCtrl: [this.advertisementObject.mobile, Validators.required],
        countryCodeCtrl: [this.advertisementObject.countryCode, Validators.required],
        addressCtrl: [this.advertisementObject.address, Validators.required],
        checkRadioButton: [this.checkRadioButton, Validators.required]
      });

      this.categoryId = this.advertisementObject.categoryId;
      this.getSubCategory(this.categoryId);
      console.log("show cid:" + this.categoryId);
      this.fourthFormGroup = this.formBuilder.group({
        categoryId: [this.categoryId, Validators.required],
        subCategoryId: [this.advertisementObject.subCategoryId, Validators.required],
        selectedTags: [this.advertisementObject.tags, Validators.required],
        selectedLanguages: [this.advertisementObject.languages, Validators.required],
      });
      this.getAllBanner();


      this.fromDateTimeAd = this.advertisementObject.startDateTime;
      this.toDateTimeAd = this.advertisementObject.endDateTime;
      this.adWeek = this.getDate(this.fromDateTimeAd, this.toDateTimeAd);
      this.finalAdCalculation = 7 + ((this.adWeek - 1) * 5);
      this.totalCalculatePayment = 0;
      this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;

      this.fifthFormGroup = this.formBuilder.group({
        adWeek: [this.adWeek, Validators.required],
        bannerWeek: [this.bannerWeek, Validators.required]
      });

      this.urls = [];
      // for(let i= 0;i < this.advertisementModel['images'].length; i++){
      if (this.advertisementModel['images'][0] == undefined) {
        this.firstImage = "";
      } else {
        this.firstImage = this.advertisementModel['images'][0];
        this.urls.push(this.firstImage);

      }

      if (this.advertisementModel['images'][1] == undefined) {
        this.secondImage = "";
      } else {
        this.secondImage = this.advertisementModel['images'][1];
        this.urls.push(this.secondImage);

      }

      if (this.advertisementModel['images'][2] == undefined) {
        this.thirdImage = "";
      } else {
        this.thirdImage = this.advertisementModel['images'][2];
        this.urls.push(this.thirdImage);

      }

      if (this.advertisementModel['images'][3] == undefined) {
        this.fourthImage = "";
      } else {
        this.fourthImage = this.advertisementModel['images'][3];
        this.urls.push(this.fourthImage);

      }

      if (this.advertisementModel['images'][4] == undefined) {
        this.fifthImage = "";
      } else {
        this.fifthImage = this.advertisementModel['images'][4];
        this.urls.push(this.fifthImage);

      }

    } else {
      this.advertisementStatus = "post";
    }
  }

  ngOnInit() {
    this.getCategory();
    this.getLanguages();
    this.todayDate = new Date();

    for (let p = 0; p <= 52; p++) {
      this.weeksArray.push(p);

    }
    console.log("show weeks array:" + this.weeksArray);


    this.firstFormGroup = this.formBuilder.group({
      titleCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required],
      priceCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      mobileCtrl: ['', Validators.required],
      countryCodeCtrl: ['91', Validators.required],
      addressCtrl: ['', Validators.required],
      checkRadioButton: [this.checkRadioButton, Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({

      // thirdCtrl: ['', Validators.required]

    });
    this.fourthFormGroup = this.formBuilder.group({
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      selectedTags: ['', Validators.required],
      selectedLanguages: ['', Validators.required],
    });

    this.fifthFormGroup = this.formBuilder.group({
      adWeek: ['', Validators.required],
      bannerWeek: ['', Validators.required]
    });
  }


  getAllBanner() {
    this.loader.showBlockingLoaderAuth();
    this.filterObject = {};
    this.filterObject['advertisementId'] = this.advertisementId;
    this.filterObject['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + this.categoryId + "/banners?" + "filters=" + JSON.stringify(this.filterObject);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.loader.hideBlockingLoaderAuth();
      this.bannerArray = MyResponse['result']['list'];
      if (MyResponse['result']['count'] > 0) {
        let getBannerId = MyResponse['result']['list'][0]['id'];
        this.fromDateTimestamp = MyResponse['result']['list'][0]['startDateTime'];
        this.toDateTimestamp = MyResponse['result']['list'][0]['endDateTime'];

        localStorage.setItem("bannerId", getBannerId);
        this.bannerWeek = this.getDate(this.fromDateTimestamp, this.toDateTimestamp);
        this.finalCalculation = 7 + ((this.bannerWeek - 1) * 5);

        this.totalCalculatePayment = 0;
        this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;
        console.log("selected banner week show:" + this.bannerWeek);

      } else {

        console.log("post bannee API");
      }

      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
      })

  }


  getDate(start, end) {
    //get from date
    var ts_ms = start * 1000;
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
    let getStartDate = month + "/" + date + "/" + year;
    var dateToday = new Date(year, parseInt(month), parseInt(date));


    //get end date
    var end_date_ob_ts_ms = end * 1000;
    var end_date_ob = new Date(end_date_ob_ts_ms);
    var end_date_ob_year = end_date_ob.getFullYear();
    var end_date_ob_month = ("0" + (end_date_ob.getMonth() + 1)).slice(-2);
    var end_date_ob_date = ("0" + end_date_ob.getDate()).slice(-2);
    let getEndDate = end_date_ob_month + "/" + end_date_ob_date + "/" + end_date_ob_year;

    console.log("show first date: " + getStartDate + "  ,  " + "show second date:" + getEndDate);


    let weeks = this.calculateNumberOfWeeks(getStartDate, getEndDate);
    console.log("show weeks:" + weeks);

    return Math.abs(weeks);

  }

  calculateNumberOfWeeks = function (d1, d2) {
    var format = "MM/DD/YYYY";
    if (d1 == '' || d2 == '') {
      return '';
    }
    if (moment(d1, format).isValid() && moment(d2, format).isValid()) {
      d1 = moment(d1, format);
      d2 = moment(d2, format);

      this.w = (d1.diff(d2, 'days') / 7).toFixed(1);
      if (this.w < 1) {
        this.w = this.w;
      }
      this.selectedNoOfWeek = this.w;

      return this.w;
    }
  }

  checkData(data) {
    console.log("check data:" + data);
  }

  form1() {
    this.firstFormData = this.firstFormGroup.value;
  }

  form2() {
    console.log(this.secondFormGroup.value);
    this.secondFormData = this.secondFormGroup.value;
  }

  form3() {
    console.log(this.thirdFormGroup.value);
  }

  form4() {
    console.log(this.fourthFormGroup.value);
    this.fourthFormData = this.fourthFormGroup.value;
  }

  selectCountryCode(data) {
    this.selectedCode = data;
    console.log("countryCode:" + (this.selectedCode));
  }
  form5() {
    this.FifthFormData = this.fifthFormGroup.value;

    console.log("show first record:" + this.firstFormData.titleCtrl);
    console.log("show second record:" + this.secondFormData.emailCtrl);
    console.log("show third record:" + this.firstImage);
    console.log("show fourth record:" + this.fourthFormData.categoryId);
    console.log("show fifth record:" + this.FifthFormData.bannerWeek);

    this.submmitAdvertisementData();
  }


  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
    if (this.selectedRadioGroup == 'male') {
      this.advertisementModel['gender'] = 0;
      this.checkRadioButton = "male";
    } else if (this.selectedRadioGroup == 'female') {
      this.advertisementModel['gender'] = 1;
      this.checkRadioButton = "female";
    } else {
      this.advertisementModel['gender'] = 1;
      this.checkRadioButton = "female";
    }
  }

  submmitAdvertisementData() {

    this.loader.showBlockingLoaderAuth();


    let send_date = {};
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['price'] = this.firstFormData.priceCtrl;
    send_date['latitude'] = this.lattitude;
    send_date['longitude'] = this.longitude;
    send_date['address'] = this.cityName;
    send_date['gender'] = this.advertisementModel['gender'];
    send_date['languages'] = this.fourthFormData.selectedLanguages;
    send_date['email'] = this.secondFormData.emailCtrl;
    send_date['mobile'] = this.secondFormData.mobileCtrl;
    send_date['categoryId'] = this.fourthFormData.categoryId;
    send_date['startDateTime'] = this.checkAdStartDateTimestamp;
    send_date['endDateTime'] = this.checkAdEndDateTimestamp;
    send_date['isActive'] = 1;
    send_date['images'] = this.urls;
    send_date['countryCode'] = this.selectedCode;
    send_date['subCategoryId'] = this.fourthFormData.subCategoryId;
    send_date['extraFields'] = {};
    send_date['tags'] = this.fourthFormData.selectedTags;

    this.usersId = localStorage.getItem("userId");

    if (this.advertisementStatus == "post") {
      console.log("show all forms data in send_date object:" + JSON.stringify(send_date));

      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
      this.apiCall.post(url, send_date).subscribe(MyResponse => {
        this.getCategoryId = MyResponse['result']['categoryId'];
        this.advertisementId = MyResponse['result']['id'];
        localStorage.setItem("categoryId", this.getCategoryId);
        this.postBanner(this.getCategoryId);
        // this.presentToast("Advertisement posted successfully.");
        this.payWithRazor();
        this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        // this.presentToast("Please try again.");
      });
    }
    else {
      console.log("show all forms data in send_date object:" + JSON.stringify(send_date));

      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements/" + this.advertisementId;
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        this.getCategoryId = MyResponse['result'][0]['categoryId'];
        console.log("shoe getCategoryId:" + this.getCategoryId);
        localStorage.setItem("categoryId", this.getCategoryId);
        this.updateBanner(this.getCategoryId);
        this.presentToast("Advertisement updated successfully.");
        this.router.navigate(['/favourite']);
        // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        // this.presentToast("Please try again.");
      });
    }
    this.loader.hideBlockingLoaderAuth();
  }

  postBanner(id) {
    this.bannerImage = this.urls[0];
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['startDateTime'] = this.checkBannerStartDateTimestamp;
    send_date['endDateTime'] = this.checkBannerEndDateTimestamp;
    send_date['lat'] = this.lattitude;
    send_date['lng'] = this.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.cityName;
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + id + "/banners";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      console.log("bannerposted successfully:");
      // this.presentToast(MyResponse);
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
      // this.presentToast("Please try again.")
    });

  }

  updateBanner(categoryId) {
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['startDateTime'] = this.fromDateTimestamp;
    send_date['endDateTime'] = this.toDateTimestamp;
    send_date['lat'] = this.lattitude;
    send_date['lng'] = this.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.cityName;
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;

    let getBannerId = localStorage.getItem("bannerId");
    let url = environment.base_url + environment.version + "category/" + categoryId + "/banners/" + getBannerId;
    this.apiCall.put(url, send_date).subscribe(MyResponse => {

      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
    });

  }

  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    this.router.navigate(['/newadvertisementform']);
    // this.router.navigate(['/secondpageadvertisement']);
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

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  selectCategoryType(data) {
    // alert("check data:"+data);
    console.log("show id:" + data);
    this.categoryId = data;
    this.getSubCategory(this.categoryId);
  }

  selectSubCategoryType(data) {

    console.log("show id:" + data);
    this.subCategoryId = data;
  }

  selectedTags(data) {
    console.log("show selected tags:" + data);
  }

  getCategory() {
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      let dataArray = MyResponse['result']['list'];
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i]['name'] == "Parent Category") {

        } else {
          this.categoryArray.push(dataArray[i]);
        }
      }
      console.log("show category:" + this.categoryArray);
    },
      error => {

      })
  }


  getSubCategory(categoryId) {
    let url = environment.base_url + environment.version + "category/" + categoryId + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.subCategoryArray = MyResponse['result']['list'];
      console.log("show sub category " + this.subCategoryArray);
    },
      error => {

      })
  }

  getPlan() {
    let url = environment.base_url + environment.version + "subscriptions";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.plansArray = MyResponse['result']['list'];
      console.log("show plansArray " + this.plansArray);
    },
      error => {

      })
  }


  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
  }

  getLanguages() {

    let url = environment.base_url + environment.version + "languages";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.languageArray = MyResponse['result']['list'];
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();
        // this.networkServices.onPageLoadCheckInternet();
      })
  }
  checkAdveriseMentPriceCard(planName, price, noOfDays) {

    let startAddate = new Date();
    this.checkAdStartDateTimestamp = this.toTimestamp(startAddate);
    console.log("start timestamp:" + this.checkAdStartDateTimestamp);
    this.checkAdEndDateTimestamp = moment(startAddate, "MM--DD-YYYY").add(noOfDays, 'days');

    this.totalCalculatePayment = 0;
    this.selectedAdPrice = price;

    this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
    console.log("final payment:" + this.totalCalculatePayment);
    this.adPlanName = planName;
  }

  checkBannerPriceCard(planName, price, noOfDays) {
    console.log("no of days:::" + noOfDays);
    let startdate = new Date();

    this.checkBannerStartDateTimestamp = this.toTimestamp(startdate);
    console.log("start banner timestamp:::" + this.checkBannerStartDateTimestamp);
    this.checkBannerEndDateTimestamp = moment(startdate, "MM--DD-YYYY").add(noOfDays, 'days');

    var time = moment(this.checkBannerEndDateTimestamp).format("DD-MM-YYYY");
    console.log("no of days after calculation:::" + time);
    this.totalCalculatePayment = 0;
    this.selectedBannerPrice = price;
    this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
    this.bannerPlanName = planName;
  }

  selectBannerWeek(data) {
    this.bannerWeek = data;

    // localStorage.setItem("boostStatus", '0');
    // this.checkBoostStatus = localStorage.getItem("boostStatus");

    this.finalCalculation = 7 + ((data - 1) * 5);
    this.totalCalculatePayment = 0;
    this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;

    this.totalCalculation = this.finalCalculation;
    this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

    let startDateTimeStamp = this.toTimestamp(this.todayDate);
    let endDateTimeStamp = this.toTimestamp(this.endDate);
    this.fromDateTimestamp = startDateTimeStamp;
    this.toDateTimestamp = endDateTimeStamp;
    console.log("show banner timestamp:" + startDateTimeStamp)
    console.log("show banner date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  }
  selectAdWeek(data) {
    this.adWeek = data;
    this.finalAdCalculation = 7 + ((data - 1) * 5);
    this.totalCalculatePayment = 0;
    this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;

    this.todayDate = new Date();
    console.log("show no of week value::" + data);
    this.endAdvertisementDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

    let startDateTime = this.toTimestamp(this.todayDate);
    let endDateTime = this.toTimestamp(this.endAdvertisementDate);
    this.fromDateTimeAd = startDateTime;
    this.toDateTimeAd = endDateTime;
    console.log("start date timestamp:" + startDateTime);
    console.log("end date timestamp:" + endDateTime);


    console.log("show next date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
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


  detectEventGallery(event, index) {
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

      // this.handleFirstFileInput(this.fileToUpload,index);
      if (index == 0) {
        this.handleFirstFileInput(this.fileToUpload);
      } else if (index == 1) {
        this.handleSecondFileInput(this.fileToUpload);
      } else if (index == 2) {
        this.handleThirdFileInput(this.fileToUpload);
      } else if (index == 3) {
        this.handleFourthFileInput(this.fileToUpload);
      } else if (index == 4) {
        this.handleFifthFileInput(this.fileToUpload);
      } else {

      }


    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }


  toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  handleFirstFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls[0] = MyResponse['result'][0];

        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        // if(index == 0){
        //   this.firstImage = MyResponse['result'][0];
        // }else  if(index == 1){
        //   this.secondImage = MyResponse['result'][0];
        // }else  if(index == 2){
        //   this.thirdImage = MyResponse['result'][0];
        // }else  if(index == 3){
        //   this.fourthImage = MyResponse['result'][0];
        // }else  if(index == 4){
        //   this.fifthImage = MyResponse['result'][0];
        // }else{

        // }



        this.firstImage = MyResponse['result'][0];
        console.log("print url resonce:" + this.firstImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleSecondFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls[1] = MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.secondImage = MyResponse['result'][0];
        console.log("print url secondImage:" + this.secondImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleThirdFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {
        this.urls[2] = MyResponse['result'][0];

        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.thirdImage = MyResponse['result'][0];
        console.log("print url thirdImage:" + this.thirdImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleFourthFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls[3] = MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.fourthImage = MyResponse['result'][0];
        console.log("print url fourthImage:" + this.fourthImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleFifthFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls[4] = MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.fifthImage = MyResponse['result'][0];
        console.log("print url fifthImage:" + this.fifthImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }


  payWithRazor() {
    let getName = localStorage.getItem("getName");
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key,
      amount: this.totalCalculatePayment, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Holyhub',
      prefill: {
        email: this.secondFormData.emailCtrl,
        contact: this.secondFormData.mobileCtrl,
        name: getName
      },
      theme: {
        color: '#fe8860'
      },
      modal: {
        ondismiss: function () {
          console.log('dismissed')
        }
      }
    };
    // this.submmitAdvertisementData();

    // var successCallback = function (payment_id) {
    //   alert('payment_id: ' + payment_id);
    //   this.submmitAdvertisementData();
    // };

    var successCallback = function (success) {
      // alert('payment_id: ' + success)
      this.gateWayLogsCheck(success);
    }

    var cancelCallback = function (error) {
      alert("show payment gateway error:" + error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  setValue(name) {
    this.checkStatus = this.selectPlan.hasOwnProperty(name);

    if (this.checkStatus) {
      console.log("before delete:" + (this.selectPlan));
      delete this.selectPlan[name];
      localStorage.setItem("BOOKMARK", JSON.stringify(this.selectPlan));



      console.log("after delete:" + (this.selectPlan));
    } else {
      this.selectPlan[name] = true;

    }
    console.log("check data:" + JSON.stringify(this.selectPlan));
  }

  gatewayLogsCheck(success) {

    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['advertisementId'] = this.bannerImage;
    send_date['userId'] = this.firstFormData.titleCtrl;
    send_date['paymentId'] = success;
    send_date['isSuccess'] = 0;
    send_date['advertisementStartDate'] = this.checkBannerEndDateTimestamp;
    send_date['advertisementEndDate'] = this.lattitude;
    send_date['bannerStartDate'] = this.longitude;
    send_date['bannerEndDate'] = 1;


    let url = environment.base_url + environment.version + "payment-gateway-logs";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
    });
  }
}
