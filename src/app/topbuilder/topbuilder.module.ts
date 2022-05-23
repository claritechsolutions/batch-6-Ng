import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:PuneComponent},
  {path:'mumbai',component:MumbaiComponent},
]

@NgModule({
  declarations: [
    PuneComponent,
    MumbaiComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class TopbuilderModule { }
