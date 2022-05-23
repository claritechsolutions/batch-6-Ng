import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { RouterModule, Routes } from '@angular/router';


const route:Routes=[

{path:'aboutus',component:AboutusComponent},
{path:'futurework',component:FutureworkComponent},
{path:'facilities',component:FacilitiesComponent},


]
@NgModule({
  declarations: [
    AboutusComponent,
    FacilitiesComponent,
    FutureworkComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
