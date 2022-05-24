import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

public case1:any='History';
public case2:any='Team & Awards';
public case3:any='Community';
public case4:any='News & Events';
public case5:any='FAQ';
public case6:any='Contact Us';





  constructor() { }

  ngOnInit(): void {
  }

}
