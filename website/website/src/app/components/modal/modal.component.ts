import { Component } from '@angular/core';
import { ModalOptions } from 'src/interfaces/modal-options';
import { ModalSate } from 'src/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  options: ModalOptions;

  constructor(private state: ModalSate) {
    this.options = state.options;
   }

   /**Sets an action or closes a modal */
   yes() {
     this.state.modal.close('confirmed');
   }

   /**Closes modal using (x) on top right of modal */
   close() {
     this.state.modal.dismiss('not confirmed');
   }
}
