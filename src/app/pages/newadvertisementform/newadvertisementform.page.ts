import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-newadvertisementform',
  templateUrl: './newadvertisementform.page.html',
  styleUrls: ['./newadvertisementform.page.scss'],
})
export class NewadvertisementformPage implements OnInit {
  fileToUpload: any;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  urls = [];
  imageUrl = 0;
  categoryId: any;
  subCategoryId : any;
  categoryArray: any = [];
  subCategoryArray: any;
  languagesArray = [];
  languageArray: any[];
  adModel: any = {};

  //weeks selection
  weeksArray = [];
  adWeek: any = "";
  bannerWeek: any = "";
  finalCalculation: any;
  finalAdCalculation : any;
  totalCalculation: any;
  fromDateTimestamp: number = 0;
  fromDateTimeAd: number = 0;
  toDateTimestamp: number = 0;
  toDateTimeAd: number = 0;
  endDate: any;
  todayDate: any;
  endAdvertisementDate: any;


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


  constructor(
    private formBuilder: FormBuilder,
    public loader: LoaderService,
    public apiCall: ApiService) { }


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
      addressCtrl: ['', Validators.required]
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

  checkData(data) {
    console.log("check data:" + data);
  }

  form1() {
    console.log(this.firstFormGroup.value);
  }

  form2() {
    console.log(this.secondFormGroup.value);
  }

  form3() {
    console.log(this.thirdFormGroup.value);
  }

  form4(){
    console.log(this.fourthFormGroup.value);
  }

  form5(){
    console.log(this.fifthFormGroup.value);
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


  selectBannerWeek(data) {
    this.bannerWeek = data;

    // localStorage.setItem("boostStatus", '0');
    // this.checkBoostStatus = localStorage.getItem("boostStatus");

    this.finalCalculation = 7 + ((data - 1) * 5);
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

}
