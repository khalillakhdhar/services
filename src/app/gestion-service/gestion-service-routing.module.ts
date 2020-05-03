import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionServicePage } from './gestion-service.page';

const routes: Routes = [
  {
    path: '',
    component: GestionServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionServicePageRoutingModule {}
