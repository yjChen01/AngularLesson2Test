import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() keywordChange = new EventEmitter<string>();
  keyword='';
  TitleHighlight=false;
  fontSize=24;

  constructor() { }

  ngOnInit(): void {
  }

  titlesearch($event){
    console.log($event);
    this.TitleHighlight=!this.TitleHighlight;
    ++this.fontSize;
    this.keywordChange.emit(this.keyword);
  }
}
