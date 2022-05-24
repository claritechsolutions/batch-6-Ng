import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationalComponent } from './educational/educational.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidentalComponent } from './residental/residental.component';


@NgModule({
  declarations: [
    CommercialComponent,
    EducationalComponent,
    IndustrialComponent,
    ResidentalComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
