import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigodetailPage } from './artigodetail.page';

const routes: Routes = [
  {
    path: '',
    component: ArtigodetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtigodetailPageRoutingModule {}
