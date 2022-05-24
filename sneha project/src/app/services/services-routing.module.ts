import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitechturaldesignComponent } from './architechturaldesign/architechturaldesign.component';
import { ConstructioncunsultantComponent } from './constructioncunsultant/constructioncunsultant.component';
import { HouserenovationComponent } from './houserenovation/houserenovation.component';
import { ReconstructionservicesComponent } from './reconstructionservices/reconstructionservices.component';

const routes: Routes = [
  {path:'architehturaldesign',component:ArchitechturaldesignComponent},
  {path:'constructioncunsultant',component:ConstructioncunsultantComponent},
  {path:'houserenovation',component:HouserenovationComponent},
  {path:'reconstructionservices',component:ReconstructionservicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
