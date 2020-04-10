import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';

@Component({
  selector: 'app-nextadvertisement',
  templateUrl: './nextadvertisement.page.html',
  styleUrls: ['./nextadvertisement.page.scss'],
})
export class NextadvertisementPage implements OnInit {

  getData: any;
  fileToUpload
  profilePic : any;
  urls  = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public apiCall : ApiService)
     { }

  ngOnInit() {
    // this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
    // console.log("show advertisement data:" + (this.getData.title));
  }

  goBackword(){
    window.history.back();
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
        this.profilePic = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }
}
