import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeArtisanPage } from './home-artisan.page';

const routes: Routes = [
  {
    path: '',
    component: HomeArtisanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeArtisanPageRoutingModule {}
