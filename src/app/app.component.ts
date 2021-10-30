import { ArticlesService } from './articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '標題哈哈';
  subtitle='A place to share your <u>knowledge.</u>';

  // get list(){
  //   return this.articlesService.list;
  // }
  list: Article[] = [];

  constructor(private articlesService:ArticlesService){
  }

  ngOnInit() {
    this.articlesService.getArticle().subscribe((articles) => {
      this.list = articles;
    });
  }

  filterArticles(keyword: string) {
    // this.articlesService.filterArticles(keyword);
    this.articlesService.queryArticle(keyword).subscribe(articles => {
      this.list = articles
    })
  }

  searchArticles(keyword){
    this.articlesService.filterArticles(keyword);
  }
}
