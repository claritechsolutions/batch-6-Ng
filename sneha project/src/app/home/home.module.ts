import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { Home1Component } from './home1/home1.component';


@NgModule({
  declarations: [
    AboutusComponent,
    FacilitesComponent,
    FutureworkComponent,
    Home1Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
