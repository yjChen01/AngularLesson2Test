import { ArticlesService } from './articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '標題哈哈';
  subtitle='A place to share your <u>knowledge.</u>';

  get list(){
    return this.articlesService.list;
  }
  constructor(private articlesService:ArticlesService){
  }

  searchArticles(keyword){
    this.articlesService.searchArticles(keyword);
  }
}
