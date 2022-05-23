import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/all-services.service';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
  public constroCompanyName:any =['Goel Ganga Constructions', 'Larsons And Turbo Constructions', 'Nyathi Constructions', 'Parel Developers'];
  public puneAddress:any;
  public puneAddressOf1:any;
  public puneAddressOf2:any;
  public puneAddressOf3:any;

  constructor(private ShareService:AllServicesService, private routes:Router) { }

  ngOnInit(): void {
    
    this.getData();
  }
  getData(){
    this.ShareService.getPuneAddress().subscribe((res:any)=>{
      console.log(res);
      this.puneAddress= res[0];
      this.puneAddressOf1= res[1];
      this.puneAddressOf2= res[2];
      this.puneAddressOf3= res[3];
    })
  }
  onGoelGanga(){}
  onBtnGanga(){}
  onLarsons(){}
  onBtnLarsons(){}
  onNyathi(){}
  onBtnNyathi(){}
  onParel(){}
  onBtnParel(){}
  onLogin(){
    this.routes.navigate(['cities/login']);
  }
  onRegister(){
    this.routes.navigate(['cities/register']);
  }


  
}
