import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/services/news-api.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public mArticles: Array<any>;
  public mSources: Array<any>;

  constructor(private newsApi: NewsApiService, private modalService: ModalService) { }

  ngOnInit() {
    //Load articles
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles'],
     error => this.modalService.confirm({
       image: 'assets/error.png',
       title: 'There was an error retrieving the data',
       message: `${error.code} ${error.message}`,
       noButtonText: 'close'
     }));

    //Load News Sources
    this.newsApi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    this.newsApi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }

  searchArticlesByLang(lang) {
    this.newsApi.getArticlesByLanguage(lang).subscribe(data => this.mSources = data['language']);
  }
}
