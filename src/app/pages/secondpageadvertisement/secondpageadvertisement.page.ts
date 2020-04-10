import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';


@Component({
  selector: 'app-secondpageadvertisement',
  templateUrl: './secondpageadvertisement.page.html',
  styleUrls: ['./secondpageadvertisement.page.scss'],
})
export class SecondpageadvertisementPage implements OnInit {
  getData: any;
  fileToUpload: any;
  profilePic : any;
  imageUrl  = 1;
  urls  = [];
  advertisementModel: any = {};
  constructor(
    public activatedRoute: ActivatedRoute,
    public apiCall : ApiService)
     { }
  ngOnInit() {
  }

  detectEventGallery(event) {
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
      this.handleFileInput(this.fileToUpload); // 1 for event gallery upload 
    }
    console.log("file uploaded::"+JSON.stringify(this.fileToUpload));
  }


  handleFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        if(this.urls.length > 4)
        {
          this.imageUrl = 0;
        }else{
          this.imageUrl = 1;
        }
        
        this.profilePic = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }

  goBackword(){
    window.history.back();
  }

  submmitAdvertisementData(data){

  }
}
