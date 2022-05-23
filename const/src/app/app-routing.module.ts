import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
{path:'city',loadChildren:()=>import('./city/city.module').then(mod=>mod.CityModule)},
{path:'ourservice',loadChildren:()=>import('./ourservice/ourservice.module').then(mod=>mod.OurserviceModule)},
{path:'portfolio',loadChildren:()=>import('./portfolio/portfolio.module').then(mod=>mod.PortfolioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
