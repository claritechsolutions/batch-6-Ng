import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilites',
  templateUrl: './facilites.component.html',
  styleUrls: ['./facilites.component.css']
})
export class FacilitesComponent implements OnInit {
  public h1:any="Our Facilities";
  public h2:any="Our site campus";
  public h3:any="Site facilities";
  public h4:any="Facilites on site";
  public h5:any=" On how to overcome the work...";
i1="../../../assets/img/fimg1.png"
i2="../../../assets/img/fimg2.png"
i3="../../../assets/img/fimg3.png"
i4="../../../assets/img/fimg5.png"
  constructor() { }

  ngOnInit(): void {
  }

}
