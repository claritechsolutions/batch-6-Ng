import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public link:any;
  public case1:any= "+9876543210";
  public case2:any= "kharatsushant608@gmail.com";

  date = new Date();

  
  constructor() { }

  ngOnInit(): void {
    this.link="http://facebook.com/";
    this.link="http://instagram.com/";
  }

}
