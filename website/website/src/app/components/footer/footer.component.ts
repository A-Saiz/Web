import { Component, OnInit } from '@angular/core';
import Links from 'src/models/links';
import { LinkService } from 'src/services/link.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links: Array<Links>;

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.linkService.getAllLinks().subscribe(data => {
      this.links = data;
    });
  }

}
