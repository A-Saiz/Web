import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import MenuItems from 'src/models/menuItems';
import { MenuService } from 'src/services/menu-service.service';
import { PageScrollService } from "ngx-page-scroll-core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /**
   * All menu items
   */
  menuItems: Array<MenuItems>;

  /**
   * Selected menu item
   */
  selectedItem: string;

  constructor(private menuService: MenuService,
              private pageScrollServce: PageScrollService,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.menuService.getAllMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }

  /**
   * Anchor scrolls to section on menuitem click
   * @param value string value of selected menu item
   */
  itemClick(value: string) {
    this.selectedItem = value;

    switch (this.selectedItem) {
      case "Home":
        this.pageScrollServce.scroll({
          document: this.document,
          scrollTarget: '.home'
        });
        break;
      case "My work":
        this.pageScrollServce.scroll({
          document: this.document,
          scrollTarget: '.projects-container'
        });
        break;
      case "About":
        this.pageScrollServce.scroll({
          document: this.document,
          scrollTarget: '.about-container'
        });
        break;
      case "Contact":
        this.pageScrollServce.scroll({
          document: this.document,
          scrollTarget: '.contact-container'
        });
        break;
      default:
        break;
    }
  }
}
