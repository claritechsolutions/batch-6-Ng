import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
public loginpage!:FormGroup;
public temp:any;
  constructor( private Rk:FormBuilder,private api:ApiService,private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.loginpage=this.Rk.group({
      name:['',Validators.required],
      mobile:['',Validators.required]
    })
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getAllClient().subscribe((res)=>{console.log(res);
    this.temp=res;})
  }
  login(){
    this.http.get<any>("http://localhost:3000/posts").
    subscribe(res=>{const user = res.find((a:any)=>{
            return a.name===this.loginpage.value.name && 
            a.mobile===this.loginpage.value.mobile});
            if (user) {
              alert ("login Successfull!!");
              this.loginpage.reset();
              this.router.navigate(['mainsection']);
            }else { alert("Details not Found!!...Please Register Yourself")}
       },err=>{alert("Somthing went Wrong");}
          )}


          get f(){
            return this.loginpage.controls;
         
          }

          onSubmit(){}
  }

