import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss']
})
export class ModalcontentComponent implements OnInit {

  @Input()
  public headerTemplate: TemplateRef<any>;

  @Input()
  public bodyTemplate: TemplateRef<any>;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
