import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
  {path:'',component:Home1Component},
{path:'aboutus',component:AboutusComponent},
{path:'facilities',component:FacilitesComponent},
{path:'futurework',component:FutureworkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
