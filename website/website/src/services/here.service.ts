import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
import HereSettings from "src/models/here-settings";

@Injectable({
  providedIn: 'root'
})
export class HereService {

  baseUrl = environment.baseUrl;
  public HERE_API = `${this.baseUrl}/HereSettings`;

  constructor(private http: HttpClient) { }

  getAddressInformation(query) {
    var addresses = [];
  }

  /**
   * Get setting by id
   * @param id 
   */
  get(id: number) {
    return this.http.get(`${this.HERE_API}/${id}`);
  }
}
