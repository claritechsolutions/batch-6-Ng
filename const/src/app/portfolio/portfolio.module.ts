import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationalComponent } from './educational/educational.component';
import { IndutrialComponent } from './indutrial/indutrial.component';
import { ResidentialComponent } from './residential/residential.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'commercial',component:CommercialComponent},
  {path:'education',component:EducationalComponent},
  {path:'indutrial',component:IndutrialComponent},
  {path:'residential',component:ResidentialComponent}
  ]

@NgModule({
  declarations: [
    CommercialComponent,
    EducationalComponent,
    IndutrialComponent,
    ResidentialComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PortfolioModule { }
