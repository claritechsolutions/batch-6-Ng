import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { SataraComponent } from './satara/satara.component';
import { NashikComponent } from './nashik/nashik.component';
import { GgconstComponent } from './nashik/ggconst/ggconst.component';
import { LComponent } from './nashik/l/l.component';
import { NayaconstComponent } from './nashik/nayaconst/nayaconst.component';
import { PareldComponent } from './nashik/pareld/pareld.component';
import { TTinfraComponent } from './nashik/ttinfra/ttinfra.component';
import { TidComponent } from './nashik/tid/tid.component';


@NgModule({
  declarations: [
    SataraComponent,
    NashikComponent,
    GgconstComponent,
    LComponent,
    NayaconstComponent,
    PareldComponent,
    TTinfraComponent,
    TidComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
