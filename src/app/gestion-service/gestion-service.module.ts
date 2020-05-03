import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionServicePageRoutingModule } from './gestion-service-routing.module';

import { GestionServicePage } from './gestion-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionServicePageRoutingModule
  ],
  declarations: [GestionServicePage]
})
export class GestionServicePageModule {}
