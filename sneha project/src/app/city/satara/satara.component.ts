import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareserviceService } from 'src/app/shareservice.service';

@Component({
  selector: 'app-satara',
  templateUrl: './satara.component.html',
  styleUrls: ['./satara.component.css']
})
export class SataraComponent implements OnInit {
public value:any;
public table1:any;
  constructor(private dt:ShareserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getalldata();
  }
getalldata()
{
  this.dt.getdata2().subscribe((res:any)=>{
    console.log(res);
    this.value=res;
    this.table1=res[0];
  })
}
}
