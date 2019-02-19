import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/services/link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit {

  

  constructor(private linkService: LinkService) { }

  ngOnInit() {
  }

}
