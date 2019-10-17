import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public api_key: string = '3c1dddcb27464276b320e2dc75b4927e';

  public newsSourceUrl: string = 'https://newsapi.org/v2/sources?language=en&apiKey=';
  public newsArticleUrl: string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
  public articlesByIdUrl: string = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(`${this.newsSourceUrl}${this.api_key}`);
  }

  initArticles() {
    return this.http.get(`${this.newsArticleUrl}${this.api_key}`);
  }

  getArticlesById(source: string) {
    return this.http.get(`${this.articlesByIdUrl}?sources=${source}&apiKey=${this.api_key}`);
  }

  getArticlesByLanguage(language: string) {
    return this.http.get(`https://newsapi.org/v2/sources?language=${language}&${this.api_key}`);
  }
}
