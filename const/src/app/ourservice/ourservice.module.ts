import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectrualDesignComponent } from './architectrual-design/architectrual-design.component';
import { ConstructionConsultantComponent } from './construction-consultant/construction-consultant.component';
import { HouseRenovationComponent } from './house-renovation/house-renovation.component';
import { ReconstructionServiceComponent } from './reconstruction-service/reconstruction-service.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'architectrual-design',component:ArchitectrualDesignComponent},
  {path:'construction-consultant',component:ConstructionConsultantComponent},
  {path:'house-renovation',component:HouseRenovationComponent},
  {path:'reconstruction-service',component:ReconstructionServiceComponent}
  
  ]

@NgModule({
  declarations: [
    ArchitectrualDesignComponent,
    ConstructionConsultantComponent,
    HouseRenovationComponent,
    ReconstructionServiceComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class OurserviceModule { }
