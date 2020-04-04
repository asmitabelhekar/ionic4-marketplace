import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupPageRoutingModule } from './popup-routing.module';

import { PopupPage } from './popup.page';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    PopupPageRoutingModule
  ],
  declarations: [PopupPage]
})
export class PopupPageModule {}
