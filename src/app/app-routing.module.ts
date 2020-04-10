import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
