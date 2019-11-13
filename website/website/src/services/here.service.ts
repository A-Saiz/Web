import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
import HereSettings from 'src/models/here-settings';

@Injectable({
  providedIn: 'root'
})
export class HereService {

  baseUrl = environment.baseUrl;
  public HERE_API = `${this.baseUrl}/heresettings/`;

  constructor(private http: HttpClient) { }

  /**
   * Gets all settings from database
   */
  getAllSettings(): Observable<Array<HereSettings>> {
    return this.http.get<Array<HereSettings>>(this.HERE_API);
  }

  /**
   * Get setting by id
   * @param settingsId Settings ID from database
   */
  getSettingById(settingsId: number): Observable<HereSettings> {
    return this.http.get<HereSettings>(`${this.HERE_API}${settingsId}`);
  }
}
