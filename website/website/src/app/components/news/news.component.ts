import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/services/news-api.service';
import { ModalService } from 'src/services/modal.service';

import * as languages from 'src/enums/language.enum';
import * as countries from 'src/enums/country.enum';
import * as categories from 'src/enums/sub-category.enum';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public mArticles: Array<any>;
  public mSources: Array<any>;
  public language = languages.Language;
  public country = countries.Country;
  public category = categories.SubCategory;

  constructor(private newsApi: NewsApiService, 
              private modalService: ModalService) { }

  ngOnInit() {
    
    //Load articles
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles'],
     error => this.modalService.confirm({
       image: 'assets/error.png',
       title: 'There was an error initializing the news articles',
       message: `${error.code} ${error.message}`,
       noButtonText: 'close'
     }));

    //Load News Sources
    this.newsApi.initSources().subscribe(data => this.mSources = data['sources'],
     error => this.modalService.confirm({
       image: 'assets/error.png',
       title: 'There was an error initializing the news source',
       message: `${error.code} ${error.message}`,
       noButtonText: 'close'
     }));
  }

  searchArticles(source) {
    this.newsApi.getArticlesById(source).subscribe(data => this.mArticles = data['articles'],
    error => this.modalService.confirm({
      image: 'assets/error.png',
      title: 'There was an error retrieving the news articles',
      message: `${error.code} ${error.message}`,
      noButtonText: 'close'
    }));
  }

  searchArticlesByLang(lang) {
    this.newsApi.getArticlesByLanguage(lang).subscribe(data => this.mArticles = data['articles'],
    error => this.modalService.confirm({
      image: 'assets/error.png',
      title: 'There was an error retrieving the news source',
      message: `${error.code} ${error.message}`,
      noButtonText: 'close'
    }));
  }

  searchArticlesByCountry(country) {
    this.newsApi.getArticlesByCountry(country).subscribe(data => this.mArticles = data['articles'],
    error => this.modalService.confirm({
      image: 'assets/error.png',
      title: `There was an error retrieving news from ${country}`,
      message: `${error.code} ${error.message}`,
      noButtonText: 'close'
    }));
  }  

  searchArticlesByCategory(category) {
    this.newsApi.getArticlesByCategory(category).subscribe(data => this.mArticles = data['articles'],
    error => this.modalService.confirm({
      image: 'assets/error.png',
      title: `There was an error retrieving news from ${category} category`,
      message: `${error.code} ${error.message}`,
      noButtonText: 'close'
    }));
  }
}
