import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mumbaicity',
  templateUrl: './mumbaicity.component.html',
  styleUrls: ['./mumbaicity.component.css']
})
export class MumbaicityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit id aliquam vitae delectus. Doloribus facilis saepe ea exercitationem, quasi sequi id eveniet debitis distinctio nisi ipsam pariatur quas dolore ad."
  Address:string ="1379 Shoreline Parkway, Mountain View, CA 94043, United States"
  Phone:string='+1 718-999-3939'
  Email:string='contact@construction.com'
  aboutus:string="Building isn't just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality."

}
