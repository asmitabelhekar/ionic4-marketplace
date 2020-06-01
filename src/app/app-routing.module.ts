import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'sliderintro', pathMatch: 'full' },
  // { path: 'sliderintro', loadChildren: () => import('./pages/sliderintro/sliderintro.module').then( m => m.SliderintroPageModule)},
  { path : 'login' , loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
  {
    path: 'popup',
    loadChildren: () => import('./pages/popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'chatlist',
    loadChildren: () => import('./pages/chatlist/chatlist.module').then( m => m.ChatlistPageModule)
  },
  {
    path: 'detailchat',
    loadChildren: () => import('./pages/detailchat/detailchat.module').then( m => m.DetailchatPageModule)
  },
  {
    path: 'postadvertisement',
    loadChildren: () => import('./pages/postadvertisement/postadvertisement.module').then( m => m.PostadvertisementPageModule)
  },
  {
    path: 'showfilterdata',
    loadChildren: () => import('./pages/showfilterdata/showfilterdata.module').then( m => m.ShowfilterdataPageModule)
  },
  {
    path: 'nextadvertisement',
    loadChildren: () => import('./pages/nextadvertisement/nextadvertisement.module').then( m => m.NextadvertisementPageModule)
  },
  {
    path: 'secondpageadvertisement',
    loadChildren: () => import('./pages/secondpageadvertisement/secondpageadvertisement.module').then( m => m.SecondpageadvertisementPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'advertisementdetail',
    loadChildren: () => import('./pages/advertisementdetail/advertisementdetail.module').then( m => m.AdvertisementdetailPageModule)
  },
  {
    path: 'orderhistory',
    loadChildren: () => import('./pages/orderhistory/orderhistory.module').then( m => m.OrderhistoryPageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./pages/updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'checkinternet',
    loadChildren: () => import('./pages/checkinternet/checkinternet.module').then( m => m.CheckinternetPageModule)
  },
  {
    path: 'notificationlist',
    loadChildren: () => import('./pages/notificationlist/notificationlist.module').then( m => m.NotificationlistPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
