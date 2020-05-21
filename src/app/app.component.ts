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
import { ChatlistPage } from './pages/chatlist/chatlist.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';

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
    public zone : NgZone,
    public storage : Storage,
    public fcm : FCM,
    public localNotifications : LocalNotifications
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
      
      this.fcmNotification();

      this.localNotifications.on('click').subscribe(notification => {
        console.log('Notification str: ' + JSON.stringify(notification))
        // console.log('Notification parse: ' + JSON.parse(notification))
        
        let json = notification.data

     
      })

      this.platform.backButton.subscribe(() => {
        if (this.router.url === '/home' ) {
          this.presentAlert()
          return
        }
      });



      this.deeplinks.route( {
      "/" : {}
      }).subscribe((match) => {

      // alert("show success id:"+JSON.stringify(match));
      // alert("show success categoryId:"+(match.$link.id));
      // alert("show success categoryId:"+(match.$link.queryString.categoryId));
      let sendId = {
        "id": match.$args.id,
        "categoryId": match.$args.categoryId,
        "status": "category",
        "adType": 1
      }
     
      this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);

        console.log('Successfully routed', match);
      }, (nomatch) => {
        // alert("show failure:"+JSON.stringify(nomatch));
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


  fcmNotification() {
    this.fcm.getToken().then(token => {
      console.log("TOKEN: " + token)
      this.storage.set('token',token).then(()=>{

      })
      // alert(token);
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
        // alert("Received in BG: " + JSON.stringify(data))
      } else {
        console.log("Received in foreground");
        
        // alert("Received in foreground: " + JSON.stringify(data))
        this.localNotifications.schedule({
          id: 1,
          title: data.title,
          text: data.body,
          foreground: true,
          sound: "default",
          trigger: { at: new Date() },
          icon: 'https://www.keralanikah.com/assets/assisted/images/blog/googl_files/big-facebook-icon.jpg',
          actions: "FCM_PLUGIN_ACTIVITY",
          data: {
            mydata: data,
            type: ""
          }
          // sound: default
          // trigger: { every: { hour: 9, minute: 30 } }
        });
        // this.localNotifications.getAll().then((res: ILocalNotification[]) => {
        //   console.log('Get All: ' + JSON.stringify(res));
        // })
      };
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
