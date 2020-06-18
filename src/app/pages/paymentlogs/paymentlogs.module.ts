import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentlogsPageRoutingModule } from './paymentlogs-routing.module';

import { PaymentlogsPage } from './paymentlogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentlogsPageRoutingModule
  ],
  declarations: [PaymentlogsPage]
})
export class PaymentlogsPageModule {}
