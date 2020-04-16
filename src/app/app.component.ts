import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoaderService } from './service/loaderservice/loader.service';

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
    public preloader : LoaderService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    });
  }

  loginSession(){
    let loginStatus = localStorage.getItem("loginStatus");
    if(loginStatus == "yes"){
      this.router.navigate(['/home']);
    }else{
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
