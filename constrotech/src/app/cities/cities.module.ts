import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { RouterModule, Routes } from '@angular/router';
import { GoalGangaComponent } from './pune/goal-ganga/goal-ganga.component';
import { LComponent } from './pune/l/l.component';
import { ParlComponent } from './pune/parl/parl.component';
import { NyathiDComponent } from './pune/nyathi-d/nyathi-d.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route: Routes=[
  {path:'mumbai', component:MumbaiComponent},
  {path:'pune', component:PuneComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent}
]


@NgModule({
  declarations: [
    PuneComponent,
    MumbaiComponent,
    GoalGangaComponent,
    LComponent,
    ParlComponent,
    NyathiDComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class CitiesModule { }
