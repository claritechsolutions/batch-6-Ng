import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareserviceService } from 'src/app/shareservice.service';

@Component({
  selector: 'app-nashik',
  templateUrl: './nashik.component.html',
  styleUrls: ['./nashik.component.css']
})
export class NashikComponent implements OnInit {
public value:any;
public table1:any;
public table2:any;
public table3:any;
public table4:any;
public table5:any;
public table6:any;


  constructor(private data: ShareserviceService, private route: Router) { }

  ngOnInit(): void {
    this.getalldata();
}
getalldata()
{
  this.data.getdata().subscribe((res:any)=>{
    console.log(res);
    this.value=res;
    this.table1=res[0];
    this.table2=res[1];
    this.table3=res[2];
    this.table4=res[3];
    this.table5=res[4];
    this.table6=res[5];

  })

}

}




