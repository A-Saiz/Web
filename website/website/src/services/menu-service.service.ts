import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MenuItems from 'src/models/menuItems';

@Injectable({
  providedIn: 'root',
})
export default class MenuService {

  public API = 'http://localhost:8080/api';
  public MENU_API = `${this.API}/menuitems`;

  constructor(private http: HttpClient) { }

  getAllMenuItems(): Observable<Array<MenuItems>> {
    return this.http.get<Array<MenuItems>>(this.MENU_API);
  }

  get(id: string) {
    return this.http.get(`${this.MENU_API}/${id}`);
  }
}
