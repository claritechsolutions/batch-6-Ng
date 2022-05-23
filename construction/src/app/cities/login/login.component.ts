import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/all-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm:any;
  constructor(private fb:FormBuilder, private LogData:AllServicesService, private route:Router) {
    this.myForm=this.fb.group({
      email:[''],
      loginpass:['']
    });
   }



  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.myForm.value);
    this.LogData.getAllRegistrationData().subscribe((res:any)=>{
      console.log(res);
      for(let i=0; i < res.length; i++){
        if(res[i].email==this.myForm.value.email && res[i].password==this.myForm.this.value.loginpass){
          confirm("Login Successfully");
        }
      } 
    })
  }
  onRegister(){
    this.route.navigate(['cities/register']);
  }

}

