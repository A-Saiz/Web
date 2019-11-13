import { Component, OnInit } from '@angular/core';

import { LinkService } from 'src/services/link.service';
import { ModalService } from 'src/services/modal.service';

import { Link } from "src/enums/link.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**Set Link to empty string */
  gitHubLink = '';

  constructor(private linkService: LinkService,
                      private modalService: ModalService) { }

  ngOnInit() {

    this.linkService.getLinkById(Link.githubId)
      .subscribe(url => this.gitHubLink = url.linkUrl,
      err => this.modalService.openModal({
      title: `${err.code}`,
      message: `${err.message}`,
      buttonText: 'Close'
    }));
  }

}
