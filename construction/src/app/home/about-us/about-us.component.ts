import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/all-services.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public aboutData:any;
  constructor(private AbData:AllServicesService) {
    this.AbData.getAoutUsInfo().subscribe((res:any)=>{
      console.log(res);
      this.aboutData = res;
    });
    
    this.AbData.getAboutUsImages().subscribe((res:any)=>{
      console.log(res);
    });
   }

  ngOnInit(): void {
  }

}
