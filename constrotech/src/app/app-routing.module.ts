import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HomeModule } from './home/home.module';
import { PortfolioModule } from './portfolio/portfolio.module';


const routes: Routes =
 [
  
  {path:'home', loadChildren :()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'portfolio', loadChildren :()=>import('./portfolio/portfolio.module').then(mod=>mod.PortfolioModule)},
  {path:'cities', loadChildren :()=>import('./cities/cities.module').then(mod=>mod.CitiesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
