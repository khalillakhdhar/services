import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeArtisanPageRoutingModule } from './home-artisan-routing.module';

import { HomeArtisanPage } from './home-artisan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeArtisanPageRoutingModule
  ],
  declarations: [HomeArtisanPage]
})
export class HomeArtisanPageModule {}
