import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit {

  constructor(private router: Router) { }
  public data:any;
  public data1:any;
   
  ngOnInit(): void {
    this.data= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur ratione ullam officia illum, itaque ad nisi. Saepe ducimus nulla, perferendis provident labore, odio, ab placeat dolorum commodi vel veniam."
    this.data1= "Building isn’t just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality."
    
  }
  Address:string ="1379 Shoreline Parkway, Mountain View, CA 94043, United States"
Phone:string='+1 718-999-3939'
Email:string='contact@construction.com'
aboutus:string="Building isn't just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality."

naviagteToMumbaicity(){
  this.router.navigate(['mumbaicity']);
}
naviagteToPunecity(){
  this.router.navigate(['punecity']);
}

}
