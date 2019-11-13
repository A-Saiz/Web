import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/interfaces/modal-options';

/**
 * Service allowing to open Modal from anywhere and get back a promise
 */
@Injectable()
export class ModalService {
  
  constructor(private modalService: NgbModal, private state: ModalSate) {}

  /**
   * Opens a Modal
   * @param options The options for the Modal (Header, Image?, Message, yesButtonText, noButtonText)
   * @returns {Promise<any>} a promise that is fulfilled when the user chooses to confirm,
   * and rejected when a user chooses not to confirm, or close the Modal 
   */
  openModal(options: ModalOptions): Promise<any> {
    this.state.options = options;
    this.state.modal = this.modalService.open(this.state.template, {
      scrollable: false,
      keyboard: false,
      backdrop: 'static'
    });
    return this.state.modal.result;
  }
}

/**
 * An internal service allowing to access, from the modal component, the options and the modal reference.
 * It also allows registering the TemplateRef containing the modal component.
 *
 * It must be declared in the providers of the NgModule, but is not supposed to be used in application code
 */
@Injectable()
export class ModalSate {

  /**
   * The last options passed ModalService.openModal()
   */
  options: ModalOptions;

  /**
   * The last opened Modal
   */
  modal: NgbModalRef;

  /**
   * The Template containing the Modal Component
   */
  template: TemplateRef<any>;
}
