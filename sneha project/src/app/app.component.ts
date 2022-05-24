import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
constructor(private route:Router){
  
}

onport()
{
  console.log("hello");
// this.route.navigateByUrl('satara');

}

 
  















}