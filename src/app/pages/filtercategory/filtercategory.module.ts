import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltercategoryPageRoutingModule } from './filtercategory-routing.module';

import { FiltercategoryPage } from './filtercategory.page';
import { SharedcategoryModule } from 'src/app/components/sharedcategory/sharedcategory.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltercategoryPageRoutingModule,
    RouterModule.forChild([
     {
       path : '',
       component : FiltercategoryPage
     }
    ]),
    SharedcategoryModule
  ],
  declarations: [FiltercategoryPage]
})
export class FiltercategoryPageModule {}
