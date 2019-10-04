import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import AboutPageImages from 'src/models/aboutPageImages';

@Injectable({
  providedIn: 'root'
})
export class AboutPageImagesService {

  baseUrl = environment.baseUrl;
  public IMAGE_API = `${this.baseUrl}/aboutPageImages`;

  constructor(private http: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
}
