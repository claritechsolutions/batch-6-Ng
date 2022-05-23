import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public link:any;
public link1:any;
public link2:any;
public link3:any;
public phone:any="+1 718-999-3939";
public email:any="construction@.com";
  constructor() { }
  date=new Date();

  ngOnInit(): void {
    this.link="https://facebook.com/";
    this.link1="https://twitter.com/";
    this.link2="https://instagram.com/";
    this.link3="https://google.co.in/";
   

  }

 
  

}
