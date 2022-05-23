import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component'
import { FormsModule } from '@angular/forms';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MumbaicityComponent } from './mumbaicity/mumbaicity.component';
import { PunecityComponent } from './punecity/punecity.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    MainsectionComponent,
    MumbaicityComponent,
    PunecityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
