import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtigodetailPageRoutingModule } from './artigodetail-routing.module';

import { ArtigodetailPage } from './artigodetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtigodetailPageRoutingModule
  ],
  declarations: [ArtigodetailPage]
})
export class ArtigodetailPageModule {}
