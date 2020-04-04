import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupPage } from './pages/popup/popup.page';
import { FilterpopupComponent } from './filterpopup/filterpopup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
     PopupPage],
  entryComponents: [PopupPage],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
