import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nextadvertisement',
  templateUrl: './nextadvertisement.page.html',
  styleUrls: ['./nextadvertisement.page.scss'],
})
export class NextadvertisementPage implements OnInit {

  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  getData: any;
  getNextData : any;
  selectedLanguages: any;
  fileToUpload
  profilePic: any;
  urls = [];
  advertisementModel: any = {};
  languagesArray = [];
  imageUrl = 0;

  
  constructor(
    public activatedRoute: ActivatedRoute,
    public loader: LoaderService,
    public router : Router,
    public toast : ToastController,
    public apiCall: ApiService) { }


  languageArray = [
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Marathi" },
    { id: 4, name: "Gujrati" },
    { id: 5, name: "Bangali" }
  ]
  ngOnInit() {
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
    console.log("next advertisement data:" + (this.getData.title));
  }

  goBackword() {
    window.history.back();
  }

  detectEventGallery(event, index) {
    this.loader.presentLoading();
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
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        // for (let i = 0; i < this.urls.length; i++) {
        //   let checkUrlLength = this.urls.length;
        //   if (checkUrlLength == 1) {
        //     this.firstImage = this.urls[0];
        //   }
        //   else if (checkUrlLength == 2) 
        //   {
        //     this.firstImage = this.urls[0];
        //     this.secondImage = this.urls[1];
        //   } else if (checkUrlLength == 3) {
        //     this.firstImage = this.urls[0];
        //     this.secondImage = this.urls[1];
        //     this.thirdImage = this.urls[2];
        //   } else if (checkUrlLength == 4) {
        //     this.firstImage = this.urls[0];
        //     this.secondImage = this.urls[1];
        //     this.thirdImage = this.urls[2];
        //     this.fourthImage = this.urls[3];
        //   } else if (checkUrlLength == 5) {
        //     this.firstImage = this.urls[0];
        //     this.secondImage = this.urls[1];
        //     this.thirdImage = this.urls[2];
        //     this.fourthImage = this.urls[3];
        //     this.fifthImage = this.urls[4];
        //   } else {

        //   }
        // }
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.stopLoading();
        this.firstImage = MyResponse['result']['url'];
        console.log("print url resonce:" + this.firstImage);
      }, error => {
        this.loader.stopLoading();
        console.log(error);

      }
    );
  }

  handleSecondFileInput(files: FileList) {
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
        this.loader.stopLoading();
        this.secondImage = MyResponse['result']['url'];
        console.log("print url secondImage:" + this.secondImage);
      }, error => {
        this.loader.stopLoading();
        console.log(error);

      }
    );
  }

  handleThirdFileInput(files: FileList) {
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
        this.loader.stopLoading();
        this.thirdImage = MyResponse['result']['url'];
        console.log("print url thirdImage:" + this.thirdImage);
      }, error => {
        this.loader.stopLoading();
        console.log(error);

      }
    );
  }

  handleFourthFileInput(files: FileList) {
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
        this.loader.stopLoading();
        this.fourthImage = MyResponse['result']['url'];
        console.log("print url fourthImage:" + this.fourthImage);
      }, error => {
        this.loader.stopLoading();
        console.log(error);

      }
    );
  }

  handleFifthFileInput(files: FileList) {
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
        this.loader.stopLoading();
        this.fifthImage = MyResponse['result']['url'];
        console.log("print url fifthImage:" + this.fifthImage);
      }, error => {
        this.loader.stopLoading();
        console.log(error);

      }
    );
  }


  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
  next(){
    
    if(this.urls.length == 0) {
     this.presentToast("Please upload images");
    }else {
      this.getNextData = {
        "title": this.getData.title,
      "description": this.getData.description,
      "lattitude": this.getData.lattitude,
      "longitude": this.getData.longitude,
      "address": this.getData.address,
      "gender": this.getData.gender,
      "languages": this.getData.languages,
      "email": this.getData.email,
      "categoryId": this.getData.categoryId,
      "price" : this.advertisementModel['price'],
      "contact" : this.advertisementModel['contact'],
      "images" : this.urls
  
      }
  // alert("show data:"+this.getNextData);
      this.router.navigate(['/secondpageadvertisement' , { FinalObject : JSON.stringify(this.getNextData)}])
    }
   

  }
}
