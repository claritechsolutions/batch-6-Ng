import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationalComponent } from './educational/educational.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidentalComponent } from './residental/residental.component';

const routes: Routes = [
  {path:'educational',component:EducationalComponent},
  {path:'commercial',component:CommercialComponent},
  {path:'industrial',component:IndustrialComponent},
  {path:'residental',component:ResidentalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
