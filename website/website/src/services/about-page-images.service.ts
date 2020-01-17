import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import AboutPageImages from 'src/models/aboutPageImages';

@Injectable({
  providedIn: 'root'
})
export class AboutPageImagesService {

  baseUrl = environment.baseUrl;
  public IMAGE_API = `${this.baseUrl}/aboutPageImages/`;

  constructor(private http: HttpClient) { }

  getImageById(imageId: number): Observable<AboutPageImages> {
    return this.http.get<AboutPageImages>(`${this.IMAGE_API}${imageId}`);
  }

  getImageByName(typeName: string): Observable<Array<AboutPageImages>> {
    return this.http.get<Array<AboutPageImages>>(`${this.IMAGE_API}?typeName=${typeName}`);
  }
}
