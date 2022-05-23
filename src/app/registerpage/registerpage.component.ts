import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { RegisterModel } from './registerpagemodel';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
public registerForm!:FormGroup;
registerModelObj: RegisterModel = new RegisterModel();
  constructor(private bk:FormBuilder,private router:Router,private http:HttpClient,private api:ApiService) { }

  ngOnInit(): void {
    this.registerForm=this.bk.group({
      name:[''],
      mobile:[''],
      email:[''],
      address:[''],
      enquiry:[''],

    })
  }



  Register(){
    this.http.post<any>("http://localhost:3000/posts",this.registerForm.value)
    .subscribe(res=>{ alert("Registration Succesful!!");
      this.registerForm.reset();
      this.router.navigate(['loginpage']);},
      err=>{alert("Opps Somthing is Wrong")} );
    }

    

  
    postClientDetails(){
      this.registerModelObj.id=this.registerForm.value.id;
      this.registerModelObj.name = this.registerForm.value.name;
      this.registerModelObj.mobile = this.registerForm.value.mobile;
      this.registerModelObj.address= this.registerForm.value.address;
      this.registerModelObj.enquiry=this.registerForm.value.enquiry;
     
  
      this.api.postClient( this.registerModelObj).subscribe(res=>{
        console.log(res);
        this.registerForm
        },err=>{
        alert("Somthing went Wrong")
      })
    }  


}
