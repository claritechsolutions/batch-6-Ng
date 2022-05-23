import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { HomeModule } from './home/home.module';
import { OurserviceModule } from './ourservice/ourservice.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { HeaderComponent } from './head,footer/header/header.component';
import { FooterComponent } from './head,footer/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule,
    HomeModule,
    OurserviceModule,
    PortfolioModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
