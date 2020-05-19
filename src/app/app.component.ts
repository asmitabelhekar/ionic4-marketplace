import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoaderService } from './service/loaderservice/loader.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { HomePage } from './home/home.page';
import { AdvertisementdetailPage } from './pages/advertisementdetail/advertisementdetail.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

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
    public alertCtrl : AlertController,
    public preloader : LoaderService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public deeplinks : Deeplinks
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

      this.deeplinks.route({
        '/home': HomePage,
        '/universal-links-test': AdvertisementdetailPage,
        '/advertisement/:advertisementId': AdvertisementdetailPage
      }).subscribe(match => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
      }, nomatch => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
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
