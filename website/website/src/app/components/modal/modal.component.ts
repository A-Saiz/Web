import { Component, AfterViewInit, Input, TemplateRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { ModalcontentComponent } from '../modalcontent/modalcontent.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  constructor(private modalService: NgbModal) { }

  ngAfterViewInit() {
    this.open();
  }

  open() {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      scrollable: false,
      centered: true
    };
    this.modalService.open(ModalcontentComponent, modalOptions);
  }

}
