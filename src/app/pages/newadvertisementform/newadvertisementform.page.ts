import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';


@Component({
  selector: 'app-newadvertisementform',
  templateUrl: './newadvertisementform.page.html',
  styleUrls: ['./newadvertisementform.page.scss'],
})
export class NewadvertisementformPage implements OnInit {
  fileToUpload : any;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  fourthFormGroup : FormGroup;
  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  urls = [];
  imageUrl = 0;

  
  constructor(
    private formBuilder: FormBuilder,
    public loader: LoaderService,
    public apiCall : ApiService) {}


  ngOnInit() {
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
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      // thirdCtrl: ['', Validators.required]
    });
  }

  checkData(data){
    console.log("check data:"+data);
  }

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
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
      if(index == 0){
        this.handleFirstFileInput(this.fileToUpload);
      }else if(index == 1){
        this.handleSecondFileInput(this.fileToUpload); 
      }else if(index == 2){
        this.handleThirdFileInput(this.fileToUpload);
      }else if(index == 3){
        this.handleFourthFileInput(this.fileToUpload);
      }else if(index == 4){
        this.handleFifthFileInput(this.fileToUpload);
      }else{
       
      }
    

    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }



  handleFirstFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls[0]= MyResponse['result'][0];
      
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

        this.urls[1]= MyResponse['result'][0];
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
        this.urls[2]= MyResponse['result'][0];
       
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

        this.urls[3]= MyResponse['result'][0];
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

        this.urls[4]= MyResponse['result'][0];
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
