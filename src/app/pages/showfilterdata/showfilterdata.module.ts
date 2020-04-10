import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowfilterdataPageRoutingModule } from './showfilterdata-routing.module';

import { ShowfilterdataPage } from './showfilterdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowfilterdataPageRoutingModule
  ],
  declarations: [ShowfilterdataPage]
})
export class ShowfilterdataPageModule {}
