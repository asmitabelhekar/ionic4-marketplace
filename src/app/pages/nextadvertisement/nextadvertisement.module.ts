import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextadvertisementPageRoutingModule } from './nextadvertisement-routing.module';

import { NextadvertisementPage } from './nextadvertisement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextadvertisementPageRoutingModule
  ],
  declarations: [NextadvertisementPage]
})
export class NextadvertisementPageModule {}
