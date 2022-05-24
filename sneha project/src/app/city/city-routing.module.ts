import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NashikComponent } from './nashik/nashik.component';
import { SataraComponent } from './satara/satara.component';

const routes: Routes = [
  {path:'satara',component:SataraComponent},
  {path:'nashik',component:NashikComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
