import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ArchitechturaldesignComponent } from './architechturaldesign/architechturaldesign.component';
import { HouserenovationComponent } from './houserenovation/houserenovation.component';
import { ConstructioncunsultantComponent } from './constructioncunsultant/constructioncunsultant.component';
import { ReconstructionservicesComponent } from './reconstructionservices/reconstructionservices.component';


@NgModule({
  declarations: [
    ArchitechturaldesignComponent,
    HouserenovationComponent,
    ConstructioncunsultantComponent,
    ReconstructionservicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
