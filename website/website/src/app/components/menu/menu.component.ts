import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

import { MenuService } from 'src/services/menu-service.service';
import { LinkService } from "src/services/link.service";
import { PageScrollService } from "ngx-page-scroll-core";
import { ModalService } from 'src/services/modal.service';

import MenuItems from 'src/models/menuItems';

import { Link } from "src/enums/link.enum";

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

  /**Set link to empty string. */
  gitHubLink = '';

  /**
   * Selected menu item
   */
  selectedItem: string;

  constructor(private menuService: MenuService,
    private linkService: LinkService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private modalService: ModalService) { }

  ngOnInit() {

    //Get all menu items on load
    this.menuService.getAllMenuItems()
      .subscribe(data => this.menuItems = data,
        err => this.modalService.openModal({
          title: `${err.code}`,
          message: `${err.message}`,
          buttonText: 'Close'
        }));

    //Get Github link on  load 
    this.linkService.getLinkById(Link.githubId)
      .subscribe(url => this.gitHubLink = url.linkUrl,
        err => this.modalService.openModal({
          title: `${err.code}`,
          message: `${err.message}`,
          buttonText: 'Close'
        }));
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
        this.modalService.openModal({
          image: 'assets/error.png',
          title: 'Ooh no',
          message: 'Sorry, something went wrong with the scroll button, but you can still manually scroll.',
          buttonText: 'Okie Dokie'
        });
        break;
    }
  }
}
