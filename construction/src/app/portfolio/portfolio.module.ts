import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationComponent } from './education/education.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidentialComponent } from './residential/residential.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[
  {path:'commercial', component:CommercialComponent},
  {path:'education', component:EducationComponent},
  {path:'industrial', component:IndustrialComponent},
  {path:'residential', component:ResidentialComponent}
]

@NgModule({
  declarations: [
    CommercialComponent,
    EducationComponent,
    IndustrialComponent,
    ResidentialComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PortfolioModule { }
