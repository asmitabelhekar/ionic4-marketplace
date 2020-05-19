import { Component , ViewChild} from '@angular/core';
import {App, Nav} from 'ionic-angular';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoaderService } from './service/loaderservice/loader.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { HomePage } from './home/home.page';
import { AdvertisementdetailPage } from './pages/advertisementdetail/advertisementdetail.page';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  @ViewChild(NavController, {static :false}) navChild:NavController;
  loadingBlock;
  appPages = [
    {
      title: 'Home',
      url: '/home',

    },
    {
      title: 'Chat List',
      url: '/chatlist',

    },
    {
      title: 'Profile',
      url: '/profile',

    },
    {
      title: 'Post Advertisement',
      url: '/postadvertisement',

    },
    {
      title: 'Log Out',
      url: '/',

    }
  ];
  constructor(
    private platform: Platform,
    public router : Router,
    public navController: NavController,
    public alertCtrl : AlertController,
    public preloader : LoaderService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public deeplinks : Deeplinks,
    public zone : NgZone
  ) {
    this.initializeApp();
  }


   
  ngOnInit() {
    this.preloader.blockingLoaderAuth.subscribe(event => {
      this.loadingBlock = event;
    });
  }
  

  initializeApp() {
    this.preloader.showBlockingLoaderAuth();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loginSession();
      
      this.platform.backButton.subscribe(() => {
        if (this.router.url === '/home' ) {
          this.presentAlert()
          return
        }
      });



      this.deeplinks.route( {
        '/home': HomePage,
        '/advertisementdetail': AdvertisementdetailPage,
        '/advertisementdetail/:id': 53
      }).subscribe((match) => {

        let sendId = {
          "id": 53,
          "categoryId": 5,
          "status": "category",
          "adType": 1
        }
      
        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });

     

      // this.platform.backButton.subscribeWithPriority(9999, () => {
      //   document.addEventListener('backbutton', function (event) {
      //     event.preventDefault();
      //     event.stopPropagation();
      //     console.log('hello');
      //   }, false);
      // });
    });
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Do you want to exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            // this.platform.;
            navigator['app'].exitApp()
          }
        }
      ]
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  loginSession(){
    let loginStatus = localStorage.getItem("loginStatus");
    if(loginStatus == "yes"){
      this.router.navigate(['/home']);
    }else{
      // this.router.navigate(['/sliderintro']);
      this.router.navigate(['/login']);
    }
    this.preloader.hideBlockingLoaderAuth();
  }
  sideMenuClicked(pages) {
    if (pages == "Log Out") {
      localStorage.setItem("loginStatus", "no");
    }
  }
}
