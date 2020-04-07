import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostadvertisementPageRoutingModule } from './postadvertisement-routing.module';

import { PostadvertisementPage } from './postadvertisement.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    FlexLayoutModule,
    PostadvertisementPageRoutingModule
  ],
  declarations: [PostadvertisementPage]
})
export class PostadvertisementPageModule {}
