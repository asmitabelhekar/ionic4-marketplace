import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {

  loginUserId : any;
  updateStatus = 0;
  userRole : any;
  getProfileDetail: any;
  profileModel : any = {};

  constructor(
    public router : Router,
    public apiCall : ApiService,
    public toast : ToastController,
    public activatedRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.loginUserId = localStorage.getItem('userId');
    this.userRole = localStorage.getItem('userRole');
    let getData = this.activatedRoute.snapshot.params['profileData'];
    this.getProfileDetail = JSON.parse(getData);
    console.log("getProfileDetail id:"+this.getProfileDetail.id);
    if(this.loginUserId == this.getProfileDetail.id){
      this.updateStatus = 0;
    }else{
      this.updateStatus = 1;
    }
    this.profileModel['name'] = this.getProfileDetail.name;
    this.profileModel['email'] = this.getProfileDetail.email;
    this.profileModel['contact'] = this.getProfileDetail.mobile;
    this.profileModel['password'] = this.getProfileDetail.password;
  }

  goBackword(){
    window.history.back();
  }

  updateProfileData(){
    console.log("profile name:"+this.profileModel['name']);
    console.log("profile email:"+this.profileModel['email']);
    console.log("profile contact:"+this.profileModel['contact']);

    let send_date = {};
    send_date['name'] = this.profileModel['name'];
    send_date['email'] = this.profileModel['email'];
    send_date['mobile'] = this.profileModel['contact'];
    send_date['isActive'] = 1;
    send_date['userRole'] = this.userRole;
    send_date['password'] = this.getProfileDetail.password;

    let url = environment.base_url + environment.version + "users/" + this.getProfileDetail.id ;
    this.apiCall.put(url, send_date).subscribe(MyResponse => {
      this.presentToast("Profile updated successfully.")
      this.router.navigate(['/profile']);
    }, error => {
    });
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
