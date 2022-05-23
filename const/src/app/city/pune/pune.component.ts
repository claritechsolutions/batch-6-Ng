import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
public value:any;
public table1:any;
public table2:any;
public table3:any;
public table4:any;
  constructor(private data:DataserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getalldata();
  }

getalldata(){
  this.data.getDate().subscribe((res:any)=>{
    console.log(res);
    this.value=res;
    this.table1=res[0];
    this.table2=res[1];
    this.table3=res[2];
    this.table4=res[3];
    
  })
}

}
