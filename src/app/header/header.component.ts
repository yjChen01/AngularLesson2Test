import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword='';
  constructor() { }

  ngOnInit(): void {
  }

  titlesearch($event){
    console.log($event);
  }
}
