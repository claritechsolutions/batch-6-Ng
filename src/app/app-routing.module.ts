import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { TopbuilderModule } from './topbuilder/topbuilder.module';
import { MumbaicityComponent } from './mumbaicity/mumbaicity.component';
import { PunecityComponent } from './punecity/punecity.component';




const routes: Routes = [ 
 
  {path:'',component:LoginpageComponent},
  {path:'registerpage',component:RegisterpageComponent},
  {path:'mainsection',component:MainsectionComponent},
  {path:'mumbaicity',component:MumbaicityComponent},
  {path:'punecity',component:PunecityComponent},
  // {path:'topbuilder',loadChildren:()=>import('./topbuilder/topbuilder.module').then(mod=>mod.TopbuilderModule)},
  
  {path:'**',redirectTo:'loginpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
