import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/all-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public myRegistrationForm:any;
  constructor(private RegisterData:AllServicesService, private fb1:FormBuilder, private routes:Router) {
    this.myRegistrationForm= this.fb1.group({
        name:[''],
        address:[''],
        contact:[''],
        email:[''],
        password:[''],
        role:['']
    });
   }
  ngOnInit(): void {
  }
  onRegister(){}

}
