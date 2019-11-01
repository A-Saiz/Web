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

  initSourcesLanguage() {
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=${this.api_key}`)
  }

  getArticlesById(source: string) {
    return this.http.get(`${this.articlesByIdUrl}?sources=${source}&apiKey=${this.api_key}`);
  }

  getArticlesByLanguage(languageAbr: string) {
    return this.http.get(`${this.articlesByIdUrl}?language=${languageAbr}&apiKey=${this.api_key}`);
  }

  getArticlesByCountry (countryAbr: string) {
    return this.http.get(`${this.articlesByIdUrl}?country=${countryAbr}&apiKey=${this.api_key}`)
  }

  getArticlesByCategory (category: string) {
    return this.http.get(`${this.articlesByIdUrl}?category=${category}&apiKey=${this.api_key}`)
  }
}
