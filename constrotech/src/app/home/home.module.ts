import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FutureWorkComponent } from './future-work/future-work.component';
import { OffersComponent } from './offers/offers.component';
import { Router, RouterModule, Routes} from '@angular/router';

const route: Routes =[
  {path:'about-us', component:AboutUsComponent},
  {path:'future-work', component:FutureWorkComponent},
  {path:'offers', component:OffersComponent},
]

@NgModule({
  declarations: [
    AboutUsComponent,
    FutureWorkComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
