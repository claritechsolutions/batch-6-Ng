import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public no:any='+3243 555 454';
public mail:any='constech@gamil.com';
date=new Date();
public link:any;
public link1:any;
public link2:any;
public link3:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
this.link="https://twitter.com/"
this.link1="https://facebook.com/"
this.link2="https://instagram.com/"
this.link3="https://google.com/"


  }
  onport()
  {
this.route.navigate(['portfolio']);


  }

}
