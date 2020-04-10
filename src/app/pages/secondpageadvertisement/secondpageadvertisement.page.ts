import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-secondpageadvertisement',
  templateUrl: './secondpageadvertisement.page.html',
  styleUrls: ['./secondpageadvertisement.page.scss'],
})
export class SecondpageadvertisementPage implements OnInit {
  getData: any;
  fileToUpload: any;
  profilePic : any;
  usersId : any;
  imageUrl  = 1;
  urls  = [];
  submitAdvertisementData
  advertisementModel: any = {};

  constructor(
    public activatedRoute: ActivatedRoute,
    public router : Router,
    public apiCall : ApiService)
     { }
  ngOnInit() {
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
    console.log("show advertisement data:" + (this.getData.title));
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

    this.submitAdvertisementData = {
      "title" : this.getData.title,
      "description" : this.getData.description,
      "price" : this.getData.price,
      "lattitude" : this.getData.lattitude,
      "longitude" : this.getData.longitude,
      "address" : this.getData.address,
      "gender" : this.getData.gender,
      "languages" : this.getData.languages,
      "email" : this.getData.email,
      "mobile" : this.getData.mobile,
      "categoryId" : this.getData.categoryId,
      "startDateTime" : this.advertisementModel['fromdate'],
      "endDateTime" : this.advertisementModel['todate'],
      "isActive" : 0,
      "images" : this.urls
    }

    let send_date = {};
              send_date['title'] = this.getData.title;
              send_date['description'] = this.getData.description;
              send_date['price'] = this.getData.price;
              send_date['latitude'] = this.getData.lattitude;
              send_date['longitude'] = this.getData.longitude;
              send_date['address'] = this.getData.address;
              send_date['gender'] = this.getData.gender;
              send_date['languages'] = this.getData.languages;
              send_date['email'] = this.getData.email;
              send_date['mobile'] = this.getData.mobile;
              send_date['categoryId'] = this.getData.categoryId;
              send_date['startDateTime'] = 0;
              send_date['endDateTime'] = 0;
              send_date['isActive'] = 0;
              send_date['images'] = this.urls;
              // send_date['transaction'] = "credited";

              this.usersId = localStorage.getItem("userId");
              let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
              this.apiCall.post(url, send_date).subscribe(MyResponse => {
              this.router.navigate(['/home']);
              }, error => {
              })
  }
}
