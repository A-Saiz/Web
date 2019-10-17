import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import MenuItems from 'src/models/menuItems';
import { MenuService } from 'src/services/menu-service.service';
import { PageScrollService } from "ngx-page-scroll-core";
import { ModalService } from 'src/services/modal.service';

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
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private modalService: ModalService) { }

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
        this.pageScrollService.scroll({
          document: this.document,
          scrollTarget: '.home'
        });
        break;
      case "My work":
        this.pageScrollService.scroll({
          document: this.document,
          scrollTarget: '.projects-container'
        });
        break;
      case "About":
        this.pageScrollService.scroll({
          document: this.document,
          scrollTarget: '.about-container'
        });
        break;
      case "Contact":
        this.pageScrollService.scroll({
          document: this.document,
          scrollTarget: '.contact-container'
        });
        break;
      default:
        this.modalService.confirm({
          image: 'assets/error.png',
          title: 'Ooh no',
          message: 'Sorry, something went wrong with the scroll button, but you can still manually scroll.',
          yesButtonText: 'Okie Dokie'
        });
        break;
    }
  }
}
