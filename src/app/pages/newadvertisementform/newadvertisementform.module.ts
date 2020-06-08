import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewadvertisementformPageRoutingModule } from './newadvertisementform-routing.module';

import { NewadvertisementformPage } from './newadvertisementform.page';
import { MatStepperModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NewadvertisementformPageRoutingModule
  ],
  declarations: [NewadvertisementformPage]
})
export class NewadvertisementformPageModule {}
