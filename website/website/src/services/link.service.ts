import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Links from 'src/models/links';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  baseUrl = environment.devApiUrl;
  public LINK_API = `${this.baseUrl}/links`;

  constructor(private http: HttpClient) { }

  /**
   * Gets all social links
   */
  getAllLinks(): Observable<Array<Links>> {
    return this.http.get<Array<Links>>(this.LINK_API);
  }

  /**
   * Gets a link by id
   * @param id linkId
   */
  get(id: string) {
    return this.http.get(`${this.LINK_API}/${id}`);
  }
}
