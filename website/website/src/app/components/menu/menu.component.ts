import { Component, OnInit } from '@angular/core';
import MenuItems from 'src/models/menuItems';
import MenuService from 'src/services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export default class MenuComponent implements OnInit {

  menuItems: Array<MenuItems>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getAllMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }
}
