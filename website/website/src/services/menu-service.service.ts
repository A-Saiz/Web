import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
import MenuItems from 'src/models/menuItems';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  baseUrl = environment.baseUrl;
  public MENU_API = `${this.baseUrl}/menuitems`;

  constructor(private http: HttpClient) { }

  /**
   * Gets all menu items
   */
  getAllMenuItems(): Observable<Array<MenuItems>> {
    return this.http.get<Array<MenuItems>>(this.MENU_API);
  }

  /**
   * Gets menu item by id
   * @param id menuId
   */
  get(id: number) {
    return this.http.get(`${this.MENU_API}/${id}`);
  }
}
